import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { client } from '@/lib/apollo';
import { gql } from '@/gql';
import { Button } from 'ui';
import { PostQuery } from '@/gql/graphql';

interface PostPageProps {
  post: PostQuery['post'];
}

const getPostSlugsQuery = gql(`
  query PostSlugs {
    posts {
      slug
    }
  }
`);

export const getStaticPaths: GetStaticPaths = async () => {
  const {
    data: { posts },
  } = await client.query({
    query: getPostSlugsQuery,
  });

  const paths = posts?.map((post) => `/posts/${post.slug}`) ?? [];

  return {
    paths,
    fallback: true,
  };
};

const getPostQuery = gql(`
  query Post($slug: String!) {
    post(where: { slug: $slug }) {
      id
      excerpt
      publishedAt
      content {
        html
      }
      title
      tags
    }
  }
`);

export const getStaticProps: GetStaticProps<PostPageProps> = async (context) => {
  let slug = context.params?.slug ?? '';
  if (Array.isArray(slug)) {
    slug = slug[0];
  }

  const {
    data: { post },
  } = await client.query({
    query: getPostQuery,
    variables: {
      slug,
    },
  });

  return {
    props: {
      post,
    },
    revalidate: 30,
  };
};

const PostPage: NextPage<PostPageProps> = ({ post }) => {
  return (
    <>
      <h1>{post?.title}</h1>
      <p>{post?.content.html}</p>
      <Button />
    </>
  );
};

export default PostPage;
