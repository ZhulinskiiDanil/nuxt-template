export function getLastURLSegment(url: string) {
  return url.substring(url.lastIndexOf('/') + 1);
}
