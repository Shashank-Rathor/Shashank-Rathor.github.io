import { scrollToSection } from '../lib/scrollToSection';

const base = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: 'var(--tap)',
  padding: '0 26px',
  borderRadius: 'var(--radius-pill)',
  fontSize: '15px',
  fontWeight: 600,
  border: '1px solid transparent',
  cursor: 'pointer',
};

const variants = {
  primary: { background: 'var(--accent)', color: '#FFFFFF' },
  ink: { background: 'var(--ink)', color: 'var(--paper)' },
  outline: {
    background: 'transparent',
    color: 'var(--ink)',
    borderColor: 'var(--ink)',
    fontWeight: 500,
  },
};

export default function CTAButton({ href, variant = 'primary', children, ...rest }) {
  return (
    <a
      href={href}
      onClick={(e) => scrollToSection(e, href)}
      style={{ ...base, ...variants[variant] }}
      {...rest}
    >
      {children}
    </a>
  );
}
