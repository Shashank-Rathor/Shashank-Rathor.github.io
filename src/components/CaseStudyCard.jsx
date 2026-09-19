import { Link } from 'react-router-dom';
import MetricTable from './MetricTable';

export default function CaseStudyCard({ study, tilt = -0.4 }) {
  return (
    <article
      className="sheet sheet--lg case-card"
      style={{ padding: 'clamp(26px, 4vw, 52px)', transform: `rotate(${tilt}deg)` }}
    >
      <span aria-hidden="true" className="sheet__pin" style={{ width: '18px', height: '18px', top: '-11px' }} />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <span style={{ fontSize: '11px', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--ink-muted)' }}>
          {study.kicker}
        </span>
        <h3 style={{ fontSize: 'clamp(28px, 4vw, 50px)', fontWeight: 700, lineHeight: 1.02 }}>
          {study.title}
        </h3>
        <p style={{ margin: 0, fontSize: '17px', lineHeight: 1.6, color: 'var(--ink-soft)' }}>{study.hook}</p>
        <Link
          to={`/case-study/${study.slug}`}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            alignSelf: 'flex-start',
            minHeight: 'var(--tap)',
            padding: '0 26px',
            background: 'var(--ink)',
            color: 'var(--paper)',
            borderRadius: 'var(--radius-pill)',
            fontSize: '15px',
            fontWeight: 500,
          }}
        >
          Read the case study →
        </Link>
      </div>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <MetricTable metrics={study.metrics} />
      </div>

      <style>{`
        .case-card { display: grid; grid-template-columns: 1.3fr 1fr; gap: 32px; }
        @media (max-width: 860px) { .case-card { grid-template-columns: 1fr; gap: 20px; } }
      `}</style>
    </article>
  );
}
