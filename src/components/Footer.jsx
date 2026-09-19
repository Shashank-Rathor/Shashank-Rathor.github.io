import { site } from '../content/site';
import { asset } from '../lib/asset';

const link = {
  fontSize: '21px',
  borderBottom: '1px solid #4A4940',
  paddingBottom: '11px',
  color: 'var(--paper)',
};

export default function Footer() {
  return (
    <footer
      id="contact"
      style={{
        position: 'relative',
        marginTop: 'var(--section-gap)',
        background: 'var(--ink)',
        color: '#EFEBDF',
        padding: 'clamp(40px, 6vw, 72px) var(--page-x)',
      }}
    >
      <span aria-hidden="true" style={tape('96px', -3)} />
      <span aria-hidden="true" style={tape('auto', 2, '120px')} />

      <div className="wrap footer-grid">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <h2 style={{ fontSize: 'clamp(40px, 6vw, 76px)', fontWeight: 700, lineHeight: 0.98 }}>
            Hiring for growth?
          </h2>
          <span className="hand" style={{ fontSize: 'clamp(30px, 4vw, 40px)', color: 'var(--accent)' }}>
            let&rsquo;s talk.
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <a href={`mailto:${site.email}`} style={link}>
            {site.email}
          </a>
          <a href={site.linkedin} style={link} target="_blank" rel="noreferrer">
            LinkedIn →
          </a>
          <a href={site.github} style={link} target="_blank" rel="noreferrer">
            GitHub →
          </a>
          <a
            href={asset(site.resume)}
            download
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              alignSelf: 'flex-start',
              minHeight: '52px',
              padding: '0 28px',
              marginTop: '8px',
              background: 'var(--accent)',
              color: '#FFFFFF',
              borderRadius: 'var(--radius-pill)',
              fontSize: '15px',
              fontWeight: 600,
            }}
          >
            Download resume (PDF)
          </a>
        </div>
      </div>

      <div
        className="wrap"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
          justifyContent: 'space-between',
          borderTop: '1px solid #4A4940',
          paddingTop: '22px',
          marginTop: '44px',
        }}
      >
        <span style={{ fontSize: '13px', color: '#A9A69A' }}>
          {site.name} · {site.role} · {site.location}
        </span>
        <span style={{ fontSize: '13px', color: '#A9A69A' }}>
          Built and deployed by me · React · Vite · GitHub Pages
        </span>
      </div>

      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: 32px;
          align-items: end;
        }
        @media (max-width: 860px) {
          .footer-grid { grid-template-columns: 1fr; align-items: start; }
        }
      `}</style>
    </footer>
  );
}

const tape = (left, deg, right) => ({
  position: 'absolute',
  left,
  right: right || 'auto',
  top: '-16px',
  width: '150px',
  height: '34px',
  background: 'rgba(255,255,255,0.14)',
  transform: `rotate(${deg}deg)`,
});
