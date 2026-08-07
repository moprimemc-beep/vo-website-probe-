import { useId } from "react";

export type IllustrationVariant =
  | "hero"
  | "terraces"
  | "pathway"
  | "planting"
  | "water"
  | "hedge"
  | "maintenance";

interface Props {
  variant: IllustrationVariant;
  className?: string;
  tone?: "dark" | "light";
}

/**
 * Abstrakte, konsistente Editorial-Illustrationen als Bild-Ersatz.
 * Reale Fotos liegen für dieses Demo-Projekt nicht vor.
 */
export function GardenIllustration({ variant, className, tone = "dark" }: Props) {
  const id = useId().replace(/:/g, "");
  const bg = tone === "dark" ? "#10140e" : "#ece6d6";
  const line = tone === "dark" ? "#f3f0e6" : "#14170f";
  const soft = tone === "dark" ? "#262d1f" : "#ddd6c0";
  const accent = "#c1662e";
  const accentSoft = "#e3a874";

  return (
    <svg
      viewBox="0 0 400 300"
      className={className}
      role="img"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id={`${id}-sky`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={bg} />
          <stop offset="100%" stopColor={tone === "dark" ? "#171c13" : "#f7f4ec"} />
        </linearGradient>
      </defs>

      <rect width="400" height="300" fill={`url(#${id}-sky)`} />

      {variant === "hero" && (
        <>
          <circle cx="322" cy="70" r="46" fill={accent} opacity="0.9" />
          <circle cx="322" cy="70" r="70" fill={accent} opacity="0.12" />
          <path d="M0 190 Q100 150 200 175 T400 160 V300 H0 Z" fill={soft} opacity="0.55" />
          <path d="M0 225 Q120 195 220 215 T400 205 V300 H0 Z" fill={line} opacity="0.08" />
          {[40, 90, 140, 190, 240, 290, 340].map((x, i) => (
            <line
              key={x}
              x1={x}
              y1={260 - (i % 3) * 10}
              x2={x}
              y2="300"
              stroke={line}
              strokeWidth="10"
              opacity="0.18"
            />
          ))}
          <path
            d="M20 260 C 90 230, 160 245, 200 210 S 320 175, 380 150"
            fill="none"
            stroke={accentSoft}
            strokeWidth="1.5"
            opacity="0.7"
          />
        </>
      )}

      {variant === "terraces" && (
        <>
          {[0, 1, 2, 3].map((i) => (
            <rect
              key={i}
              x="0"
              y={80 + i * 55}
              width="400"
              height="46"
              fill={i % 2 === 0 ? soft : "transparent"}
              opacity={0.5 - i * 0.08}
            />
          ))}
          {[0, 1, 2, 3].map((i) => (
            <line key={i} x1="0" y1={80 + i * 55} x2="400" y2={80 + i * 55} stroke={line} strokeWidth="1" opacity="0.3" />
          ))}
          <circle cx="340" cy="60" r="22" fill={accent} opacity="0.85" />
        </>
      )}

      {variant === "pathway" && (
        <>
          <path
            d="M40 300 C 100 220, 60 160, 140 110 S 300 40, 360 0"
            fill="none"
            stroke={soft}
            strokeWidth="34"
            strokeLinecap="round"
          />
          {[
            [70, 250],
            [95, 205],
            [130, 165],
            [175, 130],
            [230, 95],
            [285, 60],
            [335, 30],
          ].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r={i % 2 === 0 ? 9 : 6} fill={i === 3 ? accent : line} opacity={i === 3 ? 0.9 : 0.35} />
          ))}
        </>
      )}

      {variant === "planting" && (
        <>
          {[
            [60, 230, 46, soft],
            [120, 210, 60, line],
            [180, 235, 40, soft],
            [235, 200, 70, accent],
            [300, 225, 50, soft],
            [355, 215, 42, line],
          ].map(([cx, cy, r, fill], i) => (
            <circle key={i} cx={cx as number} cy={cy as number} r={r as number} fill={fill as string} opacity={fill === accent ? 0.85 : 0.3} />
          ))}
          <line x1="0" y1="270" x2="400" y2="270" stroke={line} strokeWidth="1" opacity="0.25" />
        </>
      )}

      {variant === "water" && (
        <>
          {[0, 1, 2, 3, 4].map((i) => (
            <path
              key={i}
              d={`M0 ${120 + i * 32} Q 100 ${100 + i * 32} 200 ${120 + i * 32} T 400 ${120 + i * 32}`}
              fill="none"
              stroke={i === 2 ? accent : line}
              strokeWidth={i === 2 ? 2 : 1}
              opacity={i === 2 ? 0.7 : 0.22}
            />
          ))}
          <circle cx="230" cy="150" r="5" fill={accentSoft} opacity="0.8" />
        </>
      )}

      {variant === "hedge" && (
        <>
          {Array.from({ length: 14 }).map((_, i) => {
            const h = 90 + ((i * 37) % 70);
            return (
              <rect
                key={i}
                x={10 + i * 28}
                y={300 - h}
                width="18"
                height={h}
                fill={i === 6 ? accent : soft}
                opacity={i === 6 ? 0.85 : 0.4}
                rx="3"
              />
            );
          })}
          <line x1="0" y1="185" x2="400" y2="185" stroke={line} strokeWidth="1" opacity="0.25" />
        </>
      )}

      {variant === "maintenance" && (
        <>
          <circle cx="200" cy="150" r="90" fill="none" stroke={soft} strokeWidth="2" opacity="0.4" />
          <circle cx="200" cy="150" r="60" fill="none" stroke={line} strokeWidth="1" opacity="0.3" />
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i / 12) * Math.PI * 2;
            const x1 = 200 + Math.cos(angle) * 96;
            const y1 = 150 + Math.sin(angle) * 96;
            const x2 = 200 + Math.cos(angle) * 112;
            const y2 = 150 + Math.sin(angle) * 112;
            return (
              <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={i === 0 ? accent : line} strokeWidth="2" opacity={i === 0 ? 0.9 : 0.3} />
            );
          })}
          <circle cx="200" cy="150" r="8" fill={accent} />
        </>
      )}
    </svg>
  );
}
