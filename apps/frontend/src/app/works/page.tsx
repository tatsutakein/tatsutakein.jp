import { NextPage } from 'next';
import { ContentsLayout } from '@/components/Layout';
import { PagePath } from '@/lib/router';
import clsx from 'clsx';

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
