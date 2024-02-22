import { gql } from "@/gql";

/**
 *
 */
export const getPostsQuery = gql(/* GraphQL */ `
  query Posts($now: timestamptz!) {
    posts(orderBy: { publishedAt: DESC }, where: { publishedAt: { _lte: $now } }) {
      id
      title
      excerpt
      publishedAt
      coverImage {
        url
      }
    }
  }
`);

/**
 * Post の slug を取得する
 */
export const getPostIdsQuery = gql(/* GraphQL */ `
  query PostIds($now: timestamptz!) {
    posts(where: { publishedAt: { _lte: $now } }) {
      id
    }
  }
`);

/**
 * Post ページのメタデータを取得する
 */
export const getPostMetadataQuery = gql(/* GraphQL */ `
  query PostMetadata($id: uuid!) {
    postsByPk(id: $id) {
      title
      excerpt
    }
  }
`);

/**
 * Post データを取得する
 */
export const getPostQuery = gql(/* GraphQL */ `
  query Post($id: uuid!) {
    postsByPk(id: $id) {
      title
      excerpt
      publishedAt
      coverImage {
        url
      }
      content
      post_tags {
        tag {
          tag
        }
      }
    }
  }
`);
