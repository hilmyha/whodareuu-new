import fs from "fs";
import Link from "next/link";

const postsDirectory = `${process.cwd()}/content/posts`;

export default function page() {
  const files = fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith(".mdx"));

  const posts = files.map((file) => ({
    slug: file.replace(/\.mdx$/, ""),
  }));

  return (
    <div className="container">
      {posts.map((post) => (
        <div key={post.slug}>
          <Link href={`/blog/${post.slug}`}>{post.slug}</Link>
        </div>
      ))}
    </div>
  );
}
