import type { Snippet } from '../types';

export function findSnippet(
  snippets: Snippet[],
  prefix: string
): Snippet | null {
  return (
    snippets.find((snippet) =>
      snippet.prefix.includes(prefix)
    ) || null
  );
}
