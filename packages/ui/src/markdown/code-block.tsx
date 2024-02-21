"use client";

import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import { domAnimation, LazyMotion, m } from "framer-motion";
import { highlight } from "sugar-high";

import { Button } from "../button";

export const CodeBlock = ({ children }: { children: ReactNode }) => {
  const code = children?.toString() || "";
  // NOTE: If the code is a single line, we don't need to use the highlight function.
  if (!/\n/.test(code)) {
    return <code>{code}</code>;
  }

  const codeRef = useRef<HTMLElement>(null);
  const [copied, setCopied] = useState(false);

  const onCopy = () => {
    setCopied(true);
    void navigator.clipboard.writeText(code);
    setTimeout(() => setCopied(false), 3000);
  };

  useEffect(() => {
    if (codeRef.current) {
      codeRef.current.innerHTML = highlight(code);
    }
  }, [code]);

  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-2 rounded-t-lg border border-gray-500 py-1.5 pl-4 pr-2">
        <div className="flex items-center gap-4">
          <span className="inline-flex items-center gap-1.5">
            <span className="h-4 w-4 rounded-full bg-gray-200" />
            <span className="h-4 w-4 rounded-full bg-gray-200" />
            <span className="h-4 w-4 rounded-full bg-gray-200" />
          </span>
        </div>
        <Button variant="outline" className="rounded-lg" disabled={copied} onClick={onCopy}>
          <LazyMotion features={domAnimation}>
            <m.span
              key={copied ? "copied" : "copy"}
              initial={{ opacity: 0, y: 2 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -2 }}
              className="inline-flex w-14 items-center justify-center gap-0.5"
              transition={{ duration: 0.3 }}
            >
              {copied ? (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="shrink-0"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Copied
                </>
              ) : (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-0.5"
                  >
                    <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                  </svg>
                  Copy
                </>
              )}
            </m.span>
          </LazyMotion>
        </Button>
      </div>
      <div className="overflow-x-auto">
        <pre>
          <code ref={codeRef} className="sh__line" />
        </pre>
      </div>
    </>
  );
};
