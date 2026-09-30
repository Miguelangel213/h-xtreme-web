// Static export has no image optimizer, so serve files from /public as they are,
// adding the GitHub Pages base path when there is one.
export default function imageLoader({ src }: { src: string }) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${src}`;
}
