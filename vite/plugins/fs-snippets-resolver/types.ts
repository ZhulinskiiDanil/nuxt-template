export type SnippetTree = {
  name: string;
  tree?: SnippetTree;
  body?: string[];
}[];

export type Snippet = {
  prefix: string[];
  tree: SnippetTree;
};
