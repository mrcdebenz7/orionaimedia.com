import fs from 'node:fs/promises';
import path from 'node:path';

const slugs = ['home','services','work','method','packages','contact','insights','about'];
const origin = process.env.SITE_ORIGIN || 'http://localhost:3000';

const outDir = path.join(process.cwd(), 'public', 'og');
await fs.mkdir(outDir, { recursive: true });

for (const s of slugs) {
  const res = await fetch(`${origin}/og/${s}`);
  if (!res.ok) throw new Error(`OG fetch failed for ${s}: ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await fs.writeFile(path.join(outDir, `${s}.png`), buf);
  console.log('✓ OG saved:', s);
}
