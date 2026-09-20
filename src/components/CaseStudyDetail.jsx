import { Link } from 'react-router-dom';
import StatStrip from './StatStrip';
import MetricTable from './MetricTable';
import DocumentLink from './DocumentLink';
import { asset } from '../lib/asset';

/** Two-column editorial block: sidenote label, then body. */
function Block({ label, children }) {
  return (
    <section className="cs-block">
      <h2
        style={{
          fontSize: '11px',
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          color: 'var(--accent)',
          fontWeight: 500,
        }}
      >
        {label}
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>{children}</div>
    </section>
  );
}

const body = { margin: 0, fontSize: '18px', lineHeight: 1.65, color: 'var(--ink-soft)' };

export default function CaseStudyDetail({ study, prev, next }) {
  return (
    <article>
      {/* title sheet */}
      <section style={{ padding: 'clamp(32px, 5vw, 52px) var(--page-x) 0' }}>
        <div
          className="sheet sheet--lg wrap"
          style={{ padding: 'clamp(28px, 4vw, 56px)', transform: 'rotate(-0.4deg)', display: 'flex', flexDirection: 'column', gap: '22px' }}
        >
          <span aria-hidden="true" className="sheet__pin" style={{ width: '20px', height: '20px', top: '-12px' }} />
          <span style={{ fontSize: '11px', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--ink-muted)' }}>
            {study.kicker}
          </span>
          <h1 style={{ maxWidth: '1000px', fontSize: 'clamp(34px, 6vw, 76px)', fontWeight: 700, lineHeight: 1, letterSpacing: '-0.035em' }}>
            {study.title}
          </h1>
          {study.hand && (
            <span className="hand" style={{ fontSize: 'clamp(24px, 3vw, 32px)', color: 'var(--pin)' }}>
              {study.hand}
            </span>
          )}
          <p style={{ margin: 0, maxWidth: '760px', fontSize: '19px', lineHeight: 1.55, color: 'var(--ink-soft)' }}>
            {study.subtitle}
          </p>
          <dl className="cs-facts">
            {[
              ['Role', study.role],
              ['Timeline', study.timeline],
              ['Company', study.company],
            ].map(([k, v]) => (
              <div key={k} style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                <dt style={{ fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink-muted)' }}>{k}</dt>
                <dd style={{ margin: 0, fontSize: '16px' }}>{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <div style={{ display: 'flex', justifyContent: 'center', padding: '44px var(--page-x) 0' }}>
        <StatStrip items={study.metrics} />
      </div>

      <div className="wrap" style={{ padding: '0 var(--page-x)' }}>
        <Block label="The short version">
          <p className="num" style={{ margin: 0, fontSize: 'clamp(22px, 3vw, 32px)', lineHeight: 1.35 }}>
            {study.shortVersion}
          </p>
        </Block>

        <Block label="Situation">
          {study.situation.map((p, i) => (
            <p key={i} style={body}>{p}</p>
          ))}
        </Block>

        <Block label="The decision">
          <p style={body}>{study.decision.body}</p>
          <div className="sheet sheet--sticky" style={{ padding: '26px', transform: 'rotate(-0.7deg)' }}>
            <span aria-hidden="true" className="sheet__pin" />
            <span style={{ fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink-muted)' }}>
              the tradeoff I accepted
            </span>
            <p className="hand" style={{ margin: '8px 0 0', fontSize: '26px', lineHeight: 1.3 }}>
              {study.decision.tradeoff}
            </p>
          </div>
        </Block>

        <Block label="How I tested it">
          <p style={body}>{study.test.intro}</p>
          <ol className="cs-steps">
            {study.test.steps.map((s, i) => (
              <li key={i} className="sheet" style={{ padding: '22px 20px', transform: `rotate(${i % 2 ? 0.9 : -1}deg)` }}>
                <span aria-hidden="true" className="sheet__pin" />
                <span className="num" style={{ fontSize: '30px' }}>{String(i + 1).padStart(2, '0')}</span>
                <p style={{ margin: '6px 0 0', fontSize: '15px', lineHeight: 1.55 }}>{s}</p>
              </li>
            ))}
          </ol>
        </Block>

        <Block label="What I built">
          <p style={body}>{study.built.body}</p>
          <div className="sheet" style={{ padding: '18px', transform: 'rotate(0.4deg)' }}>
            <span aria-hidden="true" className="sheet__pin" />
            {study.built.image ? (
              // 1600px diagrams scale to ~300px on a phone, which puts their
              // smallest labels at ~2px. Tapping opens the SVG on its own so
              // it can be pinch-zoomed.
              <a
                href={asset(study.built.image)}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'block', cursor: 'zoom-in' }}
              >
                <img src={asset(study.built.image)} alt={study.built.imageAlt} />
              </a>
            ) : (
              <div
                style={{
                  height: '360px',
                  background: 'var(--paper-quiet)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                }}
              >
                <span style={{ fontSize: '13px', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--ink-muted)' }}>
                  [SCREENSHOT OR FUNNEL DIAGRAM]
                </span>
                <span style={{ fontSize: '12px', color: '#86837A' }}>16:9, ~1600px wide</span>
              </div>
            )}
          </div>
        </Block>

        <Block label="Results">
          <div className="sheet" style={{ padding: 'clamp(20px, 3vw, 34px)', transform: 'rotate(-0.4deg)', overflowX: 'auto' }}>
            <span aria-hidden="true" className="sheet__pin" />
            <MetricTable results={study.results} caption={`Results for ${study.title}`} />
          </div>
        </Block>

        <Block label="What I'd do differently">
          <p className="hand" style={{ margin: 0, fontSize: '30px', lineHeight: 1.35, color: 'var(--accent)' }}>
            {study.differently}
          </p>
        </Block>

        {study.documents?.length > 0 && (
          <Block label="Related documents">
            {study.documents.map((d) => (
              <DocumentLink key={d.label} {...d} />
            ))}
          </Block>
        )}
      </div>

      <nav aria-label="Case studies" className="cs-nav">
        <Link to={prev ? `/case-study/${prev.slug}` : '/'} style={{ padding: '38px var(--page-x)', display: 'flex', flexDirection: 'column', gap: '7px', borderRight: '1px solid var(--rule)' }}>
          <span style={{ fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink-faint)' }}>← Previous</span>
          <span style={{ fontSize: '27px', fontWeight: 700 }}>{prev ? prev.title : 'All case studies'}</span>
        </Link>
        <Link to={next ? `/case-study/${next.slug}` : '/'} style={{ padding: '38px var(--page-x)', display: 'flex', flexDirection: 'column', gap: '7px', textAlign: 'right' }}>
          <span style={{ fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink-faint)' }}>Next →</span>
          <span style={{ fontSize: '27px', fontWeight: 700 }}>{next ? next.title : 'All case studies'}</span>
        </Link>
      </nav>

      <style>{`
        .cs-block {
          display: grid;
          grid-template-columns: 220px 1fr;
          gap: 32px;
          margin-top: clamp(40px, 6vw, 56px);
        }
        .cs-facts {
          display: flex; flex-wrap: wrap; gap: 32px; margin: 0;
          border-top: 1px solid var(--rule-paper); padding-top: 14px;
        }
        .cs-steps {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px;
          margin: 0; padding: 0; list-style: none;
        }
        .cs-nav {
          display: grid; grid-template-columns: 1fr 1fr;
          border-top: 1px solid var(--rule); margin-top: var(--section-gap);
        }
        @media (max-width: 860px) {
          .cs-block { grid-template-columns: 1fr; gap: 14px; }
          .cs-steps { grid-template-columns: 1fr; }
          .cs-nav { grid-template-columns: 1fr; }
          .cs-nav a:first-child { border-right: none; border-bottom: 1px solid var(--rule); }
          .cs-nav a:last-child { text-align: left; }
        }
      `}</style>
    </article>
  );
}
