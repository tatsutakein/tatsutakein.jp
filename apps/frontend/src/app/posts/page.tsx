import { Metadata, NextPage } from 'next';
import { gql } from '@/gql';
import { ContentsLayout } from '@/components/Layout';
import { PagePath } from '@/lib/router';
import { getClient } from '@/app/ApolloClient';
import { PostCard } from '@/components/Surfaces';

export const metadata: Metadata = {
  title: 'Posts | tatsutakein.jp',
  description: 'Ryo Takeuchi のポートフォリオサイトです。',
};

const getPostsQuery = gql(`
  query Posts($now: DateTime!) {
    posts(
      where: {publishedAt_lte: $now}
      stage: PUBLISHED
      orderBy: publishedAt_DESC
    ) {
      slug
      title
      excerpt
      publishedAt
      coverImage {
        url
      }
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

  const postList = posts.map(({
    slug,
    title,
    excerpt,
    publishedAt,
    coverImage,
  }) => (
    <PostCard
      key={slug}
      href={`/posts/${slug}`}
      title={title}
      description={excerpt}
      publishedAt={publishedAt}
      heroImage={coverImage?.url ?? '/images/hero-default.png'}
      heroText={null} />
  ));

  return (
    <ContentsLayout
      description=''
      pageType='article'
      pageUrl={PagePath.blogIndex(true)}
    >
      <div className='grid gap-4 grid-cols-[repeat(auto-fit,minmax(300px,_1fr))]'>
        {postList}
      </div>
    </ContentsLayout>
  );
};

export default PostListPage;

export const revalidate = 60;
