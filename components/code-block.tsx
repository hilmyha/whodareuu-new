"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";

import { Check, Clipboard } from "lucide-react";

export default function CodeBlock({
  children,
  ...props
}: React.HTMLAttributes<HTMLPreElement>) {
  const ref = useRef<HTMLPreElement>(null);
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    const code = ref.current?.querySelector("code")?.textContent;

    await navigator.clipboard.writeText(String(code));

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="relative group">
      <Button
        variant={"link"}
        onClick={copy}
        size={"sm"}
        className="absolute top-3 right-2 text-white hover:cursor-pointer"
      >
        {copied ? <Check /> : <Clipboard />}
      </Button>

      <pre ref={ref} {...props}>
        {children}
      </pre>
    </div>
  );
}
