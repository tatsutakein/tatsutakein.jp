import { GraphQLClient } from 'graphql-request';

const hygraph = new GraphQLClient(
  'https://ap-northeast-1.cdn.hygraph.com/content/clcfsbgaq0fxx01ug951f007y/master'
);

export async function getStaticProps({ params }) {
  const { post } = await hygraph.request(
    `
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
  `,
    {
      slug: params.slug,
    }
  );

  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const { posts } = await hygraph.request(`
    {
      posts {
        slug
        title
      }
    }
  `);

  return {
    paths: posts.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: false,
  };
}

const PostPage = ({ post }) => (
  <>
    <h1>{post.title}</h1>
    <p>{post.content.html}</p>
  </>
);

export default PostPage;
