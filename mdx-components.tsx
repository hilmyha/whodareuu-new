import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import CodeBlock from "@/components/code-block";

const components: MDXComponents = {
  img: (props) => <Image {...props} alt={props.alt} loading="lazy" />,
  wrapper: ({ children }) => (
    <article className="mdx-content">{children}</article>
  ),
  pre: CodeBlock,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
