/** Prefix a root-relative path with the configured base (e.g. "/putt-n-play-preview/"). */
export function url(path: string) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return `${base}${path}` || "/";
}
