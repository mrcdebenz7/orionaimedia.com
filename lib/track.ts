// Lightweight client-side analytics helper. Safe no-op if providers are absent.
export function track(eventName: string, props?: Record<string, any>): void {
  try {
    if (typeof window === 'undefined') return;
    const anyWin = window as any;
    if (typeof anyWin.gtag === 'function') {
      anyWin.gtag('event', eventName, props || {});
    }
    if (typeof anyWin.plausible === 'function') {
      anyWin.plausible(eventName, { props: props || {} });
    }
  } catch {
    // no-op
  }
}
