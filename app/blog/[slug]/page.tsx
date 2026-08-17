import fs from "node:fs";
import path from "node:path";

import { Badge } from "@/components/ui/badge";
import { TableOfContents } from "@/components/table-of-content";
import { getToc } from "@/lib/toc";

type Props = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  const files = fs.readdirSync(path.join(process.cwd(), "content/posts"));

  return files.map((file) => ({
    slug: file.replace(".mdx", ""),
  }));
}

export const dynamicParams = false;

export default async function page({ params }: Props) {
  const { slug } = await params;
  const { default: Post, frontmatter } = await import(
    `@/content/posts/${slug}.mdx`
  );

  const filePath = path.join(process.cwd(), "content/posts", `${slug}.mdx`);
  const content = fs.readFileSync(filePath, "utf8");
  const toc = getToc(content);

  return (
    <div className="container my-12">
      <div className="flex">
        <article className="mdx-content min-w-0 flex-1">
          <div>
            <div className="mb-12">
              <h1>{frontmatter.title}</h1>
              <p className="my-1.5">{frontmatter.description}</p>
              <p className="my-1.5 text-sm text-muted-foreground">
                Published at {new Date(frontmatter.date).toDateString()}
              </p>

              {frontmatter.tags.map((tag: string) => (
                <Badge key={tag} className="mr-2">
                  {tag}
                </Badge>
              ))}
            </div>

            <Post />
          </div>
        </article>
        <TableOfContents items={toc} />
      </div>
    </div>
  );
}
