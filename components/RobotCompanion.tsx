export function RobotCompanion() {
  return (
    <svg className="assistant-robot-figure" viewBox="0 0 140 110" fill="none" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="robot-metal" x1="43" y1="12" x2="92" y2="90" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fafaf7" /><stop offset="0.46" stopColor="#c9cdd1" /><stop offset="1" stopColor="#7c8691" />
        </linearGradient>
        <linearGradient id="robot-visor" x1="50" y1="20" x2="90" y2="39" gradientUnits="userSpaceOnUse">
          <stop stopColor="#273342" /><stop offset="1" stopColor="#080c11" />
        </linearGradient>
      </defs>
      <path d="M70 10 V3" stroke="#999" strokeWidth="3" /><circle cx="70" cy="3" r="2.5" fill="#3b82f6" />
      <rect x="43" y="12" width="54" height="36" rx="11" fill="url(#robot-metal)" stroke="#a8afb7" />
      <path d="M49 17 H88" stroke="#fff" strokeOpacity="0.6" strokeLinecap="round" />
      <rect x="50" y="20" width="40" height="19" rx="7" fill="url(#robot-visor)" stroke="#475569" />
      <path d="M59 27 V31 M80 27 V31" stroke="#91c6fa" strokeWidth="3" strokeLinecap="round" />
      <path d="M66 33 Q70 36 74 33" stroke="#91c6fa" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M61 48 V55 M79 48 V55" stroke="#777" strokeWidth="3" />
      <rect x="48" y="54" width="44" height="36" rx="9" fill="url(#robot-metal)" stroke="#777" />
      <rect x="62" y="63" width="16" height="10" rx="3" fill="#171717" stroke="#3b82f6" />
      <path d="M48 63 L27 72 L22 91 M92 63 L113 72 L118 91" stroke="#d4d4cf" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="27" cy="72" r="4" fill="#171717" stroke="#bcbcb8" strokeWidth="2" />
      <circle cx="113" cy="72" r="4" fill="#171717" stroke="#bcbcb8" strokeWidth="2" />
    </svg>
  );
}
