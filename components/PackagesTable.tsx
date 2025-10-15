const plans = [
  {
    name: 'Starter',
    price: '$4,800/mo',
    features: [
      'Editorial calendar',
      '4 videos',
      '2 shorts',
      'Light channel ops'
    ]
  },
  {
    name: 'Growth',
    price: '$9,800/mo',
    features: [
      'Monthly testing slate',
      '8 videos',
      '8 shorts',
      'YouTube + Podcast ops'
    ]
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: [
      'Campaign orchestration',
      'Studio + post crew',
      'Owned media growth',
      'Analytics & iteration'
    ]
  }
];

export default function PackagesTable() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {plans.map((p) => (
        <div
          key={p.name}
          className="rounded-panel border border-royal-shade/40 bg-graphite-800/70 p-6"
        >
          <div className="text-gold-gradient text-lg font-semibold">{p.name}</div>
          <div className="mt-1 text-2xl text-metal-text">{p.price}</div>
          <ul className="mt-4 space-y-2 text-sm text-metal-text/80">
            {p.features.map((f) => (
              <li key={f}>• {f}</li>
            ))}
          </ul>
          <a
            href="/contact"
            className="mt-6 inline-block rounded-button border border-royal-shade/50 px-4 py-2 text-sm text-pulse-cyan hover:text-pulse-hover"
          >
            Select
          </a>
        </div>
      ))}
    </div>
  );
}
