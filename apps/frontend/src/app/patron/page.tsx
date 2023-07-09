import { ContentsLayout } from '@/components/Layout';
import { env } from '@/env.mjs';
import { PagePath } from '@/lib/router';
import { ExternalLinkIcon } from '@radix-ui/react-icons';
import clsx from 'clsx';
import { Metadata, NextPage } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Patron',
  description: 'ご支援に関して',
};

const Patron: NextPage = () => {
  return (
    <ContentsLayout
      description=''
      pageType='article'
      pageUrl={PagePath.patron(true)}
    >
      <h1 className={clsx('text-3xl before:line-clamp-1')}>ご支援に関して</h1>
      <p className='mt-6'>ご支援に関する内容とリンクをまとめます。</p>

      <h2 className={clsx('text-2xl mt-12')}>支援先</h2>
      <ul className={clsx('list-disc list-outside ml-6 mt-4 space-y-2')}>
        <li>
          Amazon
          <AmazonWishListLinks />
        </li>
        {false && (
          <li>
            <Link
              href={env.NEXT_PUBLIC_STRIPE_CHECKOUT_URL}
              className={clsx('flex justify-start items-center')}
            >
              Stripe ( 準備中... )
            </Link>
          </li>
        )}
      </ul>
    </ContentsLayout>
  );
};

export default Patron;

const AmazonWishListLinks: React.FC = () => (
  <ul className={clsx('list-disc list-outside ml-4 space-y-2 gap-8 mt-2')}>
    <li>
      <Link
        href='https://www.amazon.jp/hz/wishlist/ls/GMPP063ZQEQF?ref_=wl_share'
        rel='noreferrer'
        className={clsx(
          'flex justify-start items-center hover:opacity-50 text-violet-400',
        )}
        target='_blank'
      >
        いまほしいもの
        <ExternalLinkIcon className='ml-2' />
      </Link>
    </li>
    <li className='mx-auto'>
      <Link
        href='https://www.amazon.jp/hz/wishlist/ls/1JJS0MF76KYRK?ref_=wl_share'
        rel='noreferrer'
        className={clsx(
          'flex justify-start items-center hover:opacity-50 text-violet-400',
        )}
        target='_blank'
      >
        いつでもほしいもの
        <ExternalLinkIcon className='ml-2' />
      </Link>
    </li>
    <li>
      <Link
        href='https://www.amazon.jp/hz/wishlist/ls/8ESLAB30Z5QX?ref_=wl_share'
        rel='noreferrer'
        className={clsx(
          'flex justify-start items-center hover:opacity-50 text-violet-400',
        )}
        target='_blank'
      >
        ほしい Kindle 本
        <ExternalLinkIcon className='ml-2' />
      </Link>
    </li>
  </ul>
);
