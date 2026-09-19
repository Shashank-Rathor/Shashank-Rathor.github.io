import { site } from '../content/site';
import { asset } from '../lib/asset';
import CTAButton from './CTAButton';

const slab = (bg, color, tilt, size) => ({
  background: bg,
  color,
  fontSize: size,
  fontWeight: 700,
  lineHeight: 0.92,
  letterSpacing: '-0.03em',
  padding: '6px 16px',
  transform: `rotate(${tilt}deg)`,
  boxShadow: 'var(--card-shadow)',
});

export default function Hero() {
  const size = 'clamp(42px, 8vw, 112px)';
  return (
    <section
      style={{
        position: 'relative',
        padding: 'clamp(32px, 6vw, 60px) var(--page-x) clamp(40px, 6vw, 64px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px',
      }}
    >
      <h1 className="hero-slabs">
        <span style={slab('var(--ink)', '#EFEBDF', -2, size)}>{site.headline[0]}</span>
        <span style={slab('var(--accent)', '#FFFFFF', 1.5, size)}>{site.headline[1]}</span>
        <span style={slab('var(--ink)', '#EFEBDF', 1, size)}>{site.headline[2]}</span>
      </h1>

      <p className="hand" style={{ fontSize: '30px', color: 'var(--accent)', transform: 'rotate(-2deg)', margin: '10px 0 0' }}>
        {site.tagline}
      </p>

      <p style={{ maxWidth: '620px', textAlign: 'center', fontSize: '17px', lineHeight: 1.6, color: 'var(--ink-soft)' }}>
        {site.positioning} Six years owning acquisition end to end at {site.company} — and the sole
        developer of the platform it runs on.
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center', marginTop: '10px' }}>
        <CTAButton href="#work">View case studies</CTAButton>
        <CTAButton href={asset(site.resume)} variant="outline" download>
          Download resume ↓
        </CTAButton>
      </div>

      <ul
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '8px',
          justifyContent: 'center',
          maxWidth: '720px',
          margin: '22px 0 0',
          padding: 0,
          listStyle: 'none',
        }}
      >
        {site.stack.map((s, i) => (
          <li
            key={s}
            style={{
              fontSize: '11px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              background: 'var(--paper)',
              color: 'var(--ink)',
              padding: '7px 12px',
              boxShadow: 'var(--card-shadow)',
              transform: `rotate(${i % 2 ? 1 : -1.3}deg)`,
            }}
          >
            {s}
          </li>
        ))}
      </ul>

      <style>{`
        .hero-slabs {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: flex-end;
          gap: 10px;
          margin: 0;
        }
        @media (max-width: 720px) {
          .hero-slabs { flex-direction: column; align-items: flex-start; width: 100%; }
          .hero-slabs span:nth-child(2) { align-self: center; }
          .hero-slabs span:nth-child(3) { align-self: flex-end; }
        }
      `}</style>
    </section>
  );
}
