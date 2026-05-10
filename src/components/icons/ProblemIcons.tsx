import { IconTile } from "../primitives/IconTile.tsx";

export function SearchFailIcon() {
  return (
    <IconTile rgb="239,68,68">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <circle cx="11" cy="11" r="7" stroke="#EF4444" strokeWidth="2" />
        <line
          x1="16.5"
          y1="16.5"
          x2="21"
          y2="21"
          stroke="#EF4444"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="9"
          y1="9"
          x2="13"
          y2="13"
          stroke="#EF4444"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="13"
          y1="9"
          x2="9"
          y2="13"
          stroke="#EF4444"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </IconTile>
  );
}

export function ScatterIcon() {
  return (
    <IconTile rgb="239,68,68">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <rect
          x="2"
          y="2"
          width="6"
          height="6"
          rx="2"
          fill="#EF4444"
          opacity="0.7"
        />
        <rect
          x="16"
          y="2"
          width="6"
          height="6"
          rx="2"
          fill="#EF4444"
          opacity="0.5"
        />
        <rect
          x="9"
          y="9"
          width="6"
          height="6"
          rx="2"
          fill="#EF4444"
          opacity="0.9"
        />
        <rect
          x="2"
          y="16"
          width="6"
          height="6"
          rx="2"
          fill="#EF4444"
          opacity="0.4"
        />
        <rect
          x="16"
          y="16"
          width="6"
          height="6"
          rx="2"
          fill="#EF4444"
          opacity="0.6"
        />
      </svg>
    </IconTile>
  );
}

export function ClockIcon() {
  return (
    <IconTile rgb="245,158,11">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#F59E0B" strokeWidth="2" />
        <polyline
          points="12 7 12 12 15 15"
          stroke="#F59E0B"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </IconTile>
  );
}

export function AlertCircleIcon() {
  return (
    <IconTile rgb="239,68,68">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="#EF4444" strokeWidth="2" />
        <line
          x1="12"
          y1="8"
          x2="12"
          y2="12"
          stroke="#EF4444"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="12" cy="16" r="1" fill="#EF4444" />
      </svg>
    </IconTile>
  );
}

export function CostIcon() {
  return (
    <IconTile rgb="245,158,11">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <rect
          x="2"
          y="7"
          width="20"
          height="14"
          rx="2"
          stroke="#F59E0B"
          strokeWidth="2"
        />
        <path
          d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"
          stroke="#F59E0B"
          strokeWidth="2"
        />
        <line
          x1="12"
          y1="12"
          x2="12"
          y2="16"
          stroke="#F59E0B"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="10"
          y1="14"
          x2="14"
          y2="14"
          stroke="#F59E0B"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </IconTile>
  );
}
