// Chem guy — clean geometric hex head with peaceful face.
// Hexagon body, straight bond arms, no bottom dot, symmetric eyes & smile.

const ChemGuy = ({ size = 220, treatment = "outline", color = "var(--ink)", style }) => {
  // 320 x 280 viewBox
  const cx = 160, cy = 130, r = 90;
  const pts = [];
  for (let i = 0; i < 6; i++) {
    const a = Math.PI / 3 * i; // pointy-side up/down, flat sides L/R
    pts.push([cx + Math.cos(a) * r, cy + Math.sin(a) * r]);
  }
  // pts: [right, bot-right, bot-left, left, top-left, top-right]
  const rightArm = pts[1];
  const leftArm = pts[2];
  const rArmEnd = [255, 205];
  const lArmEnd = [60, 205];

  const isFilled = treatment === "solid";
  const strokeWidth = 7;

  return (
    <svg
      viewBox="0 0 320 280"
      width={size}
      height={size * 280 / 320}
      style={style}
      aria-label="Symbiote character"
    >
      <g
        fill={isFilled ? color : "none"}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Hexagon body — clean geometric */}
        <path d={`M ${pts[0][0]} ${pts[0][1]}
                  L ${pts[1][0]} ${pts[1][1]}
                  L ${pts[2][0]} ${pts[2][1]}
                  L ${pts[3][0]} ${pts[3][1]}
                  L ${pts[4][0]} ${pts[4][1]}
                  L ${pts[5][0]} ${pts[5][1]}
                  Z`} />

        {/* Straight bond arms */}
        <line x1={leftArm[0]} y1={leftArm[1]} x2={lArmEnd[0]} y2={lArmEnd[1]} />
        <line x1={rightArm[0]} y1={rightArm[1]} x2={rArmEnd[0]} y2={rArmEnd[1]} />

        {/* Closed peaceful eyes */}
        <path d={`M ${cx - 32} ${cy - 16} Q ${cx - 18} ${cy - 32} ${cx - 4} ${cy - 16}`} fill="none" />
        <path d={`M ${cx + 4} ${cy - 16} Q ${cx + 18} ${cy - 32} ${cx + 32} ${cy - 16}`} fill="none" />

        {/* Soft smile */}
        <path d={`M ${cx - 26} ${cy + 14} Q ${cx} ${cy + 38} ${cx + 26} ${cy + 14}`} fill="none" />
      </g>
    </svg>
  );
};

const ChemGuyMark = ({ size = 24, color = "currentColor", style }) => (
  <svg viewBox="0 0 64 64" width={size} height={size} style={style} aria-hidden="true">
    <path d="M32 6 L52 18 L52 38 L32 50 L12 38 L12 18 Z"
      fill="none" stroke={color} strokeWidth="5" strokeLinejoin="round" />
  </svg>
);

window.ChemGuy = ChemGuy;
window.ChemGuyMark = ChemGuyMark;
