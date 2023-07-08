import { ContentsLayout } from '@/components/Layout';
import { ProductCard } from '@/features/product/components/ProductCard';
import { Product } from '@/features/product/types/product';
import { PagePath } from '@/lib/router';
import clsx from 'clsx';
import { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
  title: 'Products',
  description: 'Ryo Takeuchi が制作したプロダクトを紹介します。',
};

const products: Product[] = [
  {
    href: 'https://play.google.com/store/apps/details?id=com.takechee.qrcodereader',
    title: 'バーコードリーダーアプリ',
    description: [
      '読み取り履歴があるバーコードリーダーアプリです。',
      'AndroidView を利用してマルチモジュールな構成で構築しています。',
      '標準のカメラ機能が優秀になって利用頻度が減ってしまいました。',
    ].join('\n'),
    src: '/images/products/android-barcode-reader.png',
    techs: [
      'Android',
      'Kotlin',
      'MultiModule',
      'buildSrc',
      'AndroidView',
      'ZXing',
      'Room',
    ],
  },
];

const Products: NextPage = () => {
  const productList = products.map((work) => (
    <ProductCard
      key={work.title}
      {...work}
    />
  ));

  return (
    <ContentsLayout
      description=''
      pageType='article'
      pageUrl={PagePath.products(true)}
    >
      <h1 className={clsx('text-3xl')}>Products</h1>
      <div className='mt-8 grid gap-4 grid-cols-[repeat(auto-fit,minmax(400px,_1fr))]'>
        {productList}
      </div>
    </ContentsLayout>
  );
};

export default Products;
