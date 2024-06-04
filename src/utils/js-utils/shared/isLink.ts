export function isLink(link: string): boolean | URL {
  try {
    return new URL(link) || false;
  } catch (err) {
    return false;
  }
}
