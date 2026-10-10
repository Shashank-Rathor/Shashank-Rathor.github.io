/**
 * A single certification chip. Renders as a link when the certification has a
 * `url`, and as plain text when it doesn't — so an unfilled url degrades
 * quietly instead of producing a dead anchor.
 *
 * Visuals are unchanged: dashed outline, muted text, the same tilt. The only
 * addition is a border-colour hover, and no movement, because the chips sit in
 * a wrapping row where a transform would nudge their neighbours. The hover
 * rule lives in global.css because this component renders once per chip.
 */
export default function CertBadge({ certification, tilt = -0.8 }) {
  const { label, issuer, year, url } = certification;

  // One flex item, not two. As separate items the leading space in the
  // separator collapsed at the item boundary and the em-dash rendered flush
  // against a line break. Keeping it in a single inline flow preserves it.
  const content = (
    <span>
      {label}
      <span style={{ color: 'var(--ink-muted)' }}>{` — ${issuer} · ${year}`}</span>
    </span>
  );

  const style = {
    display: 'inline-flex',
    alignItems: 'center',
    minHeight: 'var(--tap)',
    padding: '0 20px',
    border: '2px dashed var(--rule-dashed)',
    color: 'var(--ink-soft)',
    fontSize: '14px',
    transform: `rotate(${tilt}deg)`,
  };

  return (
    <li style={{ display: 'inline-flex' }}>
      {url ? (
        <a className="cert-chip" href={url} target="_blank" rel="noopener noreferrer" style={style}>
          {content}
        </a>
      ) : (
        <span style={style}>{content}</span>
      )}
    </li>
  );
}
