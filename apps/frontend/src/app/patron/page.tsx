import type { Metadata } from "next";
import type { JSX } from "react";
import Link from "next/link";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import clsx from "clsx";

export const metadata: Metadata = {
  title: "Patron",
  description: "ご支援に関して",
};

export default function PatronPage(): JSX.Element {
  return (
    <main className="mx-auto max-w-6xl px-4 py-6 md:px-8">
      <h1 className={clsx("text-3xl before:line-clamp-1")}>ご支援に関して</h1>
      <p className="mt-6">ご支援に関する内容とリンクをまとめます。</p>

      <h2 className={clsx("mt-12 text-2xl")}>支援先</h2>
      <ul className={clsx("ml-6 mt-4 list-outside list-disc space-y-2")}>
        <li>
          Amazon
          <AmazonWishListLinks />
        </li>
      </ul>
    </main>
  );
}

function AmazonWishListLinks(): JSX.Element {
  return (
    <ul className={clsx("ml-4 mt-2 list-outside list-disc gap-8 space-y-2")}>
      <li>
        <Link
          href="https://www.amazon.jp/hz/wishlist/ls/GMPP063ZQEQF?ref_=wl_share"
          rel="noreferrer"
          className={clsx("flex items-center justify-start text-violet-400 hover:opacity-50")}
          target="_blank"
        >
          いまほしいもの
          <ExternalLinkIcon className="ml-2" />
        </Link>
      </li>
      <li className="mx-auto">
        <Link
          href="https://www.amazon.jp/hz/wishlist/ls/1JJS0MF76KYRK?ref_=wl_share"
          rel="noreferrer"
          className={clsx("flex items-center justify-start text-violet-400 hover:opacity-50")}
          target="_blank"
        >
          いつでもほしいもの
          <ExternalLinkIcon className="ml-2" />
        </Link>
      </li>
      <li>
        <Link
          href="https://www.amazon.jp/hz/wishlist/ls/8ESLAB30Z5QX?ref_=wl_share"
          rel="noreferrer"
          className={clsx("flex items-center justify-start text-violet-400 hover:opacity-50")}
          target="_blank"
        >
          ほしい Kindle 本
          <ExternalLinkIcon className="ml-2" />
        </Link>
      </li>
    </ul>
  );
}
