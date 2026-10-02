import { useId } from "react";

const SWAG = 80; // largeur d'un feston (une ampoule par feston)
const HEIGHT = 60;
const COLORS = ["#d64535", "#3b7dd8", "#f2c230", "#3f9e5a"];

// Guirlande lumineuse : un motif SVG répété sur toute la largeur.
// Le motif est en unités fixes (pas de viewBox étiré), donc il ne se déforme
// pas : un écran plus large affiche simplement plus d'ampoules.
export default function Garland({ className = "" }: { className?: string }) {
  const id = useId();
  const patternId = `${id}-garland`;
  const glowId = `${id}-glow`;

  return (
    <svg
      aria-hidden="true"
      width="100%"
      height={HEIGHT}
      className={`block ${className}`}
    >
      <defs>
        <filter id={glowId} x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="5" />
        </filter>
        <pattern
          id={patternId}
          width={SWAG * COLORS.length}
          height={HEIGHT}
          patternUnits="userSpaceOnUse"
        >
          {COLORS.map((color, i) => {
            const x = i * SWAG;
            const cx = x + SWAG / 2;
            return (
              <g key={color}>
                <path
                  d={`M${x} 10 Q${cx} 34 ${x + SWAG} 10`}
                  fill="none"
                  stroke="#1f1c19"
                  strokeWidth="1.5"
                />
                <circle cx={cx} cy={34} r={13} fill={color} opacity={0.55} filter={`url(#${glowId})`} />
                <rect x={cx - 3} y={21} width={6} height={6} rx={1} fill="#1f1c19" />
                <ellipse cx={cx} cy={34} rx={6} ry={8} fill={color} />
                <ellipse cx={cx - 2} cy={31} rx={1.6} ry={2.6} fill="#fff" opacity={0.65} />
              </g>
            );
          })}
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  );
}
