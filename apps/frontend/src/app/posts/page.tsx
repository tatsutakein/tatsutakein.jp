import Link from 'next/link';
import { Metadata, NextPage } from 'next';
import { gql } from '@/gql';
import { ContentsLayout } from '@/components/Layout';
import { PagePath } from '@/lib/router';
import { getClient } from '@/app/ApolloClient';

export const metadata: Metadata = {
  title: 'Posts | tatsutakein.jp',
  description: 'Ryo Takeuchi のポートフォリオサイトです。',
};

const getPostsQuery = gql(`
  query Posts($now: DateTime!) {
    posts(where: { publishedAt_lte: $now }) {
      slug
      title
    }
  }
`);

const PostListPage: NextPage = async () => {
  const { data } = await getClient().query({
    query: getPostsQuery,
    variables: {
      now: new Date(),
    },
  });
  const posts = data?.posts ?? [];

  const postList = posts.map(({ slug, title }) => (
    <Link
      key={slug}
      href={`/posts/${slug}`}
    >
      <p>{title}</p>
    </Link>
  ));

  return (
    <ContentsLayout
      description=''
      pageType='article'
      pageUrl={PagePath.blogIndex(true)}
    >
      {postList}
    </ContentsLayout>
  );
};

export default PostListPage;

export const revalidate = 60;
