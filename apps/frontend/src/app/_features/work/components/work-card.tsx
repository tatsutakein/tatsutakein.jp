import type { Work } from "@/app/_features/work/types";
import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = Work;

export const WorkCard: React.FC<Props> = ({ status, href, title, description, src, techs }) => {
  const content = (
    <>
      {/* ヒーロー画像 */}
      <div className="relative flex h-96 shrink-0 items-center justify-center overflow-hidden">
        <Image className="absolute inset-0 m-auto object-cover" src={src} alt="#" fill loading="lazy" />
      </div>

      {/* 記事情報 */}
      <div className="h-full bg-white px-4 py-8 dark:bg-zinc-800">
        <div className="flex items-center gap-4">
          <div className="line-clamp-2 text-lg font-semibold">{title}</div>
          <div className="rounded-full border px-4 text-sm">{status}</div>
        </div>

        <div className="line-clamp-10 mt-2 whitespace-pre-line text-gray-500 dark:text-gray-400">{description}</div>

        <div className="mt-4 flex flex-wrap gap-4">
          {techs.map((tech) => (
            <div key={tech} className="rounded-full border px-2 text-sm">
              {tech}
            </div>
          ))}
        </div>
      </div>
    </>
  );
  return (
    <article className="flex flex-col overflow-hidden rounded-lg shadow-lg transition-shadow hover:shadow-xl">
      {href ? (
        <Link href={href} className="h-full" rel="noreferrer" target="_blank">
          {content}
        </Link>
      ) : (
        content
      )}
    </article>
  );
};
