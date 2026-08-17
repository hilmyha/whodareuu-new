import fs from "node:fs";
import path from "node:path";

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

  return (
    <div className="container border">
      <p>tag</p>
      <article className="mdx-content">
        <h1>{frontmatter.title}</h1>
        <p>{frontmatter.description}</p>
        {frontmatter.tags.map((tag: string) => (
          <p key={tag}>{tag}</p>
        ))}

        <Post />
      </article>
    </div>
  );
}
