import fs from 'fs';
import path from 'path';
import process from 'process';
import type { Snippet } from '../types';

type SnippetsJSON = {
  snippets: Snippet[];
};

export function getSnippets(configName: string): Snippet[] {
  const rootPath = path.resolve(process.cwd());
  const snippetsJSON = fs.readFileSync(
    path.resolve(rootPath, configName),
    { encoding: 'utf-8' }
  );
  const snippets: Snippet[] = (() => {
    try {
      const result: SnippetsJSON | null = snippetsJSON
        ? JSON.parse(snippetsJSON)
        : null;

      return Array.isArray(result?.snippets)
        ? result.snippets
        : [];
    } catch {
      return [];
    }
  })();

  return snippets;
}
