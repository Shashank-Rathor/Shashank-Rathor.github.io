import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import Meta from '../components/Meta';

export default function NotFound() {
  return (
    <Layout anchors={false}>
      <Meta title="Not found" description="That page doesn't exist." />
      <section className="section wrap" style={{ display: 'flex', flexDirection: 'column', gap: '18px', minHeight: '46vh' }}>
        <h1 style={{ fontSize: 'clamp(40px, 8vw, 96px)', fontWeight: 700 }}>404</h1>
        <p className="hand" style={{ fontSize: '30px', color: 'var(--accent)', margin: 0 }}>
          nothing pinned here
        </p>
        <Link to="/" style={{ fontSize: '17px', borderBottom: '1px solid var(--ink)', alignSelf: 'flex-start' }}>
          Back to the wall →
        </Link>
      </section>
    </Layout>
  );
}
