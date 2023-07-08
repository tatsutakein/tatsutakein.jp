import { Work } from '@/features/work/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = Work;

export const WorkCard: React.FC<Props> = ({
  status,
  href,
  title,
  description,
  src,
  techs,
}) => {
  const content = (
    <>
      {/* ヒーロー画像 */}
      <div className='relative flex h-96 shrink-0 items-center justify-center overflow-hidden'>
        <Image
          className='absolute inset-0 m-auto object-cover'
          src={src}
          alt='#'
          fill
          loading='lazy'
        />
      </div>

      {/* 記事情報 */}
      <div className='h-full bg-white px-4 py-8 dark:bg-zinc-800'>
        <div className='flex gap-4 items-center'>
          <div className='text-lg font-semibold line-clamp-2'>{title}</div>
          <div className='rounded-full border px-4 text-sm'>{status}</div>
        </div>

        <div className='text-gray-500 line-clamp-10 dark:text-gray-400 mt-2 whitespace-pre-line'>
          {description}
        </div>

        <div className='mt-4 flex gap-4 flex-wrap'>
          {techs.map((tech) => (
            <div
              key={tech}
              className='rounded-full border px-2 text-sm'
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </>
  );
  return (
    <article className='flex flex-col overflow-hidden rounded-lg shadow-lg transition-shadow hover:shadow-xl'>
      {href ? (
        <Link
          href={href}
          className='h-full'
          rel='noreferrer'
          target='_blank'
        >
          {content}
        </Link>
      ) : (
        content
      )}
    </article>
  );
};
