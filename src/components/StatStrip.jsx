import { site } from '../content/site';

// The horizontal offset lives in global.css so a media query can tuck the
// overhang in on phones, where it otherwise clears the viewport.
const tape = (side) => ({
  position: 'absolute',
  [side === 'left' ? 'top' : 'bottom']: '-13px',
  width: '84px',
  height: '28px',
  background: 'rgba(26,25,22,0.10)',
  transform: 'rotate(-24deg)',
});

/** The taped metric strip. Defaults to the three headline stats. */
export default function StatStrip({ items = site.stats, tilt = 0.8 }) {
  return (
    <div
      className="sheet sheet--sticky sheet--lg stat-strip"
      style={{ transform: `rotate(${tilt}deg)` }}
    >
      <span aria-hidden="true" className="tape tape--left" style={tape('left')} />
      <span aria-hidden="true" className="tape tape--right" style={tape('right')} />
      {items.map((s) => (
        <div key={s.label} className="stat-strip__item">
          <span className="num" style={{ fontSize: 'clamp(30px, 4vw, 46px)', lineHeight: 1 }}>
            {s.value}
          </span>
          <span
            style={{
              fontSize: '10px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--ink-muted)',
              textAlign: 'center',
            }}
          >
            {s.label}
          </span>
        </div>
      ))}

      <style>{`
        .stat-strip {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          padding: 20px 24px;
        }
        .stat-strip__item {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0 clamp(16px, 3vw, 32px);
        }
        /* Divider on every item except the first. Uses `+` rather than
           :first-child because the two tape spans are the strip's first
           children — :first-child never matches a stat, so the leading
           divider was never removed at any width. */
        .stat-strip__item + .stat-strip__item {
          border-left: 1px solid rgba(26,25,22,0.24);
        }

        /* Stacked: the divider has to become horizontal, or you get stray
           vertical fragments between rows. */
        @media (max-width: 720px) {
          .stat-strip { flex-direction: column; padding: 8px 20px; }
          .stat-strip__item {
            width: 100%;
            padding: 14px 0;
          }
          .stat-strip__item + .stat-strip__item {
            border-left: none;
            border-top: 1px solid rgba(26,25,22,0.24);
          }
        }
      `}</style>
    </div>
  );
}
