import type { Product } from "@/app/_features/product";
import type { Metadata } from "next";
import type { JSX } from "react";
import { ProductCard } from "@/app/_features/product";
import clsx from "clsx";

export const metadata: Metadata = {
  title: "Products",
  description: "Ryo Takeuchi が制作したプロダクトを紹介します。",
};

const products: Product[] = [
  {
    href: "https://play.google.com/store/apps/details?id=com.takechee.qrcodereader",
    title: "バーコードリーダーアプリ",
    description: [
      "読み取り履歴があるバーコードリーダーアプリです。",
      "AndroidView を利用してマルチモジュールな構成で構築しています。",
      "標準のカメラ機能が優秀になって利用頻度が減ってしまいました。",
    ].join("\n"),
    src: "/images/products/android-barcode-reader.png",
    techs: ["Android", "Kotlin", "MultiModule", "buildSrc", "AndroidView", "ZXing", "Room"],
  },
];

export default function ProductsPage(): JSX.Element {
  const productList = products.map((work) => <ProductCard key={work.title} {...work} />);

  return (
    <main className="mx-auto max-w-6xl px-4 py-6 md:px-8">
      <h1 className={clsx("text-3xl")}>Products</h1>
      <div className="mt-8 grid grid-cols-1 gap-4">{productList}</div>
    </main>
  );
}
