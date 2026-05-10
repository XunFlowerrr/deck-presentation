import { IconTile } from "../primitives/IconTile.tsx";

export function ZapIcon() {
  return (
    <IconTile size={52} radius={14} bgOpacity={0.1} borderOpacity={0.2}>
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <defs>
          <linearGradient
            id="zap-grad"
            x1="4"
            y1="2"
            x2="20"
            y2="22"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#7C3AED" />
            <stop offset="1" stopColor="#A855F7" />
          </linearGradient>
        </defs>
        <path d="M13 2L4 14H11L9 22L20 10H13L13 2Z" fill="url(#zap-grad)" />
      </svg>
    </IconTile>
  );
}

export function ParadoxIcon() {
  return (
    <IconTile
      size={52}
      radius={14}
      rgb="168,85,247"
      bgOpacity={0.1}
      borderOpacity={0.2}
    >
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <defs>
          <linearGradient
            id="paradox-a"
            x1="12"
            y1="3"
            x2="12"
            y2="21"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#7C3AED" />
            <stop offset="1" stopColor="#EC4899" />
          </linearGradient>
        </defs>
        <path
          d="M9 18V9M9 9L6 12M9 9L12 12"
          stroke="url(#paradox-a)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 6V15M15 15L12 12M15 15L18 12"
          stroke="url(#paradox-a)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="3 2"
        />
      </svg>
    </IconTile>
  );
}
