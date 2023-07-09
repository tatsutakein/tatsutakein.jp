import { UrlObject } from 'url';
import { ExternalLinkIcon } from '@radix-ui/react-icons';
import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

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
export const ExternalLink: React.FC<Props> = ({
  href,
  className,
  children,
}) => {
  return (
    <Link
      href={href}
      rel='noreferrer'
      className={clsx(
        className,
        'flex justify-start items-center hover:opacity-50 text-violet-400',
      )}
      target='_blank'
    >
      {children}
      <ExternalLinkIcon className='ml-2' />
    </Link>
  );
};
