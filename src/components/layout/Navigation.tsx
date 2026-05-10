import type { PresentationState } from '../../hooks/usePresentation.ts';

interface NavigationProps {
  state: PresentationState;
}

const btnBase: React.CSSProperties = {
  width: 48,
  height: 48,
  borderRadius: 8,
  border: '1px solid rgba(255,255,255,0.2)',
  background: 'rgba(255,255,255,0.12)',
  color: '#fff',
  fontSize: 20,
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'opacity 0.2s, background 0.2s',
  pointerEvents: 'all',
};

export function Navigation({ state }: NavigationProps) {
  const { currentIndex, total, goNext, goPrev, canGoNext, canGoPrev } = state;

  return (
    <div
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 72,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 48px',
        background: 'linear-gradient(to top, rgba(0,0,0,0.25) 0%, transparent 100%)',
        pointerEvents: 'none',
      }}
    >
      <button
        onClick={goPrev}
        disabled={!canGoPrev}
        aria-label="Previous slide"
        style={{ ...btnBase, opacity: canGoPrev ? 1 : 0.3, cursor: canGoPrev ? 'pointer' : 'not-allowed' }}
      >
        ←
      </button>

      <span
        style={{
          color: 'rgba(255,255,255,0.7)',
          fontSize: 20,
          fontVariantNumeric: 'tabular-nums',
          fontFamily: 'system-ui, sans-serif',
          pointerEvents: 'none',
        }}
      >
        {currentIndex + 1} / {total}
      </span>

      <button
        onClick={goNext}
        disabled={!canGoNext}
        aria-label="Next slide"
        style={{ ...btnBase, opacity: canGoNext ? 1 : 0.3, cursor: canGoNext ? 'pointer' : 'not-allowed' }}
      >
        →
      </button>
    </div>
  );
}
