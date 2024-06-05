import path from 'path';
import chokidar from 'chokidar';

// Assets
import { getSnippets } from './assets/getSnippets';
import { findSnippet } from './assets/findSnippet';
import { executeSnippet } from './assets/executeSnippet';

// Types
import type { ViteConfig } from 'nuxt/schema';

type Plugin = NonNullable<ViteConfig['plugins']>['0'];

export default function fsSnippetsResolver(
  folderSnippetsConfig: string
): Plugin {
  if (!folderSnippetsConfig) return;
  const rootPath = path.resolve(process.cwd());

  return {
    name: 'fs-snippets-resolver',
    configureServer() {
      chokidar
        .watch(path.resolve(rootPath, 'src'))
        .on('addDir', (file) => {
          const extname = path.extname(file);
          const filename = path.basename(file, extname);

          if (
            filename.includes('@') &&
            filename.split('@').length === 2
          ) {
            const [newFilename, snippet] = filename.split('@');

            if (newFilename && snippet) {
              const snippets = getSnippets(folderSnippetsConfig);
              const findedSnippet = findSnippet(
                snippets,
                snippet
              );

              if (findedSnippet) {
                executeSnippet(
                  path.relative(rootPath, file),
                  findedSnippet
                );
              }
            }
          }
        });
    }
  };
}
