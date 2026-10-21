import { canonicalSection } from '#lib/segments.js';

/**
 * Serve a locale's translated section names (`/ar-001/المواضيع/<slug>/`) from the
 * canonical routes (`/ar-001/topics/<slug>/`). See src/lib/segments.ts.
 */
export const reroute = ({ url }: { url: URL }): string | void => {
  const parts = url.pathname.split('/');
  if (parts.length < 3 || !parts[2]) return;
  let seg = parts[2];
  try {
    seg = decodeURIComponent(seg);
  } catch {
    return;
  }
  const canonical = canonicalSection(decodeURIComponent(parts[1]), seg);
  if (!canonical || canonical === seg) return;
  parts[2] = canonical;
  return parts.join('/');
};
