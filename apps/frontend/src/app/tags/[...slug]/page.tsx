import { ContentsLayout } from '@/components/Layout';
import { PagePath } from '@/lib/router';
import clsx from 'clsx';
import { Metadata, NextPage } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Tags',
  description: 'Ryo Takeuchi のポートフォリオサイトです。',
};

interface PageProps {
  params: { slug: string[] };
  searchParams: { [key: string]: string | string[] | undefined };
}

const Tags: NextPage<PageProps> = ({ params: { slug } }) => {
  const tags = slug;

  return (
    <ContentsLayout
      description=''
      pageType='blog'
      pageUrl={PagePath.tagResult(tags, true)}
    >
      <h1 className={clsx('text-4xl')}>Tags</h1>

      {/* Tags */}
      <div
        className={clsx('flex flex-wrap gap-4 text-sm', tags.length && 'mt-3')}
      >
        {tags.map((tag) => (
          <Link
            key={tag}
            href={PagePath.tagResult([tag])}
            className='cursor-pointer hover:opacity-50'
          >
            # {tag}
          </Link>
        ))}
      </div>
    </ContentsLayout>
  );
};

export default Tags;
