import type { MDXComponents } from "mdx/types";
import Image from "next/image";

const components: MDXComponents = {
  img: Image,
  wrapper: ({ children }) => (
    <article className="mdx-content">{children}</article>
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
