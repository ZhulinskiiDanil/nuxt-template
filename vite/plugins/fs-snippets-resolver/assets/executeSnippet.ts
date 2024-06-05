import fs from 'fs';
import path from 'path';

// Assets
import { resolveVariables } from './resolveVariables';
import { prettierFormat } from './prettierFormat';

// Types
import type { Snippet, SnippetTree } from '../types';

export function executeSnippet(
  basePath: string,
  snippetOrTree: Snippet | SnippetTree
) {
  const extname = path.extname(basePath);
  const oldFilename = path.basename(basePath, extname);
  const newFilename = oldFilename.includes('@')
    ? oldFilename.split('@')[0]
    : oldFilename;
  const newBasePath = basePath.replace(oldFilename, newFilename);
  const snippetTree =
    'tree' in snippetOrTree ? snippetOrTree.tree : snippetOrTree;

  const vars = {
    FOLDER_NAME: newFilename
  };

  if (fs.existsSync(basePath)) {
    fs.renameSync(basePath, newBasePath);
  } else if (
    !fs.existsSync(newBasePath) &&
    !path.extname(newBasePath) // is folder
  ) {
    fs.mkdirSync(newBasePath);
  }

  if (fs.existsSync(newBasePath)) {
    const resolvedFiles = snippetTree.map((elm) => {
      return {
        name: resolveVariables(elm.name, vars),
        body: Array.isArray(elm.body)
          ? resolveVariables(elm.body.join('\n'), vars)
          : null,
        tree: elm?.tree || null
      };
    });

    resolvedFiles.forEach((elm) => {
      if (elm.body) {
        fs.writeFileSync(
          path.resolve(newBasePath, elm.name),
          elm.body
        );

        prettierFormat(newBasePath);
      }

      if (elm.tree) {
        executeSnippet(
          path.resolve(
            newBasePath,
            resolveVariables(elm.name, vars)
          ),
          elm.tree
        );
      }
    });
  }
}
