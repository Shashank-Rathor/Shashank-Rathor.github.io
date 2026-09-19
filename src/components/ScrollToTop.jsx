import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/** Route changes start at the top; in-page anchors are left alone. */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) return;
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}
