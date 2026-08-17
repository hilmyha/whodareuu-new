import { createHighlighter } from "shiki";

export const highlighter = createHighlighter({
  themes: ["github-dark", "github-light"],
  langs: [
    "javascript",
    "typescript",
    "tsx",
    "jsx",
    "bash",
    "json",
    "css",
    "html",
    "markdown",
    "mdx",
    "sql",
  ],
});
