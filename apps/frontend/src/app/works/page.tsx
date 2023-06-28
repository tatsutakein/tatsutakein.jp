import { Metadata, NextPage } from 'next';
import { ContentsLayout } from '@/components/Layout';
import { PagePath } from '@/lib/router';
import clsx from 'clsx';

export const metadata: Metadata = {
  title: 'Works | tatsutakein.jp',
  description: 'Ryo Takeuchi のポートフォリオサイトです。',
};

interface IndexPageProps {}

const Works: NextPage<IndexPageProps> = () => {
  return (
    <ContentsLayout
      description=''
      pageType='blog'
      pageUrl={PagePath.works(true)}
    >
      <h1 className={clsx('text-4xl')}>Works</h1>
    </ContentsLayout>
  );
};

export default Works;
