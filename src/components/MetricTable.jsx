/** Label/value rows for a teaser card, or a before/after table for a detail page. */
export default function MetricTable({ metrics = [], results = null, caption }) {
  if (results) {
    return (
      <table>
        {caption && <caption className="visually-hidden">{caption}</caption>}
        <thead>
          <tr>
            {['Metric', 'Before', 'After'].map((h, i) => (
              <th
                key={h}
                scope="col"
                style={{
                  textAlign: i === 0 ? 'left' : 'right',
                  padding: '12px 0',
                  borderBottom: '2px solid var(--ink)',
                  fontSize: '11px',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--ink-muted)',
                  fontWeight: 500,
                }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {results.map((r) => (
            <tr key={r.metric}>
              <th scope="row" style={{ ...cell, textAlign: 'left', fontWeight: 400 }}>
                {r.metric}
              </th>
              <td style={{ ...cell, textAlign: 'right' }}>{r.before}</td>
              <td style={{ ...cell, textAlign: 'right', fontWeight: 700 }}>{r.after}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  return (
    <dl style={{ margin: 0, display: 'flex', flexDirection: 'column' }}>
      {metrics.map((m, i) => (
        <div
          key={m.label}
          style={{
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'space-between',
            gap: '16px',
            padding: '14px 0',
            borderTop: i === 0 ? 'none' : '1px solid var(--rule-paper)',
          }}
        >
          <dt style={{ fontSize: '14px', color: 'var(--ink-muted)' }}>{m.label}</dt>
          <dd className="num" style={{ margin: 0, fontSize: 'clamp(24px, 3vw, 34px)' }}>
            {m.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

const cell = { padding: '15px 0', borderBottom: '1px solid var(--rule-paper)' };
