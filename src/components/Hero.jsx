import { site } from '../content/site';
import { heroScraps } from '../content/heroScraps';
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

/** Absolute placement for a pinned scrap. `pos` holds any of left/right/top/bottom. */
const at = ({ pos, tilt }) => ({
  position: 'absolute',
  ...pos,
  transform: `rotate(${tilt}deg)`,
});

const kicker = {
  fontSize: '11px',
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: 'var(--ink-muted)',
};

export default function Hero() {
  const size = 'clamp(42px, 8vw, 112px)';
  const s = heroScraps;

  return (
    <section className="hero">
      {/* Everything pinned. Constrained to a centred max-width box so the
          scraps cluster around the headline instead of drifting to the
          screen edges on wide monitors. */}
      <div className="hero-board">
        {/* hand-drawn arrows, decorative */}
        <svg className="hero-scrap hero-arrows" viewBox="0 0 1440 880" aria-hidden="true" focusable="false">
          <path d="M318 268 C 372 226, 430 232, 470 276" fill="none" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" />
          <path d="M470 276 l-16 -16 m16 16 l-20 5" fill="none" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" />
          <path d="M1010 300 C 1064 258, 1110 286, 1120 336" fill="none" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" />
          <path d="M1120 336 l-18 -10 m18 10 l-4 -20" fill="none" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" />
        </svg>

        {/* ---- left column scraps ---- */}
        <div className="hero-scrap sheet sheet--sticky hero-note" style={at(s.notes[0])}>
          <span aria-hidden="true" className="sheet__pin" />
          <span className="hand" style={{ fontSize: '24px', lineHeight: 1.15 }}>{s.notes[0].text}</span>
          <span style={{ ...kicker, marginTop: '10px' }}>{s.notes[0].kicker}</span>
        </div>

        <div className="hero-scrap hero-stub" style={at({ pos: { left: 60, top: 216 }, tilt: 3 })}>
          <span className="hero-stub__num">{s.stub.value}</span>
          <span className="hero-stub__label">
            {s.stub.label[0]}
            <br />
            {s.stub.label[1]}
          </span>
        </div>

        <div className="hero-scrap hero-code" style={at(s.code)}>
          <span style={{ ...kicker, display: 'block', marginBottom: '8px', color: '#6B6961' }}>{s.code.caption}</span>
          <code>
            {s.code.line1}
            <br />
            &nbsp;&nbsp;{s.code.line2}
          </code>
        </div>

        <div className="hero-scrap sheet hero-card" style={at(s.chart)}>
          <span aria-hidden="true" className="sheet__pin" />
          <span style={kicker}>{s.chart.label}</span>
          <span className="num" style={{ display: 'block', fontSize: '44px', lineHeight: 1, marginTop: '6px' }}>
            {s.chart.value}
          </span>
          <svg viewBox="0 0 210 54" style={{ width: '100%', height: '54px', marginTop: '8px' }} aria-hidden="true">
            <polyline points={s.chart.points} fill="none" stroke="var(--ink)" strokeWidth="3" />
            <circle cx="204" cy="4" r="5" fill="var(--pin)" />
          </svg>
        </div>

        {/* ---- right column scraps ---- */}
        <div className="hero-scrap sheet hero-card" style={at(s.funnel)}>
          <span aria-hidden="true" className="sheet__pin" />
          <span style={kicker}>{s.funnel.label}</span>
          <svg viewBox="0 0 190 120" style={{ width: '100%', height: '120px', marginTop: '8px' }} aria-hidden="true">
            <rect x="10" y="10" width="170" height="24" fill="var(--ink)" />
            <rect x="34" y="44" width="122" height="24" fill="var(--ink)" opacity="0.72" />
            <rect x="58" y="78" width="74" height="24" fill="var(--pin)" />
            <text x="95" y="96" textAnchor="middle" fontFamily="Space Grotesk" fontSize="14" fontWeight="700" fill="#EFEBDF">
              {s.funnel.stageLabel}
            </text>
          </svg>
        </div>

        <div className="hero-scrap hero-stamp" style={at(s.stamp)}>
          <span style={{ fontSize: '9px', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--pin)' }}>
            {s.stamp.top}
          </span>
          {s.stamp.lines.map((l) => (
            <span key={l} style={{ fontSize: '15px', fontWeight: 700, lineHeight: 1.1 }}>{l}</span>
          ))}
          <span style={{ fontSize: '9px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink-faint)' }}>
            {s.stamp.foot}
          </span>
        </div>

        <div className="hero-scrap sheet hero-note" style={at(s.project)}>
          <span className="hand" style={{ fontSize: '22px', lineHeight: 1.15 }}>{s.project.text}</span>
          <span style={{ ...kicker, marginTop: '8px' }}>{s.project.kicker}</span>
        </div>

        <div className="hero-scrap sheet sheet--sticky hero-note" style={at(s.notes[1])}>
          <span className="hand" style={{ fontSize: '24px', lineHeight: 1.15 }}>{s.notes[1].text}</span>
          <span style={{ ...kicker, marginTop: '10px' }}>{s.notes[1].kicker}</span>
        </div>

      </div>

      {/* ---- the centre column ---- */}
      <div className="hero-core">
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


        {/* Narrow screens get two scraps in the flow — the absolute ones have
            no margin to live in below 1280px. */}
        <div className="hero-mobile-scraps">
          <div className="hero-stub" style={{ transform: 'rotate(-2deg)' }}>
            <span className="hero-stub__num">{s.stub.value}</span>
            <span className="hero-stub__label">
              {s.stub.label[0]}
              <br />
              {s.stub.label[1]}
            </span>
          </div>
          <div className="sheet sheet--sticky hero-mobile-note" style={{ transform: 'rotate(1.5deg)' }}>
            <span aria-hidden="true" className="sheet__pin" />
            <span className="hand" style={{ fontSize: '22px', lineHeight: 1.15 }}>{s.notes[0].text}</span>
            <span style={{ ...kicker, marginTop: '8px' }}>{s.notes[0].kicker}</span>
          </div>
        </div>

        <ul className="hero-stack">
          {site.stack.map((t, i) => (
            <li key={t} style={{ transform: `rotate(${i % 2 ? 1 : -1.3}deg)` }}>{t}</li>
          ))}
        </ul>
      </div>

      <style>{`
        .hero {
          position: relative;
          padding: clamp(32px, 6vw, 60px) var(--page-x) clamp(40px, 6vw, 64px);
          min-height: 640px;
        }
        .hero-core {
          position: relative;
          z-index: 2;
          max-width: 760px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }
        .hero-slabs {
          display: flex; flex-wrap: wrap; justify-content: center;
          align-items: flex-end; gap: 10px; margin: 0;
        }
        .hero-stack {
          display: flex; flex-wrap: wrap; gap: 8px; justify-content: center;
          max-width: 720px; margin: 22px 0 0; padding: 0; list-style: none;
        }
        .hero-stack li {
          font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase;
          background: var(--paper); color: var(--ink);
          padding: 7px 12px; box-shadow: var(--card-shadow);
        }


        .hero-mobile-scraps { display: none; }
        .hero-mobile-note {
          width: 100%; max-width: 300px; padding: 18px 16px;
          display: flex; flex-direction: column;
        }
        @media (max-width: 1279px) {
          .hero-mobile-scraps {
            display: flex; flex-direction: column; align-items: center;
            gap: 22px; margin-top: 30px;
          }
        }

        /* The pinboard: full height, centred, capped. Scrap left/right
           offsets resolve against this, not the viewport, so they stay
           clustered around the headline on wide monitors. */
        .hero-board {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 50%;
          width: 100%;
          max-width: 1460px;
          transform: translateX(-50%);
          pointer-events: none;
        }
        .hero-board > * { pointer-events: auto; }

        /* --- the pinned furniture --- */
        .hero-note { width: 216px; padding: 20px 18px; display: flex; flex-direction: column; }
        .hero-card { width: 234px; padding: 18px; }
        .hero-arrows {
          position: absolute; inset: 0; width: 100%; height: 100%;
          z-index: 1; pointer-events: none;
        }
        .hero-code {
          width: 238px; padding: 14px 16px;
          background: #17160F; border: 1px solid #3A3930;
          box-shadow: var(--card-shadow);
        }
        .hero-code code {
          display: block; font-family: ui-monospace, Menlo, Consolas, monospace;
          font-size: 12px; line-height: 1.7; color: #C9C6B8;
        }
        .hero-stub {
          display: flex; align-items: stretch; box-shadow: var(--card-shadow);
        }
        .hero-stub__num {
          background: var(--accent); color: #FFFFFF;
          font-size: 26px; font-weight: 700; padding: 8px 12px; line-height: 1;
        }
        .hero-stub__label {
          background: var(--paper); color: var(--ink);
          font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase;
          padding: 8px 12px; line-height: 1.25;
        }
        .hero-stamp {
          width: 132px; height: 132px; border-radius: 50%;
          border: 2px dashed var(--pin); color: var(--ink);
          display: flex; flex-direction: column; align-items: center;
          justify-content: center; text-align: center; gap: 3px;
        }

        /* Scraps only exist where there's room for them. Below this the hero
           is the headline stack alone — the scraps would overlap the copy,
           and .hero-mobile-scraps takes over.

           This declaration sits AFTER the rules above deliberately: .hero-note,
           .hero-stub and .hero-stamp each set their own display, and at equal
           specificity the later rule wins. Declared earlier, it loses — and
           five desktop scraps leak onto phones alongside the mobile pair. */
        .hero-scrap { display: none; }

        @media (min-width: 1280px) {
          .hero { min-height: 820px; }
          .hero-scrap { display: flex; }
          .hero-card { display: block; }
          .hero-arrows { display: block; }
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
