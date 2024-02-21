import type { MarkdownToJSX } from "markdown-to-jsx";
import type { AnchorHTMLAttributes, HTMLAttributes, ImgHTMLAttributes } from "react";
import Markdown from "markdown-to-jsx";

import { Link } from "../link";
import { dasherize } from "../utils/dasherize";
import { CodeBlock } from "./code-block";

interface Props {
  className?: string;
  options?: MarkdownToJSX.Options;
  children: string;
}

export const MarkdownRenderer = ({ className, options, children }: Props) => {
  return (
    <Markdown
      className={className}
      options={{
        ...options,
        overrides: {
          h2: ({ children }: HTMLAttributes<HTMLHeadingElement>) => {
            const id = dasherize(children);
            const url = `h2-${id}`;
            return (
              <h2
                id={url}
                className="group relative mb-2 mt-6 w-fit cursor-pointer before:absolute before:-left-4 hover:before:content-['#']"
              >
                <a href={`#${url}`} className="group-hover:underline group-hover:underline-offset-4">
                  {children}
                </a>
              </h2>
            );
          },
          h3: ({ children }: HTMLAttributes<HTMLHeadingElement>) => {
            const id = dasherize(children);
            const url = `h3-${id}`;
            return (
              <h3
                id={url}
                className="group relative mb-2 mt-6 w-fit cursor-pointer before:absolute before:-left-4 hover:before:content-['#']"
              >
                <a href={`#${url}`} className="group-hover:underline group-hover:underline-offset-4">
                  {children}
                </a>
              </h3>
            );
          },
          ul: ({ children }) => <ul className="mb-4 flex list-disc flex-col gap-0.5 pl-6">{children}</ul>,
          // Extract `className` prop to make Link component work properly
          a: ({ className: _, ...rest }: AnchorHTMLAttributes<HTMLAnchorElement>) => <Link {...rest} />,
          p: ({ children }) => <p className="mb-2 text-sm">{children}</p>,
          img: ({ alt, src }: ImgHTMLAttributes<HTMLImageElement>) => (
            <span className="mt-2 block overflow-hidden rounded-xl">
              <img
                alt={alt}
                src={src}
                width={400}
                height={300}
                loading="lazy"
                className="animate-reveal aspect-auto w-full object-cover"
              />
            </span>
          ),
          code: {
            component: CodeBlock,
          },
        },
      }}
    >
      {children}
    </Markdown>
  );
};
