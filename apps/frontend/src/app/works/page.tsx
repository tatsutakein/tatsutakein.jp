import { ContentsLayout } from '@/components/Layout';
import { WorkCard } from '@/features/work/components';
import { Work } from '@/features/work/types';
import { PagePath } from '@/lib/router';
import clsx from 'clsx';
import { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
  title: 'Works | tatsutakein.jp',
  description: 'Ryo Takeuchi が携わったお仕事を紹介します。',
};

const works: Work[] = [
  {
    status: 'In Progress',
    href: null,
    title: 'Unknown',
    description:
      'フロントエンドに Next.js, バックエンドに Golang を用いたサービスの開発に携わっています。',
    src: '/images/hero-default.png',
    techs: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Golang'],
  },
  {
    status: 'Done',
    href: 'https://yoshikawa-fc.com/',
    title: 'YOSHiKAWA CiTY FC',
    description: [
      '埼玉県吉川市のサッカーチーム YOSHiKAWA CiTY FC の公式サイトです。',
      'React(Next.js), Tailwind CSS, Supabase などを利用して作成しました。',
    ].join('\n'),
    src: '/images/works/yoshikawa-city-fc.png',
    techs: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Vercel'],
  },
  {
    status: 'Done',
    href: 'https://fc-puentet.com/',
    title: 'FCプエンテット',
    description: [
      '埼玉県吉川市、越谷市、三郷市で活動する社会人サッカークラブの公式サイトです。',
      'React(Next.js), Tailwind CSS, Framer Motion, Supabase などを利用して作成しました。',
      '2023年07月以降は別の技術を利用して運用されているようです。',
    ].join('\n'),
    src: '/images/works/fc-puentet.webp',
    techs: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Vercel'],
  },
];

const Works: NextPage = () => {
  const workList = works.map((work) => (
    <WorkCard
      key={work.title}
      {...work}
    />
  ));

  return (
    <ContentsLayout
      description=''
      pageType='blog'
      pageUrl={PagePath.works(true)}
    >
      <h1 className={clsx('text-3xl')}>Works</h1>
      <div className='mt-8 grid gap-4 grid-cols-[repeat(auto-fit,minmax(400px,_1fr))]'>
        {workList}
      </div>
    </ContentsLayout>
  );
};

export default Works;
