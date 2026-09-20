/**
 * Section links in site.nav are plain hashes ('#work'), but HashRouter owns
 * location.hash — letting the browser follow one would change the route to
 * /work and render NotFound. So we intercept the click and scroll instead,
 * leaving the route untouched.
 *
 * Smoothness comes from `scroll-behavior` in global.css, which is already
 * switched off under prefers-reduced-motion. Don't pass a behavior here.
 */
export const isSectionHref = (href) =>
  typeof href === 'string' && href.startsWith('#') && !href.startsWith('#/');

export const scrollToSection = (event, href) => {
  if (!isSectionHref(href) || event.defaultPrevented) return;
  const el = document.getElementById(href.slice(1));
  if (!el) return;
  event.preventDefault();
  el.scrollIntoView();
};
