import Link from 'next/link';
import { GetStaticProps, NextPage } from 'next';
import { client } from '@/lib/apollo';
import { gql } from '@/gql';
import { ContentsLayout } from '@/components/Layout';
import { PagePath } from '@/lib/router';

interface PostListPageProps {
  posts: Array<{
    slug: string;
    title: string;
  }>;
}

const getPostsQuery = gql(`
  query BlogBody {
    posts {
      slug
      title
    }
  }
`);

export const getStaticProps: GetStaticProps<PostListPageProps> = async () => {
  const {
    data: { posts },
  } = await client.query({
    query: getPostsQuery,
  });

  return {
    props: {
      posts,
    },
    revalidate: 30,
  };
};

const PostListPage: NextPage<PostListPageProps> = ({ posts }) => {
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
