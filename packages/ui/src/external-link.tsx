import type { UrlObject } from "url";
import React from "react";
import Link from "next/link";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import clsx from "clsx";

type Url = string | UrlObject;

interface Props {
  href: Url;
  className?: string;
  children?: React.ReactNode;
}

/**
 * 外部リンクを表すコンポーネント
 * @param href
 * @param className
 * @param children
 * @constructor
 */
export const ExternalLink: React.FC<Props> = ({ href, className, children }) => {
  return (
    <Link
      href={href}
      rel="noreferrer"
      className={clsx(className, "flex items-center justify-start text-violet-400 hover:opacity-50")}
      target="_blank"
    >
      {children}
      <ExternalLinkIcon className="ml-2" />
    </Link>
  );
};
