/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";

import * as types from "./graphql";

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
  "\n  query Posts($now: timestamptz!) {\n    posts(orderBy: { publishedAt: DESC }, where: { publishedAt: { _lte: $now } }) {\n      id\n      title\n      excerpt\n      publishedAt\n      coverImage {\n        url\n      }\n    }\n  }\n": typeof types.PostsDocument;
  "\n  query PostIds($now: timestamptz!) {\n    posts(where: { publishedAt: { _lte: $now } }) {\n      id\n    }\n  }\n": typeof types.PostIdsDocument;
  "\n  query PostMetadata($id: uuid!) {\n    postsByPk(id: $id) {\n      title\n      excerpt\n    }\n  }\n": typeof types.PostMetadataDocument;
  "\n  query Post($id: uuid!) {\n    postsByPk(id: $id) {\n      title\n      excerpt\n      publishedAt\n      coverImage {\n        url\n      }\n      content\n      post_tags {\n        tag {\n          tag\n        }\n      }\n    }\n  }\n": typeof types.PostDocument;
};
const documents: Documents = {
  "\n  query Posts($now: timestamptz!) {\n    posts(orderBy: { publishedAt: DESC }, where: { publishedAt: { _lte: $now } }) {\n      id\n      title\n      excerpt\n      publishedAt\n      coverImage {\n        url\n      }\n    }\n  }\n":
    types.PostsDocument,
  "\n  query PostIds($now: timestamptz!) {\n    posts(where: { publishedAt: { _lte: $now } }) {\n      id\n    }\n  }\n":
    types.PostIdsDocument,
  "\n  query PostMetadata($id: uuid!) {\n    postsByPk(id: $id) {\n      title\n      excerpt\n    }\n  }\n":
    types.PostMetadataDocument,
  "\n  query Post($id: uuid!) {\n    postsByPk(id: $id) {\n      title\n      excerpt\n      publishedAt\n      coverImage {\n        url\n      }\n      content\n      post_tags {\n        tag {\n          tag\n        }\n      }\n    }\n  }\n":
    types.PostDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  query Posts($now: timestamptz!) {\n    posts(orderBy: { publishedAt: DESC }, where: { publishedAt: { _lte: $now } }) {\n      id\n      title\n      excerpt\n      publishedAt\n      coverImage {\n        url\n      }\n    }\n  }\n",
): (typeof documents)["\n  query Posts($now: timestamptz!) {\n    posts(orderBy: { publishedAt: DESC }, where: { publishedAt: { _lte: $now } }) {\n      id\n      title\n      excerpt\n      publishedAt\n      coverImage {\n        url\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  query PostIds($now: timestamptz!) {\n    posts(where: { publishedAt: { _lte: $now } }) {\n      id\n    }\n  }\n",
): (typeof documents)["\n  query PostIds($now: timestamptz!) {\n    posts(where: { publishedAt: { _lte: $now } }) {\n      id\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  query PostMetadata($id: uuid!) {\n    postsByPk(id: $id) {\n      title\n      excerpt\n    }\n  }\n",
): (typeof documents)["\n  query PostMetadata($id: uuid!) {\n    postsByPk(id: $id) {\n      title\n      excerpt\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  query Post($id: uuid!) {\n    postsByPk(id: $id) {\n      title\n      excerpt\n      publishedAt\n      coverImage {\n        url\n      }\n      content\n      post_tags {\n        tag {\n          tag\n        }\n      }\n    }\n  }\n",
): (typeof documents)["\n  query Post($id: uuid!) {\n    postsByPk(id: $id) {\n      title\n      excerpt\n      publishedAt\n      coverImage {\n        url\n      }\n      content\n      post_tags {\n        tag {\n          tag\n        }\n      }\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
