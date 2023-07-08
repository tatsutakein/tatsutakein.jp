import { getClient } from '@/app/ApolloClient';
import { ContentsLayout } from '@/components/Layout';
import { BlogContent } from '@/features/blog/components';
import { HeroImage } from '@/features/blog/components/HeroImage';
import { gql } from '@/gql';
import { PagePath } from '@/lib/router';
import { Metadata, NextPage } from 'next';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Post | tatsutakein.jp',
  description: 'Ryo Takeuchi のポートフォリオサイトです。',
};

interface PageProps {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

const getPostSlugsQuery = gql(`
  query PostSlugs($now: DateTime!) {
    posts(where: { publishedAt_lte: $now }) {
      slug
    }
  }
`);

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

export const revalidate = 60;

const getPostQuery = gql(`
  query Post($slug: String!) {
    post(where: { slug: $slug }, stage: PUBLISHED) {
      id
      title
      excerpt
      publishedAt
      coverImage {
        url
      }
      content {
        markdown
      }
      tags
    }
  }
`);

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
