export default function PostCard({ post, tilt = -1.4 }) {
  return (
    <a
      href={post.url}
      target="_blank"
      rel="noreferrer"
      className="sheet sheet--sticky"
      style={{
        padding: '26px 24px',
        transform: `rotate(${tilt}deg)`,
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        minHeight: '168px',
      }}
    >
      <span aria-hidden="true" className="sheet__pin" />
      <span style={{ fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink-muted)' }}>
        {post.date}
      </span>
      <span className="hand" style={{ fontSize: '30px', lineHeight: 1.12 }}>
        {post.title}
      </span>
      <span style={{ fontSize: '13px', lineHeight: 1.5, marginTop: 'auto' }}>{post.hook}</span>
    </a>
  );
}
