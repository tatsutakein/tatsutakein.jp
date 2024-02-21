import type { Metadata } from "next";
import type { JSX } from "react";
import { notFound } from "next/navigation";
import { PostContent } from "@/app/_features/post/components";
import { getPostIdsQuery, getPostMetadataQuery, getPostQuery } from "@/app/_features/post/gql";
import { env } from "@/env";
import { queryClient } from "@/lib/query-client";
import { PagePath } from "@/lib/router";
import request from "graphql-request";

interface PageProps {
  params: { id: string };
  searchParams: Record<string, string | string[] | undefined>;
}

// @see https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes#generating-static-params
export async function generateStaticParams(): Promise<PageProps["params"][]> {
  const data = await queryClient.fetchQuery({
    queryKey: ["post-ids"],
    queryFn: async () =>
      request(
        "https://tatsutakeinjp.hasura.app/v1/graphql",
        getPostIdsQuery,
        // variables are type-checked too!
        { now: new Date() },
      ),
  });
  const posts = data?.posts ?? [];
  return posts.map((post) => ({ id: post.id }));
}

// @see https://nextjs.org/docs/app/building-your-application/data-fetching/revalidating
export const revalidate = 60;

// @see https://nextjs.org/docs/app/api-reference/functions/generate-metadata#generatemetadata-function
export async function generateMetadata({ params: { id } }: PageProps): Promise<Metadata> {
  const { posts_by_pk: post } = await queryClient.fetchQuery({
    queryKey: ["post-metadata"],
    queryFn: async () =>
      request(
        "https://tatsutakeinjp.hasura.app/v1/graphql",
        getPostMetadataQuery,
        // variables are type-checked too!
        { id: id },
      ),
  });

  if (!post) {
    return {
      title: "Post",
    };
  }

  const url = `${env.SITE_NAME}${PagePath.postDetail(id)}`;

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt ?? undefined,
      url,
      siteName: env.SITE_NAME,
      locale: "ja_JP",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | ${env.SITE_NAME}`,
      description: post.excerpt ?? undefined,
      creator: "@tatsutakein",
    },
    alternates: {
      canonical: url,
    },
  };
}

export default async function PostPage({ params: { id } }: PageProps): Promise<JSX.Element> {
  const { posts_by_pk: post } = await queryClient.fetchQuery({
    queryKey: ["post"],
    queryFn: async () =>
      request(
        "https://tatsutakeinjp.hasura.app/v1/graphql",
        getPostQuery,
        // variables are type-checked too!
        { id: id },
      ),
  });

  if (!post) {
    notFound();
  }

  return <>{post && <PostContent post={post} />}</>;
}
