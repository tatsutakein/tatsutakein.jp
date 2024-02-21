import type { JSX } from "react";
import Link from "next/link";
import { PagePath } from "@/lib/router";

import { GitHubIcon, InstagramIcon, NoteIcon, TwitterIcon } from "@tatsutakeinjp/ui/assets";

const NAVIGATIONS = {
  main: [
    { name: "About", href: PagePath.about() },
    { name: "Blog", href: PagePath.blogIndex() },
    { name: "Products", href: PagePath.products() },
    { name: "Works", href: PagePath.works() },
    { name: "Patron", href: PagePath.patron() },
    { name: "Policy", href: PagePath.policy() },
  ],
  social: [
    {
      name: "GitHub",
      href: "https://github.com/tatsutakein",
      icon: () => <GitHubIcon className="h-8 text-gray-500" />,
    },
    {
      name: "Twitter",
      href: "https://twitter.com/tatsutakein",
      icon: () => <TwitterIcon className="h-8 text-gray-500" />,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/tatsutakein/",
      icon: () => <InstagramIcon className="h-8 text-gray-500" />,
    },
    {
      name: "Note",
      href: "https://note.com/tatsutakein/",
      icon: () => <NoteIcon className="h-8 w-8 rounded-full border border-gray-500 text-gray-500" />,
    },
  ],
};

export const Footer = (): JSX.Element => (
  <footer className="bg-[#FBF9FF] dark:bg-zinc-800">
    <div className="mx-auto max-w-7xl overflow-hidden px-4 py-12 sm:px-6 lg:px-8">
      <nav className="-mx-5 -my-2 flex grow flex-wrap justify-center" aria-label="Footer">
        {NAVIGATIONS.main.map((item) => (
          <div key={item.name} className="px-5 py-2">
            <Link
              {...item}
              className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 hover:dark:text-gray-300"
            >
              {item.name}
            </Link>
          </div>
        ))}
      </nav>

      <div className="mt-8 flex justify-center space-x-10">
        {NAVIGATIONS.social.map((item) => (
          <a
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 dark:text-gray-400"
          >
            <item.icon />
            <span className="sr-only">{item.icon.name}</span>
          </a>
        ))}
      </div>

      <p className="mt-8 text-center text-base text-gray-400 dark:text-gray-500">
        &copy; 2023 tatsutakein, Inc. All rights reserved.
      </p>
    </div>
  </footer>
);
