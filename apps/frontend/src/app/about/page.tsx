import type { Metadata } from "next";
import type { JSX } from "react";
import clsx from "clsx";

import { ExternalLink } from "@tatsutakeinjp/ui/external-link";

export const metadata: Metadata = {
  title: "About",
  description: "Ryo Takeuchi のポートフォリオサイトです。",
};

export default function AboutPage(): JSX.Element {
  return (
    <main className="mx-auto max-w-6xl px-4 py-6 md:px-8">
      {/* タイトル */}
      <h1 className={clsx("text-3xl")}>About</h1>
      <p className="mt-6">Ryo Takeuchi に関する内容とリンクをまとめます。</p>

      {/* プロフィール */}
      <h2 className={clsx("mt-12 text-2xl")}>プロフィール</h2>
      <p className="mt-6">
        埼玉県在住のエンジニアです。
        <br />
        本業は Android アプリの開発をメインに行っていますが、フロントエンドやバックエンドの開発もできます。
        <br />
      </p>

      {/* 活動 */}
      <h2 className={clsx("mt-12 text-2xl")}>活動</h2>
      <p className="mt-6">OSS への貢献やコミュニティ活動などを行っています。</p>
      <ul className="ml-6 mt-4 list-outside list-disc space-y-2">
        <li>
          <div className="flex items-center justify-start gap-4">
            <ExternalLink href="https://2023.droidkaigi.jp/">DroidKaigi 2023</ExternalLink>
            運営スタッフ
          </div>
        </li>
        <li>
          <div className="flex items-center justify-start gap-4">
            <ExternalLink href="https://flutterkaigi.jp/2023/">FlutterKaigi 2023</ExternalLink>
            運営スタッフ
          </div>
        </li>
        <li>
          <div className="flex items-center justify-start gap-4">
            <ExternalLink href="https://pub.dev/packages/flutter_line_sdk">flutter_line_sdk</ExternalLink>
            へのコントリビュート
          </div>
        </li>
      </ul>

      {/* スキル */}
      <h2 className={clsx("mt-12 text-2xl")}>スキル</h2>
      <div className="mt-4 flex flex-wrap gap-4">
        {[
          "Kotlin",
          "Android View",
          "Jetpack Compose",
          "Swift",
          "SwiftUI",
          "Dart",
          "Flutter",
          "TypeScript",
          "React",
          "Next.js",
          "Golang",
          "PHP",
          "Codeigniter",
          "Laravel",
          "Git",
        ].map((tech) => (
          <div key={tech} className="rounded-md border px-4 py-2 text-sm">
            {tech}
          </div>
        ))}
      </div>

      {/* ツール */}
      <h2 className={clsx("mt-12 text-2xl")}>ツール</h2>
      <div className="mt-4 flex flex-wrap gap-4">
        {["IntelliJ IDEA", "Slack", "VSCode", "mise"].map((tech) => (
          <div key={tech} className="rounded-md border px-4 py-2 text-sm">
            {tech}
          </div>
        ))}
      </div>
    </main>
  );
}
