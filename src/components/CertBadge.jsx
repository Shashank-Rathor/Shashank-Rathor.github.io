export default function CertBadge({ label, tilt = -0.8 }) {
  return (
    <li
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        minHeight: 'var(--tap)',
        padding: '0 20px',
        border: '2px dashed var(--rule-dashed)',
        color: 'var(--ink-soft)',
        fontSize: '14px',
        transform: `rotate(${tilt}deg)`,
      }}
    >
      {label}
    </li>
  );
}
