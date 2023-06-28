import { Metadata, NextPage } from 'next';
import { ContentsLayout } from '@/components/Layout';
import { PagePath } from '@/lib/router';
import clsx from 'clsx';

export const metadata: Metadata = {
  title: 'About | tatsutakein.jp',
  description: 'Ryo Takeuchi のポートフォリオサイトです。',
};

const Works: NextPage = () => {
  return (
    <ContentsLayout
      description=''
      pageType='blog'
      pageUrl={PagePath.about(true)}
    >
      <h1 className={clsx('text-4xl')}>About</h1>
    </ContentsLayout>
  );
};

export default Works;
