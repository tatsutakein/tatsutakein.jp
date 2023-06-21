import { gql } from '@/gql';
import { ContentsLayout } from '@/components/Layout';
import { PagePath } from '@/lib/router';
import { BlogContent } from '@/features/blog/components';
import { getClient } from '@/app/ApolloClient';

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

export default async function PostPage({ params }: { params: { slug: string } }) {
  const {
    data: { post },
  } = await getClient().query({
    query: getPostQuery,
    variables: {
      slug: params.slug,
    },
  });

  return (
    <ContentsLayout
      description=''
      pageType='article'
      pageUrl={PagePath.blogIndex(true)}
    >
      {post && <BlogContent post={post} />}
    </ContentsLayout>
  );
}
