import { getClient } from '@/app/ApolloClient';
import { ContentsLayout } from '@/components/Layout';
import { env } from '@/env.mjs';
import { BlogContent } from '@/features/blog/components';
import { HeroImage } from '@/features/blog/components/HeroImage';
import {
  getPostMetadataQuery,
  getPostQuery,
  getPostSlugsQuery,
} from '@/features/blog/gql';
import { PagePath } from '@/lib/router';
import { Metadata, NextPage } from 'next';
import { notFound } from 'next/navigation';

interface PageProps {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

// @see https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes#generating-static-params
export async function generateStaticParams(): Promise<PageProps['params'][]> {
  const {
    data: { posts },
  } = await getClient().query({
    query: getPostSlugsQuery,
    variables: {
      now: new Date(),
    },
  });
  return posts.map((post) => ({ slug: post.slug }));
}

// @see https://nextjs.org/docs/app/building-your-application/data-fetching/revalidating
export const revalidate = 60;

// @see https://nextjs.org/docs/app/api-reference/functions/generate-metadata#generatemetadata-function
export async function generateMetadata({
  params: { slug },
}: PageProps): Promise<Metadata> {
  const {
    data: { post },
  } = await getClient().query({
    query: getPostMetadataQuery,
    variables: {
      slug,
    },
  });

  if (!post) {
    return {
      title: 'Post',
    };
  }

  const url = `${env.NEXT_PUBLIC_SITE_URL}${PagePath.blogDetail(slug)}`;

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      siteName: env.NEXT_PUBLIC_SITE_NAME,
      locale: 'ja_JP',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} | ${env.NEXT_PUBLIC_SITE_NAME}`,
      description: post.excerpt,
      creator: '@tatsutakein',
    },
    alternates: {
      canonical: url,
    },
  };
}

const PostPage: NextPage<PageProps> = async ({ params: { slug } }) => {
  const {
    data: { post },
  } = await getClient().query({
    query: getPostQuery,
    variables: {
      slug,
    },
  });

  if (!post) {
    notFound();
  }

  return (
    <ContentsLayout
      description=''
      pageType='article'
      pageUrl={PagePath.blogDetail(slug, true)}
      heroImage={
        <HeroImage
          heroImage={post.coverImage?.url ?? '/images/hero-default.png'}
          heroText={null}
          title={post.title}
          publishedAt={post.publishedAt}
          tags={post.tags}
        />
      }
    >
      {post && <BlogContent post={post} />}
    </ContentsLayout>
  );
};

export default PostPage;
