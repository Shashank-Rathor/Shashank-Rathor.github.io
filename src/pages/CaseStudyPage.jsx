import { useParams, Navigate } from 'react-router-dom';
import Layout from '../components/Layout';
import Meta from '../components/Meta';
import CaseStudyDetail from '../components/CaseStudyDetail';
import { getCaseStudy, getAdjacent } from '../content/caseStudies';

export default function CaseStudyPage() {
  const { slug } = useParams();
  const study = getCaseStudy(slug);
  if (!study) return <Navigate to="/" replace />;

  const { prev, next } = getAdjacent(slug);

  return (
    <Layout anchors={false}>
      <Meta title={study.title} description={study.subtitle} path={`#/case-study/${slug}`} />
      <CaseStudyDetail study={study} prev={prev} next={next} />
    </Layout>
  );
}
