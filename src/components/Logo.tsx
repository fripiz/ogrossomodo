// Logo Ogrossomodo (piste B « le macaron »).
// - LogoMark : version simplifiée (anneau + O), lisible en petit (header).
// - LogoBadge : macaron complet avec le nom en couronne (grand format).

const FOREST = "#2f4a3a";
const CREAM = "#fbf5ea";
const MUSTARD = "#e0a93b";

export function LogoMark({ size = 44, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 96 96" aria-hidden="true" className={className}>
      <circle cx="48" cy="48" r="47" fill={FOREST} />
      <circle cx="48" cy="48" r="38" fill="none" stroke={CREAM} strokeWidth="2.5" />
      <text
        x="48"
        y="66"
        textAnchor="middle"
        fontSize="54"
        fontStyle="italic"
        fontWeight="700"
        fill={MUSTARD}
        style={{ fontFamily: "var(--font-display)" }}
      >
        O
      </text>
    </svg>
  );
}

export function LogoBadge({ size = 240, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 240 240" role="img" aria-label="Ogrossomodo, guinguette" className={className}>
      <defs>
        <path id="ogr-ring" d="M120 120 m-96 0 a96 96 0 1 1 192 0 a96 96 0 1 1 -192 0" />
      </defs>
      <circle cx="120" cy="120" r="118" fill={FOREST} />
      <circle cx="120" cy="120" r="86" fill="none" stroke={CREAM} strokeWidth="2" />
      <circle cx="120" cy="120" r="112" fill="none" stroke={CREAM} strokeWidth="1.5" strokeDasharray="2 5" />
      <text fontSize="19" fontWeight="600" fill={CREAM} letterSpacing="3" style={{ fontFamily: "var(--font-sans)" }}>
        <textPath href="#ogr-ring" textLength="596" lengthAdjust="spacing">
          OGROSSOMODO · GUINGUETTE · OGROSSOMODO · GUINGUETTE ·
        </textPath>
      </text>
      <text
        x="120"
        y="152"
        textAnchor="middle"
        fontSize="104"
        fontStyle="italic"
        fontWeight="700"
        fill={MUSTARD}
        style={{ fontFamily: "var(--font-display)" }}
      >
        O
      </text>
      <circle cx="120" cy="190" r="4" fill="#b8472a" />
      <circle cx="104" cy="187" r="3" fill={CREAM} />
      <circle cx="136" cy="187" r="3" fill={CREAM} />
    </svg>
  );
}
