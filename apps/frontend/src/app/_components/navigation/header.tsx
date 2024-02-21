import React from "react";
import Link from "next/link";
import { MobileHeaderMenu } from "@/app/_components/navigation/mobile-header-menu";
import { PagePath } from "@/lib/router";

import { About, Blog, Logo, Products, Works } from "@tatsutakeinjp/ui/assets";

const MENUS = [
  {
    a: {
      name: "About",
      href: PagePath.about(),
    },
    text: () => {
      return <About className="relative top-0.5 w-auto" style={{ height: "16px" }} />;
    },
  },
  {
    a: {
      name: "Posts",
      href: PagePath.postsIndex(),
    },
    text: () => {
      return <Blog className="relative top-0.5 w-auto" style={{ height: "18px" }} />;
    },
  },
  {
    a: {
      name: "Products",
      href: PagePath.products(),
    },
    text: () => {
      return <Products className="relative top-0.5 w-auto" style={{ height: "16px" }} />;
    },
  },
  {
    a: {
      name: "Works",
      href: PagePath.works(),
    },
    text: () => {
      return <Works className="relative top-0.5 w-auto" style={{ height: "16px" }} />;
    },
  },
];

export const Header = (): JSX.Element => {
  const siteName = "tatsutakein";

  return (
    <header className="sticky top-0 z-10 h-11 border-b border-gray-100 bg-[#FBF9FF] dark:border-zinc-700 dark:bg-zinc-800 md:h-16">
      <div className="mx-auto flex h-full w-full items-center justify-between px-4 md:px-8">
        <Link href={PagePath.root()}>
          <Logo className="relative top-0.5 h-6 w-auto md:h-7" />
          <span className="sr-only">{siteName}</span>
        </Link>

        {/* モバイル用メニュー */}
        <MobileHeaderMenu />

        {/* PC用メニュー */}
        <div className="hidden gap-x-6 lg:flex">
          {MENUS.map((menu, index) => {
            return (
              <Link key={index} {...menu.a} className="hover:opacity-50">
                <menu.text />
                <span className="sr-only">{menu.a.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
};
