import { ContentsLayout } from '@/components/Layout';
import { ExternalLink } from '@/components/Utils/ExternalLink';
import { PagePath } from '@/lib/router';
import clsx from 'clsx';
import { Metadata, NextPage } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'About',
  description: 'Ryo Takeuchi のポートフォリオサイトです。',
};

const Works: NextPage = () => {
  return (
    <ContentsLayout
      description=''
      pageType='article'
      pageUrl={PagePath.about(true)}
    >
      {/* タイトル */}
      <h1 className={clsx('text-3xl')}>About</h1>
      <p className='mt-6'>Ryo Takeuchi に関する内容とリンクをまとめます。</p>

      {/* プロフィール */}
      <h2 className={clsx('text-2xl mt-12')}>プロフィール</h2>
      <p className='mt-6'>
        埼玉県在住のエンジニアです。
        <br />
        本業は Android
        アプリの開発をメインに行っていますが、フロントエンドやバックエンドの開発もできます。
        <br />
      </p>

      {/* 活動 */}
      <h2 className={clsx('text-2xl mt-12')}>活動</h2>
      <p className='mt-6'>OSS への貢献やコミュニティ活動などを行っています。</p>
      <ul className='list-disc list-outside ml-6 space-y-2 mt-4'>
        <li>
          <div className='flex justify-start items-center gap-4'>
            <ExternalLink href='https://2023.droidkaigi.jp/'>
              DroidKaigi 2023
            </ExternalLink>
            運営スタッフ
          </div>
        </li>
        <li>
          <div className='flex justify-start items-center gap-4'>
            <ExternalLink href='https://flutterkaigi.jp/2023/'>
              FlutterKaigi 2023
            </ExternalLink>
            運営スタッフ
          </div>
        </li>
        <li>
          <div className='flex justify-start items-center gap-4'>
            <ExternalLink href='https://pub.dev/packages/flutter_line_sdk'>
              flutter_line_sdk
            </ExternalLink>
            へのコントリビュート
          </div>
        </li>
      </ul>

      {/* スキル */}
      <h2 className={clsx('text-2xl mt-12')}>スキル</h2>
      <div className='mt-4 flex gap-4 flex-wrap'>
        {[
          'Kotlin',
          'Android View',
          'Jetpack Compose',
          'Swift',
          'SwiftUI',
          'Dart',
          'Flutter',
          'TypeScript',
          'React',
          'Next.js',
          'Golang',
          'PHP',
          'Codeigniter',
          'Laravel',
          'Git',
        ].map((tech) => (
          <div
            key={tech}
            className='rounded-md border py-2 px-4 text-sm'
          >
            {tech}
          </div>
        ))}
      </div>

      {/* ツール */}
      <h2 className={clsx('text-2xl mt-12')}>ツール</h2>
      <div className='mt-4 flex gap-4 flex-wrap'>
        {['IntelliJ IDEA', 'Slack', 'VSCode'].map((tech) => (
          <div
            key={tech}
            className='rounded-md border py-2 px-4 text-sm'
          >
            {tech}
          </div>
        ))}
      </div>
    </ContentsLayout>
  );
};

export default Works;
