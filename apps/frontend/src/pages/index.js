import Link from 'next/link';
import { GraphQLClient } from 'graphql-request';

export async function getStaticProps() {
  const hygraph = new GraphQLClient(
    'https://ap-northeast-1.cdn.hygraph.com/content/clcfsbgaq0fxx01ug951f007y/master'
  );

  const { posts } = await hygraph.request(
    `
      {
        posts {
          slug
          title
        }
      }
    `
  );

  return {
    props: {
      posts,
    },
  };
}

export default ({ posts }) =>
  posts.map(({ slug, title }) => (
    <Link key={slug} href={`/posts/${slug}`}>
      <p>{title}</p>
    </Link>
  ));
