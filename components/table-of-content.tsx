import Link from "next/link";

type Item = {
  id: string;
  text: string;
  level: number;
};

export function TableOfContents({ items }: { items: Item[] }) {
  return (
    <aside className="toc-scroll sticky top-18 hidden h-fit w-64 lg:block">
      <p className="mb-4 text-sm font-semibold">On this page</p>

      <nav className="max-h-[80vh] overflow-y-auto">
        {items.map((item) => (
          <Link
            key={item.id}
            href={`#${item.id}`}
            className="block text-sm text-muted-foreground hover:text-foreground"
            style={{
              paddingLeft: `${(item.level - 2) * 12}px`,
            }}
          >
            {item.text}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
