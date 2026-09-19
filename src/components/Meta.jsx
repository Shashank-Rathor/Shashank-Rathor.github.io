import { useEffect } from 'react';
import { site } from '../content/site';

const setTag = (attr, key, content) => {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
};

/**
 * Per-page title, description and OG tags, written to document.head.
 * No extra dependency; see README for the LinkedIn pre-render caveat.
 */
export default function Meta({ title, description, path = '' }) {
  useEffect(() => {
    const fullTitle = title
      ? `${title} — ${site.name}`
      : `${site.name} — Growth & Performance Marketing`;
    document.title = fullTitle;
    setTag('name', 'description', description);

    setTag('property', 'og:title', fullTitle);
    setTag('property', 'og:description', description);
    setTag('property', 'og:type', 'website');
    setTag('property', 'og:url', site.url + path);
    setTag('property', 'og:image', site.url + site.ogImage);

    setTag('name', 'twitter:card', 'summary_large_image');
    setTag('name', 'twitter:title', fullTitle);
    setTag('name', 'twitter:description', description);
    setTag('name', 'twitter:image', site.url + site.ogImage);
  }, [title, description, path]);

  return null;
}
