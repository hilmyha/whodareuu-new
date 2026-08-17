import type { MDXContent } from "mdx/types";
import type { TocEntry } from "remark-mdx-toc";

interface Frontmatter {
  title: string;
  description: string;
}

declare module "*.mdx" {
  const MDXContent: MDXContent;

  export default MDXContent;

  export const frontmatter: Frontmatter;
  export const toc: TocEntry[];
}