export function getToc(content: string) {
  return [...content.matchAll(/^#{1,6}\s+(.+)$/gm)].map((match) => {
    const text = match[1].replace(/[*_`]/g, "");

    const level = match[0].match(/^#+/)?.[0].length ?? 2;

    const id = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-");

    return {
      id,
      text,
      level,
    };
  });
}
