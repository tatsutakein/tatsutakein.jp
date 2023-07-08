import clsx from 'clsx';
import Link from 'next/link';

import { formatDateEn, utcToJstTime } from '@/utils/date';
import { countText, hasJa } from '@/utils/text';
import React from 'react';


interface Props {
  href: string;
  title: string;
  description?: string | undefined | null;
  publishedAt?: string;
  heroImage: string | null;
  heroText?: string | undefined | null;
}

export const PostCard: React.FC<Props> = ({
  href,
  title,
  description,
  publishedAt,
  heroImage,
  heroText,
}) => {
  return (
    <article className='flex flex-col overflow-hidden rounded-lg shadow-lg transition-shadow hover:shadow-xl'>
      <Link
        href={href}
        className='h-full'
      >
        {/* ヒーロー画像 */}
        <div className='relative flex h-40 shrink-0 items-center justify-center overflow-hidden'>
          <img
            className='absolute inset-0 m-auto object-cover'
            src={heroImage}
            alt='#'
          />

          <span
            className={clsx(
              'text-center indent-1 font-semibold tracking-widest text-white opacity-90',
              hasJa(heroText) && countText(heroText) > 6 ? 'text-2xl' : 'text-3xl',
            )}
            style={{ textShadow: '1px 1px 4px rgb(0 0 0 / 25%)' }}
          >
            {heroText}
          </span>
        </div>

        {/* 記事情報 */}
        <div className='h-full bg-white p-4 dark:bg-zinc-800'>
          <div className='text-lg font-semibold line-clamp-2'>{title}</div>

          {description && (
            <div className='mt-1 text-gray-500 line-clamp-2 dark:text-gray-400'>
              {description}
            </div>
          )}

          <div className='mt-3 text-sm text-gray-400 dark:text-gray-500'>
            <time>{formatDateEn(utcToJstTime(new Date(publishedAt)))}</time>
          </div>
        </div>
      </Link>
    </article>
  );
};
