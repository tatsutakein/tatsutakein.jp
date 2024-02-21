import Image from "next/image";
import Link from "next/link";
import { PagePath } from "@/lib/router";
import { formatDateEn, utcToJstTime } from "@/utils/date";
import { CalendarIcon } from "@radix-ui/react-icons";
import clsx from "clsx";

interface Props {
  heroImage?: string;
  heroText?: string | null;
  title: string;
  publishedAt: string;
  tags: string[];
}

export const HeroImage = ({ heroImage, heroText, title, publishedAt, tags }: Props): JSX.Element => {
  const localPublishedAt = formatDateEn(utcToJstTime(new Date(publishedAt)));

  return (
    <div className="relative h-52 overflow-hidden md:h-72 lg:h-80">
      {/* Image */}
      {heroImage && (
        <Image className="absolute inset-0 m-auto w-full object-cover" src={heroImage} alt="#" fill loading="lazy" />
      )}
      {!heroImage && (
        <Image
          className="absolute inset-0 m-auto w-full object-cover"
          src={`/images/hero-default.png`}
          alt="#"
          fill
          loading="lazy"
        />
      )}

      {/* Blur */}
      <div className="absolute inset-0 m-auto bg-black/10 object-cover" style={{ backdropFilter: "blur(3px)" }} />

      <div
        className="absolute inset-x-0 bottom-0 pb-4 pt-16 text-white md:pb-5 lg:pb-6"
        style={{
          background: "linear-gradient(180deg, transparent 0, rgba(0, 0, 0, 0.2))",
        }}
      >
        <div className="m-auto px-4 md:px-8" style={{ maxWidth: "1192px" }}>
          {/* Hero Text */}
          {heroText && <div className="mb-1">{heroText}</div>}

          {/* Title */}
          <h1 className="mb-2 text-xl font-semibold leading-relaxed md:mb-2 md:text-2xl lg:mb-2.5 lg:text-3xl">
            {title}
          </h1>

          {/* Update Date */}
          <div className="flex items-center gap-2 text-sm md:text-base">
            <CalendarIcon />
            <time>{localPublishedAt}</time>
          </div>

          {/* Tags */}
          <div className={clsx("flex flex-wrap gap-4 text-sm", tags.length && "mt-3")}>
            {tags.map((tag) => (
              <Link key={tag} href={PagePath.tagResult([tag])} className="cursor-pointer hover:opacity-50">
                # {tag}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
