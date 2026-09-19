/** Deliberately quiet: no pin, no tilt, no paper. These have no adoption metrics. */
export default function ProjectCard({ project }) {
  return (
    <article
      className="sheet sheet--quiet"
      style={{ padding: '30px', display: 'flex', flexDirection: 'column', gap: '12px', minHeight: '186px' }}
    >
      <h3 style={{ fontSize: '26px', fontWeight: 700 }}>{project.title}</h3>
      <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.6, color: '#55534B' }}>{project.blurb}</p>
      <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: 'auto', padding: 0, listStyle: 'none' }}>
        {project.tags.map((t) => (
          <li
            key={t}
            style={{
              fontSize: '11px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              border: '1px solid #B9B4A4',
              padding: '5px 10px',
              color: 'var(--ink-soft)',
            }}
          >
            {t}
          </li>
        ))}
      </ul>
    </article>
  );
}
