import React from "react";
import "./WaveBackground.css";

export default function WaveBackground({
  height = "520px",
  children,
  className = "",
}) {
  return (
    <section
      className={`wave-section ${className}`}
      style={{ height }}
    >
      <svg
        className="wave-svg"
        viewBox="0 0 1440 520"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="wavePrimary" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--brand-purple)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="var(--accent-pink)" stopOpacity="0.5" />
          </linearGradient>

          <linearGradient id="waveSecondary" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--accent-pink)" stopOpacity="0.45" />
            <stop offset="100%" stopColor="var(--brand-purple)" stopOpacity="0.45" />
          </linearGradient>
        </defs>

        {/* BACK WAVES */}
        <path
          className="wave-back"
          fill="url(#wavePrimary)"
          opacity="0.25"
          d="M0,280 C260,220 520,340 780,300 1040,260 1220,240 1440,280 L1440,520 L0,520 Z"
        />

        <path
          className="wave-back"
          fill="url(#waveSecondary)"
          opacity="0.18"
          d="M0,300 C300,260 560,340 860,320 1120,300 1320,260 1440,300 L1440,520 L0,520 Z"
        />

        {/* MID WAVES */}
        <path
          className="wave-mid"
          fill="url(#wavePrimary)"
          opacity="0.4"
          d="M0,330 C300,390 600,250 900,310 1180,350 1320,330 1440,310 L1440,520 L0,520 Z"
        />

        <path
          className="wave-mid"
          fill="url(#waveSecondary)"
          opacity="0.32"
          d="M0,350 C260,300 520,420 780,360 1040,300 1220,340 1440,320 L1440,520 L0,520 Z"
        />

        {/* FRONT WAVES */}
        <path
          className="wave-front"
          fill="var(--white)"
          opacity="0.75"
          d="M0,390 C320,340 580,450 860,410 1120,370 1320,380 1440,360 L1440,520 L0,520 Z"
        />

        <path
          className="wave-extra"
          fill="var(--white)"
          opacity="0.45"
          d="M0,410 C300,370 600,430 900,400 1200,370 1440,390 1440,390 L1440,520 L0,520 Z"
        />
      </svg>

      <div className="wave-content">
        {children}
      </div>
    </section>
  );
}
