import { asset } from '../lib/asset';

export default function DocumentLink({ label, href }) {
  return (
    <a
      href={asset(href)}
      download
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '16px',
        minHeight: '58px',
        padding: '0 24px',
        border: '2px dashed var(--rule-dashed)',
        fontSize: '16px',
        color: 'var(--ink-soft)',
      }}
    >
      <span>{label}</span>
      <span style={{ fontSize: '13px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)' }}>
        PDF ↓
      </span>
    </a>
  );
}
