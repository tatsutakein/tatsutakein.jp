import { ProfileImage } from '@/components/Assets';
import { ContentsLayout } from '@/components/Layout';
import { PagePath } from '@/lib/router';
import clsx from 'clsx';
import { NextPage } from 'next';

const Index: NextPage = () => {
  return (
    <ContentsLayout
      description=''
      pageType='blog'
      pageUrl={PagePath.root(true)}
    >
      <div className={clsx('my-16 flex flex-col justify-center gap-16')}>
        <ProfileImage className={clsx('mx-auto rounded-full')} />
        <h1 className='mx-auto text-4xl'>Ryo Takeuchi</h1>
      </div>
    </ContentsLayout>
  );
};

export default Index;
