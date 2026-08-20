export function IntersectionGraphic({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 640 640" fill="none" className={className} aria-hidden="true">
      <style>
        {`
          .ig-line { stroke: var(--color-ink); opacity: 0.55; }
          .ig-spine { stroke: var(--color-ink); stroke-width: 2; opacity: 0.85; }
          .ig-branch { stroke: var(--color-faint); stroke-width: 1.25; opacity: 0.6; }
          .ig-node { fill: var(--color-bg); stroke: var(--color-ink); stroke-width: 1.5; opacity: 0.7; }
          .ig-node-branch { fill: var(--color-bg); stroke: var(--color-ink); stroke-width: 1.25; opacity: 0.6; }
          .ig-accent { fill: var(--color-accent); stroke: var(--color-accent); }
          .ig-dot { fill: var(--color-faint); opacity: 0.5; }
        `}
      </style>

      {/* ambient field */}
      {[
        [60, 60], [140, 40], [220, 90], [70, 180], [180, 150], [250, 200],
        [480, 420], [560, 460], [420, 520], [540, 560], [600, 500], [460, 590],
      ].map(([x, y]) => (
        <circle key={`${x}-${y}`} className="ig-dot" cx={x} cy={y} r={2.5} />
      ))}

      {/* hexagon ring — molecular motif */}
      <path className="ig-line" d="M140,450 L183,475 L183,525 L140,550 L97,525 L97,475 Z" strokeWidth={1.5} />

      {/* branch off the ring — organic curve */}
      <path className="ig-branch" d="M97,525 Q75,545 55,565 Q40,590 30,610" />
      <circle className="ig-node-branch" cx={55} cy={565} r={4} />
      <circle className="ig-node-branch" cx={30} cy={610} r={4} />

      {/* branches off the circuit */}
      <path className="ig-branch" d="M430,210 L390,210 L390,160" />
      <rect className="ig-node-branch" x={385.5} y={205.5} width={9} height={9} rx={2} />
      <rect className="ig-node-branch" x={385.5} y={155.5} width={9} height={9} rx={2} />

      <path className="ig-branch" d="M500,140 L540,140 L540,100" />
      <rect className="ig-node-branch" x={535.5} y={135.5} width={9} height={9} rx={2} />
      <rect className="ig-node-branch" x={535.5} y={95.5} width={9} height={9} rx={2} />

      {/* the spine — biology resolving into engineering */}
      <path
        className="ig-spine"
        d="M183,475 Q210,440 240,430 Q270,418 300,410 Q330,385 360,360 L360,290 L430,290 L430,210 L500,210 L500,140 L570,140 L570,80"
      />

      {/* molecule-side nodes */}
      <circle className="ig-node" cx={140} cy={450} r={5} />
      <circle className="ig-accent" cx={183} cy={475} r={6} />
      <circle className="ig-node" cx={183} cy={525} r={5} />
      <circle className="ig-node" cx={140} cy={550} r={5} />
      <circle className="ig-node" cx={97} cy={525} r={5} />
      <circle className="ig-node" cx={97} cy={475} r={5} />
      <circle className="ig-node" cx={240} cy={430} r={5} />
      <circle className="ig-node" cx={300} cy={410} r={5} />

      {/* the intersection point itself */}
      <rect className="ig-accent" x={360} y={360} width={13} height={13} rx={3} transform="rotate(45 360 360)" />

      {/* circuit-side nodes */}
      <rect className="ig-node" x={355.5} y={285.5} width={9} height={9} rx={2} />
      <rect className="ig-node" x={425.5} y={285.5} width={9} height={9} rx={2} />
      <rect className="ig-node" x={425.5} y={205.5} width={9} height={9} rx={2} />
      <rect className="ig-accent" x={495.5} y={205.5} width={10} height={10} rx={2} />
      <rect className="ig-node" x={495.5} y={135.5} width={9} height={9} rx={2} />
      <rect className="ig-node" x={565.5} y={135.5} width={9} height={9} rx={2} />
      <rect className="ig-accent" x={566} y={76} width={10} height={10} rx={2} />
    </svg>
  );
}
