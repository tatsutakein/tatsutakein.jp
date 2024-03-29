import type { PostQuery } from "@/gql/graphql";
import { PostSection } from "@/app/_features/post/components";
import { HeroImage } from "@/app/_features/post/components/hero-image";
import { formatDateEn, utcToJstTime } from "@/utils/date";
import { CalendarIcon } from "@radix-ui/react-icons";

import { MarkdownRenderer } from "@tatsutakeinjp/ui/markdown";

interface PostContentProps {
  post: PostQuery["postsByPk"];
}

export const PostContent: (props: PostContentProps) => JSX.Element = ({ post }) => {
  if (post === undefined || post === null) {
    return <div></div>;
  }

  return (
    <section>
      <HeroImage
        heroImage={post.coverImage?.url ?? "/images/hero-default.png"}
        heroText={null}
        title={post.title}
        publishedAt={post.publishedAt}
        tags={post.post_tags.map((tag) => tag.tag.tag)}
      />

      <article className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-6 md:px-8">
        <PostSection>
          {/* Header */}
          <div className="-mt-2 mb-4 flex justify-between">
            <span className="inline-flex items-center text-gray-400 dark:text-gray-500">
              <CalendarIcon className="mr-2 h-4" />
              {}
              {post.publishedAt && <time>{formatDateEn(utcToJstTime(post.publishedAt), "LLL d, yyyy")}</time>}
            </span>
          </div>

          {/* Body */}
          <MarkdownRenderer className="">{post.content}</MarkdownRenderer>
        </PostSection>
      </article>
    </section>
  );
};
