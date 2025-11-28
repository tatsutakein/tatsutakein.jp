import type { AnchorHTMLAttributes, ReactNode } from "react";
import NextLink from "next/link";

import { isExternalLink } from "./utils/link";

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href?: string;
  children?: ReactNode;
}

export const Link = ({ href = "#", children, ...rest }: LinkProps) => {
  const isExternal = isExternalLink(href);
  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="link break-words after:mx-2 after:content-['_↗']"
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <NextLink href={href} className="link" {...rest}>
      {children}
    </NextLink>
  );
};
