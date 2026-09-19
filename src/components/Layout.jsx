import Nav from './Nav';
import Footer from './Footer';

export default function Layout({ anchors = true, children }) {
  return (
    <div className="page">
      <a href="#main" className="visually-hidden">
        Skip to content
      </a>
      <Nav anchors={anchors} />
      <main id="main">{children}</main>
      <Footer />
    </div>
  );
}
