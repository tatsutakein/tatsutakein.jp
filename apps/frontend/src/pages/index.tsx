import { NextPage } from 'next';
import { ContentsLayout } from '@/components/Layout';
import { PagePath } from '@/lib/router';

interface IndexPageProps {}

const IndexPage: NextPage<IndexPageProps> = () => {
  return (
    <ContentsLayout
      description=''
      pageType='blog'
      pageUrl={PagePath.root(true)}
    >
      tatsutakein
    </ContentsLayout>
  );
};

export default IndexPage;
