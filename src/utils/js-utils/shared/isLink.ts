export function isLink(link: string): boolean | URL {
  try {
    const url = new URL(link);

    return url || false;
  } catch (err) {
    return false;
  }
}
