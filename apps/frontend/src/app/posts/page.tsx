import type { Metadata } from "next";
import type { JSX } from "react";
import { Suspense } from "react";
import { LoadingSpinner } from "@/app/_components/utils";
import { PostCard } from "@/app/_features/post/components";
import { getPostsQuery } from "@/app/_features/post/gql";
import { queryClient } from "@/lib/query-client";
import request from "graphql-request";

export const metadata: Metadata = {
  title: "Posts",
  description: "Ryo Takeuchi のポートフォリオサイトです。",
};

// @see https://nextjs.org/docs/app/building-your-application/data-fetching/revalidating
export const revalidate = 60;

export default async function PostListPage(): Promise<JSX.Element> {
  const data = await queryClient.fetchQuery({
    queryKey: ["posts"],
    queryFn: async () =>
      request(
        "https://tatsutakeinjp.hasura.app/v1/graphql",
        getPostsQuery,
        // variables are type-checked too!
        { now: new Date() },
      ),
  });
  const posts = data?.posts ?? [];

  const postList = posts.map(({ id, title, excerpt, published_at, coverImage }) => (
    <PostCard
      key={String(id)}
      href={`/posts/${id}`}
      title={title}
      description={excerpt}
      publishedAt={String(published_at)}
      heroImage={coverImage?.url ?? "/images/hero-default.png"}
      heroText={null}
    />
  ));

  return (
    <main className="mx-auto max-w-6xl px-4 py-6 md:px-8">
      <Suspense fallback={<LoadingSpinner />}>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,_1fr))] gap-4">{postList}</div>
      </Suspense>
    </main>
  );
}
