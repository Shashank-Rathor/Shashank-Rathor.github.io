// Vite rewrites import.meta.env.BASE_URL to the `base` in vite.config.js.
// Content files store paths WITHOUT a leading slash ('documents/cv.pdf') so
// they keep working under a GitHub Pages project subpath.
export const asset = (path) => {
  if (!path) return '';
  if (/^(https?:)?\/\//.test(path) || path.startsWith('mailto:')) return path;
  return import.meta.env.BASE_URL + path.replace(/^\//, '');
};
