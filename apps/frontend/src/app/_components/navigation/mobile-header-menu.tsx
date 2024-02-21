'use client';

import { PagePath } from '@/lib/router';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

export const MobileHeaderMenu = (): JSX.Element => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          className={clsx('hover:opacity-50', 'lg:hidden')}
          aria-label='Menu'
        >
          <HamburgerMenuIcon className='w-7 h-7' />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className='min-w-[220px] bg-white dark:bg-zinc-800 rounded-md p-2 mr-2 shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade'
          sideOffset={8}
        >
          <DropdownMenu.Item
            asChild
            className='group text-lg leading-none my-1 rounded-md flex items-center h-8 relative pl-8 select-none outline-none data-[highlighted]:bg-violet-700 data-[highlighted]:text-violet-50'
          >
            <Link href={PagePath.about()}>
              About
              <span className='sr-only'>About</span>
            </Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item
            asChild
            className='group text-lg leading-none my-1 rounded-md flex items-center h-8 relative pl-8 select-none outline-none data-[highlighted]:bg-violet-700 data-[highlighted]:text-violet-50'
          >
            <Link href={PagePath.blogIndex()}>
              Blog
              <span className='sr-only'>Blog</span>
            </Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item
            asChild
            className='group text-lg leading-none my-1 rounded-md flex items-center h-8 relative pl-8 select-none outline-none data-[highlighted]:bg-violet-700 data-[highlighted]:text-violet-50'
          >
            <Link href={PagePath.products()}>
              Products
              <span className='sr-only'>Products</span>
            </Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item
            asChild
            className='group text-lg leading-none my-1 rounded-md flex items-center h-8 relative pl-8 select-none outline-none data-[highlighted]:bg-violet-700 data-[highlighted]:text-violet-50'
          >
            <Link href={PagePath.works()}>
              Works
              <span className='sr-only'>Works</span>
            </Link>
          </DropdownMenu.Item>

          <DropdownMenu.Arrow className='mr-2 h-4 w-6 fill-white dark:fill-zinc-800' />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
