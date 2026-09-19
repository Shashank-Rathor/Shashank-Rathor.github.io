export default function CapabilityColumn({ capability, tilt = -1 }) {
  return (
    <div
      className={`sheet ${capability.highlight ? 'sheet--sticky' : ''}`}
      style={{
        padding: '28px 26px',
        transform: `rotate(${tilt}deg)`,
        display: 'flex',
        flexDirection: 'column',
        gap: '11px',
      }}
    >
      <span aria-hidden="true" className="sheet__pin" />
      <h3 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '4px' }}>{capability.title}</h3>
      <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '11px' }}>
        {capability.skills.map((s) => (
          <li
            key={s}
            style={{
              fontSize: '15px',
              borderTop: `1px solid ${capability.highlight ? 'rgba(26,25,22,0.22)' : 'var(--rule-paper)'}`,
              paddingTop: '10px',
            }}
          >
            {s}
          </li>
        ))}
      </ul>
    </div>
  );
}
