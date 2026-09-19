import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { site } from '../content/site';
import { asset } from '../lib/asset';

/**
 * Sticky nav with anchor links and active-section highlighting.
 * Active section comes from an IntersectionObserver over the [id] targets in
 * site.nav, so it works without scroll listeners.
 */
export default function Nav({ anchors = true }) {
  const [active, setActive] = useState('');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!anchors) return undefined;
    const ids = site.nav.map((n) => n.href.replace('#', ''));
    const targets = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!targets.length) return undefined;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, [anchors]);

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 20,
        background: 'rgba(237,234,224,0.92)',
        backdropFilter: 'blur(8px)',
        borderBottom: '1px solid var(--rule)',
      }}
    >
      <div
        className="wrap"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '14px var(--page-x)',
        }}
      >
        <Link to="/" style={{ fontSize: '15px', fontWeight: 700, letterSpacing: '0.04em' }}>
          {site.name.toUpperCase()}
          <span style={{ color: 'var(--accent)' }}>.</span>
        </Link>

        <nav aria-label="Main" className="nav-links">
          {anchors &&
            site.nav.map((n) => {
              const isActive = active === n.href.replace('#', '');
              return (
                <a
                  key={n.href}
                  href={n.href}
                  aria-current={isActive ? 'true' : undefined}
                  style={{
                    fontSize: '14px',
                    paddingBottom: '2px',
                    borderBottom: isActive ? '2px solid var(--accent)' : '2px solid transparent',
                    color: isActive ? 'var(--accent)' : 'var(--ink)',
                  }}
                >
                  {n.label}
                </a>
              );
            })}
          {!anchors && (
            <Link to="/" style={{ fontSize: '14px' }}>
              ← All case studies
            </Link>
          )}
          <a
            href={asset(site.resume)}
            download
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              minHeight: '44px',
              padding: '0 20px',
              background: 'var(--accent)',
              color: '#FFFFFF',
              borderRadius: 'var(--radius-pill)',
              fontSize: '14px',
              fontWeight: 600,
            }}
          >
            Resume ↓
          </a>
        </nav>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>

      {open && (
        <nav
          aria-label="Mobile"
          style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '8px var(--page-x) 16px',
            borderTop: '1px solid var(--rule)',
          }}
        >
          {site.nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              style={{ padding: '14px 0', borderBottom: '1px solid var(--rule)', fontSize: '16px' }}
            >
              {n.label}
            </a>
          ))}
        </nav>
      )}

      <style>{`
        .nav-links { display: flex; align-items: center; gap: 26px; }
        .nav-toggle { display: none; }
        @media (max-width: 860px) {
          .nav-links { display: none; }
          .nav-toggle {
            display: flex; flex-direction: column; align-items: center; justify-content: center;
            gap: 5px; width: 44px; height: 44px; border: 1px solid var(--ink);
            border-radius: var(--radius-pill); background: transparent; cursor: pointer;
          }
          .nav-toggle span { display: block; width: 16px; height: 1px; background: var(--ink); }
        }
      `}</style>
    </header>
  );
}
