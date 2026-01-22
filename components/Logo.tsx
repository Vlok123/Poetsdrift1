export default function Logo({ className = "", color = "black" }: { className?: string; color?: "black" | "white" }) {
  return (
    <div className={`flex items-center ${className}`}>
      <svg
        width="220"
        height="70"
        viewBox="0 0 220 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-auto h-10 md:h-14"
      >
        {/* Ovaal achtergrond met dikke rand */}
        <ellipse
          cx="110"
          cy="35"
          rx="105"
          ry="32"
          stroke={color === "white" ? "white" : "black"}
          strokeWidth="3.5"
          fill="none"
        />
        {/* POETSDRIFT tekst - groot en vet */}
        <text
          x="110"
          y="32"
          textAnchor="middle"
          fill={color === "white" ? "white" : "black"}
          style={{
            fontFamily: 'system-ui, -apple-system, "Helvetica Neue", Arial, sans-serif',
            fontSize: '22px',
            fontWeight: '900',
            letterSpacing: '0.5px',
          }}
        >
          POETSDRIFT
        </text>
        {/* INTERIEURREINIGING tekst - kleiner, regular weight, all-caps */}
        <text
          x="110"
          y="50"
          textAnchor="middle"
          fill={color === "white" ? "white" : "black"}
          style={{
            fontFamily: 'system-ui, -apple-system, "Helvetica Neue", Arial, sans-serif',
            fontSize: '9px',
            fontWeight: '400',
            letterSpacing: '1px',
            textTransform: 'uppercase',
          }}
        >
          INTERIEURREINIGING
        </text>
      </svg>
    </div>
  );
}
