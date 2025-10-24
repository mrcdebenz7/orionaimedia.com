import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import sanitizeHtml from 'sanitize-html';

// Naive in-memory rate limiter (per runtime instance)
const ipHits: Map<string, { count: number; resetAt: number }> = new Map();
const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_HITS = 5; // 5 submissions per window per IP

function getClientIp(req: NextRequest): string {
  const xff = req.headers.get('x-forwarded-for');
  if (xff) return xff.split(',')[0].trim();
  // @ts-expect-error - ip may be available on some platforms
  return (req as any).ip || 'unknown';
}

function rateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = ipHits.get(ip);
  if (!entry || now > entry.resetAt) {
    ipHits.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return true;
  }
  if (entry.count >= MAX_HITS) return false;
  entry.count += 1;
  return true;
}

function sanitize(input: unknown): string {
  const str = String(input || '').slice(0, 10000).trim();
  return sanitizeHtml(str, { allowedTags: [], allowedAttributes: {} });
}

export async function POST(req: NextRequest) {
  try {
    const ip = getClientIp(req);
    if (!rateLimit(ip)) {
      return NextResponse.json({ ok: false, error: 'Rate limit exceeded. Try again later.' }, { status: 429 });
    }

    const contentType = req.headers.get('content-type') || '';
    let data: FormData | null = null;
    if (contentType.includes('multipart/form-data') || contentType.includes('application/x-www-form-urlencoded')) {
      data = await req.formData();
    } else if (contentType.includes('application/json')) {
      const json = await req.json().catch(() => ({}));
      data = new FormData();
      Object.entries(json || {}).forEach(([k, v]) => data!.set(k, String(v)));
    } else {
      data = await req.formData();
    }

    const hp = sanitize(data.get('__hp'));
    if (hp) {
      return NextResponse.json({ ok: false, error: 'Spam detected.' }, { status: 400 });
    }

    const name = sanitize(data.get('name'));
    const email = sanitize(data.get('email'));
    const company = sanitize(data.get('company'));
    const website = sanitize(data.get('website'));
    const budget = sanitize(data.get('budget'));
    const message = sanitize(data.get('message'));
    const intent = sanitize(data.get('intent'));

    if (!name || !email || !message || !name.trim() || !email.trim() || !message.trim()) {
      return NextResponse.json({ ok: false, error: 'Missing required fields.' }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ ok: false, error: 'Invalid email address.' }, { status: 400 });
    }

    const { RESEND_API_KEY, CONTACT_TO } = process.env as Record<string, string | undefined>;
    if (!RESEND_API_KEY || !CONTACT_TO) {
      return NextResponse.json(
        { ok: false, error: 'Email service not configured. Please use the mailto fallback.' },
        { status: 503 }
      );
    }

    const resend = new Resend(RESEND_API_KEY);
    const subject = `New inquiry${intent ? ` — ${intent}` : ''} from ${name}`;
    const html = `
      <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;">
        <h2 style="margin:0 0 12px;">New Inquiry ${intent ? `— ${intent}` : ''}</h2>
        <p style="margin:0 0 8px;"><strong>Name:</strong> ${name}</p>
        <p style="margin:0 0 8px;"><strong>Email:</strong> ${email}</p>
        ${company ? `<p style=\"margin:0 0 8px;\"><strong>Company:</strong> ${company}</p>` : ''}
        ${website ? `<p style=\"margin:0 0 8px;\"><strong>Website:</strong> ${website}</p>` : ''}
        ${budget ? `<p style=\"margin:0 0 8px;\"><strong>Budget:</strong> ${budget}</p>` : ''}
        <p style="margin:16px 0 8px;"><strong>Message:</strong></p>
        <pre style="white-space:pre-wrap;background:#f8f9fb;padding:12px;border-radius:6px;border:1px solid #e5e7eb;">${message}</pre>
        <hr style="margin:16px 0;border:none;border-top:1px solid #e5e7eb;" />
        <p style="color:#64748b;font-size:12px;">IP: ${ip}</p>
      </div>
    `;

    try {
      const sent = await resend.emails.send({
        from: 'Orion Ascend <noreply@orionaimedia.com>',
        to: [CONTACT_TO],
        reply_to: email,
        subject,
        html
      } as any);

      if ((sent as any)?.error) {
        const err = (sent as any).error;
        console.error('Contact send error', err?.name || '', err?.message || '');
        return NextResponse.json({ ok: false, error: 'Failed to send email.' }, { status: 502 });
      }

      const ref = (sent as any)?.id || (sent as any)?.data?.id || undefined;
      return NextResponse.json({ ok: true, ref }, { status: 200 });
    } catch (err: any) {
      console.error('Contact send exception', err?.message || err);
      return NextResponse.json({ ok: false, error: 'Unexpected server error.' }, { status: 500 });
    }
  } catch (e: any) {
    console.error('Contact route error', e?.message || e);
    return NextResponse.json({ ok: false, error: 'Bad request.' }, { status: 400 });
  }
}
