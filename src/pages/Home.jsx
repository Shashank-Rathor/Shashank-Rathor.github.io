import Layout from '../components/Layout';
import Meta from '../components/Meta';
import Hero from '../components/Hero';
import StatStrip from '../components/StatStrip';
import SectionHeading from '../components/SectionHeading';
import CaseStudyCard from '../components/CaseStudyCard';
import CapabilityColumn from '../components/CapabilityColumn';
import ProjectCard from '../components/ProjectCard';
import CertBadge from '../components/CertBadge';

import { site } from '../content/site';
import { caseStudies } from '../content/caseStudies';
import { capabilities } from '../content/capabilities';
import { projects } from '../content/projects';
import { certifications } from '../content/certifications';

export default function Home() {
  return (
    <Layout>
      <Meta description={`${site.positioning} Growth, performance marketing and product at ${site.company}.`} />

      <Hero />

      <div style={{ display: 'flex', justifyContent: 'center', padding: '0 var(--page-x)' }}>
        <StatStrip />
      </div>

      <section id="work" className="section">
        <div className="wrap" style={{ display: 'flex', flexDirection: 'column', gap: '34px' }}>
          <SectionHeading number="01" title="Case studies" note="two problems where the fix wasn't more spend" />
          {caseStudies.map((s, i) => (
            <CaseStudyCard key={s.slug} study={s} tilt={i % 2 ? 0.5 : -0.4} />
          ))}
        </div>
      </section>

      <section id="capabilities" className="section">
        <div className="wrap" style={{ display: 'flex', flexDirection: 'column', gap: '34px' }}>
          <SectionHeading number="02" title="What I do" note="three jobs, one loop" />
          <div className="grid-3">
            {capabilities.map((c, i) => (
              <CapabilityColumn key={c.id} capability={c} tilt={[-1, 0.8, -0.6][i % 3]} />
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="wrap" style={{ display: 'flex', flexDirection: 'column', gap: '34px' }}>
          <SectionHeading number="03" title="Projects" note="shown as craft — no adoption metrics attached" />
          <div className="grid-2">
            {projects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </div>
      </section>

      <section id="certifications" className="section">
        <div className="wrap" style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          <SectionHeading number="04" title="Certifications" />
          <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', margin: 0, padding: 0, listStyle: 'none' }}>
            {certifications.map((c, i) => (
              <CertBadge key={c.id} certification={c} tilt={[-0.8, 0.6, -0.5, 0.9, -0.7][i % 5]} />
            ))}
          </ul>
        </div>
      </section>

      <style>{`
        .grid-2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 26px; }
        .grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 26px; }
        @media (max-width: 960px) { .grid-3 { grid-template-columns: 1fr; } }
        @media (max-width: 720px) { .grid-2 { grid-template-columns: 1fr; } }
      `}</style>
    </Layout>
  );
}
