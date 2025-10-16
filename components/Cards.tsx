type Card = { title: string; body: string };

export function SimpleCards({ items }: { items: Card[] }) {
    return (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
                <div
                    key={item.title}
                    className="rounded-panel bg-graphite-800/70 border border-royal-shade/40 p-5 hover:border-pulse-hover/60 transition-colors"
                >
                    <h3 className="text-metal-text/90 font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm text-metal-text/70">{item.body}</p>
                </div>
            ))}
        </div>
    );
}

