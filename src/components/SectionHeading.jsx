export default function SectionHeading({ number, title, note, action }) {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '12px',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        borderBottom: '1px solid var(--rule)',
        paddingBottom: '16px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px' }}>
        <span
          style={{
            fontSize: '11px',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--accent)',
          }}
        >
          {number}
        </span>
        <h2 style={{ fontSize: 'clamp(26px, 3.4vw, 40px)', fontWeight: 700 }}>{title}</h2>
      </div>
      {note && (
        <span className="hand" style={{ fontSize: '26px', color: 'var(--ink-muted)' }}>
          {note}
        </span>
      )}
      {action}
    </div>
  );
}
