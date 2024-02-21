"use client";

import React from "react";
import Link from "next/link";
import { PagePath } from "@/lib/router";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import clsx from "clsx";

export const MobileHeaderMenu = (): JSX.Element => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className={clsx("hover:opacity-50", "lg:hidden")} aria-label="Menu">
          <HamburgerMenuIcon className="h-7 w-7" />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade mr-2 min-w-[220px] rounded-md bg-white p-2 shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] dark:bg-zinc-800"
          sideOffset={8}
        >
          <DropdownMenu.Item
            asChild
            className="group relative my-1 flex h-8 select-none items-center rounded-md pl-8 text-lg leading-none outline-none data-[highlighted]:bg-violet-700 data-[highlighted]:text-violet-50"
          >
            <Link href={PagePath.about()}>
              About
              <span className="sr-only">About</span>
            </Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item
            asChild
            className="group relative my-1 flex h-8 select-none items-center rounded-md pl-8 text-lg leading-none outline-none data-[highlighted]:bg-violet-700 data-[highlighted]:text-violet-50"
          >
            <Link href={PagePath.postsIndex()}>
              Posts
              <span className="sr-only">Posts</span>
            </Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item
            asChild
            className="group relative my-1 flex h-8 select-none items-center rounded-md pl-8 text-lg leading-none outline-none data-[highlighted]:bg-violet-700 data-[highlighted]:text-violet-50"
          >
            <Link href={PagePath.products()}>
              Products
              <span className="sr-only">Products</span>
            </Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item
            asChild
            className="group relative my-1 flex h-8 select-none items-center rounded-md pl-8 text-lg leading-none outline-none data-[highlighted]:bg-violet-700 data-[highlighted]:text-violet-50"
          >
            <Link href={PagePath.works()}>
              Works
              <span className="sr-only">Works</span>
            </Link>
          </DropdownMenu.Item>

          <DropdownMenu.Arrow className="mr-2 h-4 w-6 fill-white dark:fill-zinc-800" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
