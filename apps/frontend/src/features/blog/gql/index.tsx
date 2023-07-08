import { gql } from '@/gql';

/**
 * Post の slug を取得する
 */
export const getPostSlugsQuery = gql(`
  query PostSlugs($now: DateTime!) {
    posts(where: { publishedAt_lte: $now }) {
      slug
    }
  }
`);

/**
 * Post ページのメタデータを取得する
 */
export const getPostMetadataQuery = gql(`
  query PostMetadata($slug: String!) {
    post(where: {slug: $slug}) {
      title
      excerpt
    }
  }
`);

/**
 * Post データを取得する
 */
export const getPostQuery = gql(`
  query Post($slug: String!) {
    post(where: { slug: $slug }, stage: PUBLISHED) {
      id
      title
      excerpt
      publishedAt
      coverImage {
        url
      }
      content {
        markdown
      }
      tags
    }
  }
`);
