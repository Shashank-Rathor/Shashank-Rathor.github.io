import { site } from '../content/site';

const tape = (side) => ({
  position: 'absolute',
  [side]: '-24px',
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
      className="sheet sheet--sticky sheet--lg"
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        padding: '20px 24px',
        transform: `rotate(${tilt}deg)`,
      }}
    >
      <span aria-hidden="true" style={tape('left')} />
      <span aria-hidden="true" style={tape('right')} />
      {items.map((s, i) => (
        <div
          key={s.label}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '0 clamp(16px, 3vw, 32px)',
            borderLeft: i === 0 ? 'none' : '1px solid rgba(26,25,22,0.24)',
          }}
        >
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
    </div>
  );
}
