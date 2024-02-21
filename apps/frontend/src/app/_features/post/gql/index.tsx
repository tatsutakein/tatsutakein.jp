import { gql } from "@/gql";

/**
 *
 */
export const getPostsQuery = gql(/* GraphQL */ `
  query Posts($now: timestamptz!) {
    posts(order_by: { published_at: desc }, where: { published_at: { _lte: $now } }) {
      id
      title
      excerpt
      published_at
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
    posts(where: { published_at: { _lte: $now } }) {
      id
    }
  }
`);

/**
 * Post ページのメタデータを取得する
 */
export const getPostMetadataQuery = gql(/* GraphQL */ `
  query PostMetadata($id: uuid!) {
    posts_by_pk(id: $id) {
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
    posts_by_pk(id: $id) {
      title
      excerpt
      published_at
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
