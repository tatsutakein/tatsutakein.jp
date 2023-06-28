import { gql } from '@/gql';
import { ContentsLayout } from '@/components/Layout';
import { PagePath } from '@/lib/router';
import { BlogContent } from '@/features/blog/components';
import { getClient } from '@/app/ApolloClient';
import { Metadata, NextPage } from 'next';
import { HeroImage } from '@/features/blog/components/HeroImage';

export const metadata: Metadata = {
  title: 'Post | tatsutakein.jp',
  description: 'Ryo Takeuchi のポートフォリオサイトです。',
};

interface PageProps {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

const getPostSlugsQuery = gql(`
  query PostSlugs {
    posts {
      slug
    }
  }
`);

const getPostQuery = gql(`
  query Post($slug: String!) {
    post(where: { slug: $slug }, stage: PUBLISHED) {
      id
      excerpt
      publishedAt
      content {
        markdown
      }
      title
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
    return <div>Empty data</div>;
  }

  return (
    <ContentsLayout
      description=''
      pageType='article'
      pageUrl={PagePath.blogDetail(slug, true)}
      heroImage={
        <HeroImage
          // heroImage={post.heroImage}
          // heroText={post.heroText}
          title={post.title}
          publishedAt={post.publishedAt as string}
          tags={post.tags}
        />
      }
    >
      {post && <BlogContent post={post} />}
    </ContentsLayout>
  );
};

export default PostPage;
