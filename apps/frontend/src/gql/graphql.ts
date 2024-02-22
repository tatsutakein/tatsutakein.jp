/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  smallint: { input: any; output: any };
  timestamptz: { input: Date; output: Date };
  uuid: { input: string; output: string };
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type IntComparisonExp = {
  _eq?: InputMaybe<Scalars["Int"]["input"]>;
  _gt?: InputMaybe<Scalars["Int"]["input"]>;
  _gte?: InputMaybe<Scalars["Int"]["input"]>;
  _in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["Int"]["input"]>;
  _lte?: InputMaybe<Scalars["Int"]["input"]>;
  _neq?: InputMaybe<Scalars["Int"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["Int"]["input"]>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type StringComparisonExp = {
  _eq?: InputMaybe<Scalars["String"]["input"]>;
  _gt?: InputMaybe<Scalars["String"]["input"]>;
  _gte?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars["String"]["input"]>;
  _in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars["String"]["input"]>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars["String"]["input"]>;
  _lt?: InputMaybe<Scalars["String"]["input"]>;
  _lte?: InputMaybe<Scalars["String"]["input"]>;
  _neq?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars["String"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars["String"]["input"]>;
};

/** アセット */
export type Assets = {
  __typename?: "assets";
  /** 作成日時 */
  created_at: Scalars["timestamptz"]["output"];
  /** 説明文 */
  file_name: Scalars["String"]["output"];
  /** 高さ */
  height: Scalars["smallint"]["output"];
  /** アセットID */
  id: Scalars["uuid"]["output"];
  /** MimeType */
  mime_type: Scalars["String"]["output"];
  /** An array relationship */
  posts: Array<Posts>;
  /** ファイルサイズ */
  size: Scalars["Int"]["output"];
  /** 更新日時 */
  updated_at: Scalars["timestamptz"]["output"];
  /** アセットソース */
  url: Scalars["String"]["output"];
  /** 幅 */
  width: Scalars["smallint"]["output"];
};

/** アセット */
export type AssetsPostsArgs = {
  distinct_on?: InputMaybe<Array<PostsSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<PostsOrderBy>>;
  where?: InputMaybe<PostsBoolExp>;
};

/** Boolean expression to filter rows from the table "assets". All fields are combined with a logical 'AND'. */
export type AssetsBoolExp = {
  _and?: InputMaybe<Array<AssetsBoolExp>>;
  _not?: InputMaybe<AssetsBoolExp>;
  _or?: InputMaybe<Array<AssetsBoolExp>>;
  created_at?: InputMaybe<TimestamptzComparisonExp>;
  file_name?: InputMaybe<StringComparisonExp>;
  height?: InputMaybe<SmallintComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  mime_type?: InputMaybe<StringComparisonExp>;
  posts?: InputMaybe<PostsBoolExp>;
  size?: InputMaybe<IntComparisonExp>;
  updated_at?: InputMaybe<TimestamptzComparisonExp>;
  url?: InputMaybe<StringComparisonExp>;
  width?: InputMaybe<SmallintComparisonExp>;
};

/** Ordering options when selecting data from "assets". */
export type AssetsOrderBy = {
  created_at?: InputMaybe<OrderBy>;
  file_name?: InputMaybe<OrderBy>;
  height?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  mime_type?: InputMaybe<OrderBy>;
  posts_aggregate?: InputMaybe<PostsAggregateOrderBy>;
  size?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  url?: InputMaybe<OrderBy>;
  width?: InputMaybe<OrderBy>;
};

/** select columns of table "assets" */
export enum AssetsSelectColumn {
  /** column name */
  CREATED_AT = "created_at",
  /** column name */
  FILE_NAME = "file_name",
  /** column name */
  HEIGHT = "height",
  /** column name */
  ID = "id",
  /** column name */
  MIME_TYPE = "mime_type",
  /** column name */
  SIZE = "size",
  /** column name */
  UPDATED_AT = "updated_at",
  /** column name */
  URL = "url",
  /** column name */
  WIDTH = "width",
}

/** Streaming cursor of the table "assets" */
export type AssetsStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: AssetsStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type AssetsStreamCursorValueInput = {
  /** 作成日時 */
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  /** 説明文 */
  file_name?: InputMaybe<Scalars["String"]["input"]>;
  /** 高さ */
  height?: InputMaybe<Scalars["smallint"]["input"]>;
  /** アセットID */
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  /** MimeType */
  mime_type?: InputMaybe<Scalars["String"]["input"]>;
  /** ファイルサイズ */
  size?: InputMaybe<Scalars["Int"]["input"]>;
  /** 更新日時 */
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  /** アセットソース */
  url?: InputMaybe<Scalars["String"]["input"]>;
  /** 幅 */
  width?: InputMaybe<Scalars["smallint"]["input"]>;
};

/** ordering argument of a cursor */
export enum CursorOrdering {
  /** ascending ordering of the cursor */
  ASC = "ASC",
  /** descending ordering of the cursor */
  DESC = "DESC",
}

/** column ordering options */
export enum OrderBy {
  /** in ascending order, nulls last */
  ASC = "asc",
  /** in ascending order, nulls first */
  ASC_NULLS_FIRST = "asc_nulls_first",
  /** in ascending order, nulls last */
  ASC_NULLS_LAST = "asc_nulls_last",
  /** in descending order, nulls first */
  DESC = "desc",
  /** in descending order, nulls first */
  DESC_NULLS_FIRST = "desc_nulls_first",
  /** in descending order, nulls last */
  DESC_NULLS_LAST = "desc_nulls_last",
}

/** ポストとタグの関連付け */
export type PostTags = {
  __typename?: "post_tags";
  /** An object relationship */
  post: Posts;
  /** ポストID */
  post_id: Scalars["uuid"]["output"];
  /** An object relationship */
  tag: Tags;
  /** タグID */
  tag_id: Scalars["uuid"]["output"];
};

/** order by aggregate values of table "post_tags" */
export type PostTagsAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PostTagsMaxOrderBy>;
  min?: InputMaybe<PostTagsMinOrderBy>;
};

/** Boolean expression to filter rows from the table "post_tags". All fields are combined with a logical 'AND'. */
export type PostTagsBoolExp = {
  _and?: InputMaybe<Array<PostTagsBoolExp>>;
  _not?: InputMaybe<PostTagsBoolExp>;
  _or?: InputMaybe<Array<PostTagsBoolExp>>;
  post?: InputMaybe<PostsBoolExp>;
  post_id?: InputMaybe<UuidComparisonExp>;
  tag?: InputMaybe<TagsBoolExp>;
  tag_id?: InputMaybe<UuidComparisonExp>;
};

/** order by max() on columns of table "post_tags" */
export type PostTagsMaxOrderBy = {
  /** ポストID */
  post_id?: InputMaybe<OrderBy>;
  /** タグID */
  tag_id?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "post_tags" */
export type PostTagsMinOrderBy = {
  /** ポストID */
  post_id?: InputMaybe<OrderBy>;
  /** タグID */
  tag_id?: InputMaybe<OrderBy>;
};

/** Ordering options when selecting data from "post_tags". */
export type PostTagsOrderBy = {
  post?: InputMaybe<PostsOrderBy>;
  post_id?: InputMaybe<OrderBy>;
  tag?: InputMaybe<TagsOrderBy>;
  tag_id?: InputMaybe<OrderBy>;
};

/** select columns of table "post_tags" */
export enum PostTagsSelectColumn {
  /** column name */
  POST_ID = "post_id",
  /** column name */
  TAG_ID = "tag_id",
}

/** Streaming cursor of the table "post_tags" */
export type PostTagsStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: PostTagsStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type PostTagsStreamCursorValueInput = {
  /** ポストID */
  post_id?: InputMaybe<Scalars["uuid"]["input"]>;
  /** タグID */
  tag_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** ポスト */
export type Posts = {
  __typename?: "posts";
  /** 内容 */
  content: Scalars["String"]["output"];
  /** An object relationship */
  coverImage?: Maybe<Assets>;
  /** カバー画像 */
  cover_image_id?: Maybe<Scalars["uuid"]["output"]>;
  /** 作成日時 */
  created_at: Scalars["timestamptz"]["output"];
  /** 削除日時 */
  deleted_at?: Maybe<Scalars["timestamptz"]["output"]>;
  /** 抜粋 */
  excerpt: Scalars["String"]["output"];
  /** ポスト ID */
  id: Scalars["uuid"]["output"];
  /** An array relationship */
  post_tags: Array<PostTags>;
  /** 公開日時 */
  published_at?: Maybe<Scalars["timestamptz"]["output"]>;
  /** An object relationship */
  seo?: Maybe<Seos>;
  /** SEO */
  seo_id?: Maybe<Scalars["uuid"]["output"]>;
  /** ラベル文字列 */
  slug: Scalars["String"]["output"];
  /** タイトル */
  title: Scalars["String"]["output"];
  /** 更新日時 */
  updated_at: Scalars["timestamptz"]["output"];
};

/** ポスト */
export type PostsPostTagsArgs = {
  distinct_on?: InputMaybe<Array<PostTagsSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<PostTagsOrderBy>>;
  where?: InputMaybe<PostTagsBoolExp>;
};

/** order by aggregate values of table "posts" */
export type PostsAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PostsMaxOrderBy>;
  min?: InputMaybe<PostsMinOrderBy>;
};

/** Boolean expression to filter rows from the table "posts". All fields are combined with a logical 'AND'. */
export type PostsBoolExp = {
  _and?: InputMaybe<Array<PostsBoolExp>>;
  _not?: InputMaybe<PostsBoolExp>;
  _or?: InputMaybe<Array<PostsBoolExp>>;
  content?: InputMaybe<StringComparisonExp>;
  coverImage?: InputMaybe<AssetsBoolExp>;
  cover_image_id?: InputMaybe<UuidComparisonExp>;
  created_at?: InputMaybe<TimestamptzComparisonExp>;
  deleted_at?: InputMaybe<TimestamptzComparisonExp>;
  excerpt?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  post_tags?: InputMaybe<PostTagsBoolExp>;
  published_at?: InputMaybe<TimestamptzComparisonExp>;
  seo?: InputMaybe<SeosBoolExp>;
  seo_id?: InputMaybe<UuidComparisonExp>;
  slug?: InputMaybe<StringComparisonExp>;
  title?: InputMaybe<StringComparisonExp>;
  updated_at?: InputMaybe<TimestamptzComparisonExp>;
};

/** order by max() on columns of table "posts" */
export type PostsMaxOrderBy = {
  /** 内容 */
  content?: InputMaybe<OrderBy>;
  /** カバー画像 */
  cover_image_id?: InputMaybe<OrderBy>;
  /** 作成日時 */
  created_at?: InputMaybe<OrderBy>;
  /** 削除日時 */
  deleted_at?: InputMaybe<OrderBy>;
  /** 抜粋 */
  excerpt?: InputMaybe<OrderBy>;
  /** ポスト ID */
  id?: InputMaybe<OrderBy>;
  /** 公開日時 */
  published_at?: InputMaybe<OrderBy>;
  /** SEO */
  seo_id?: InputMaybe<OrderBy>;
  /** ラベル文字列 */
  slug?: InputMaybe<OrderBy>;
  /** タイトル */
  title?: InputMaybe<OrderBy>;
  /** 更新日時 */
  updated_at?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "posts" */
export type PostsMinOrderBy = {
  /** 内容 */
  content?: InputMaybe<OrderBy>;
  /** カバー画像 */
  cover_image_id?: InputMaybe<OrderBy>;
  /** 作成日時 */
  created_at?: InputMaybe<OrderBy>;
  /** 削除日時 */
  deleted_at?: InputMaybe<OrderBy>;
  /** 抜粋 */
  excerpt?: InputMaybe<OrderBy>;
  /** ポスト ID */
  id?: InputMaybe<OrderBy>;
  /** 公開日時 */
  published_at?: InputMaybe<OrderBy>;
  /** SEO */
  seo_id?: InputMaybe<OrderBy>;
  /** ラベル文字列 */
  slug?: InputMaybe<OrderBy>;
  /** タイトル */
  title?: InputMaybe<OrderBy>;
  /** 更新日時 */
  updated_at?: InputMaybe<OrderBy>;
};

/** Ordering options when selecting data from "posts". */
export type PostsOrderBy = {
  content?: InputMaybe<OrderBy>;
  coverImage?: InputMaybe<AssetsOrderBy>;
  cover_image_id?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  deleted_at?: InputMaybe<OrderBy>;
  excerpt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  post_tags_aggregate?: InputMaybe<PostTagsAggregateOrderBy>;
  published_at?: InputMaybe<OrderBy>;
  seo?: InputMaybe<SeosOrderBy>;
  seo_id?: InputMaybe<OrderBy>;
  slug?: InputMaybe<OrderBy>;
  title?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
};

/** select columns of table "posts" */
export enum PostsSelectColumn {
  /** column name */
  CONTENT = "content",
  /** column name */
  COVER_IMAGE_ID = "cover_image_id",
  /** column name */
  CREATED_AT = "created_at",
  /** column name */
  DELETED_AT = "deleted_at",
  /** column name */
  EXCERPT = "excerpt",
  /** column name */
  ID = "id",
  /** column name */
  PUBLISHED_AT = "published_at",
  /** column name */
  SEO_ID = "seo_id",
  /** column name */
  SLUG = "slug",
  /** column name */
  TITLE = "title",
  /** column name */
  UPDATED_AT = "updated_at",
}

/** Streaming cursor of the table "posts" */
export type PostsStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: PostsStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type PostsStreamCursorValueInput = {
  /** 内容 */
  content?: InputMaybe<Scalars["String"]["input"]>;
  /** カバー画像 */
  cover_image_id?: InputMaybe<Scalars["uuid"]["input"]>;
  /** 作成日時 */
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  /** 削除日時 */
  deleted_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  /** 抜粋 */
  excerpt?: InputMaybe<Scalars["String"]["input"]>;
  /** ポスト ID */
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  /** 公開日時 */
  published_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  /** SEO */
  seo_id?: InputMaybe<Scalars["uuid"]["input"]>;
  /** ラベル文字列 */
  slug?: InputMaybe<Scalars["String"]["input"]>;
  /** タイトル */
  title?: InputMaybe<Scalars["String"]["input"]>;
  /** 更新日時 */
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
};

export type QueryRoot = {
  __typename?: "query_root";
  /** fetch data from the table: "assets" */
  assets: Array<Assets>;
  /** fetch data from the table: "assets" using primary key columns */
  assets_by_pk?: Maybe<Assets>;
  /** An array relationship */
  post_tags: Array<PostTags>;
  /** fetch data from the table: "post_tags" using primary key columns */
  post_tags_by_pk?: Maybe<PostTags>;
  /** An array relationship */
  posts: Array<Posts>;
  /** fetch data from the table: "posts" using primary key columns */
  posts_by_pk?: Maybe<Posts>;
  /** fetch data from the table: "seos" */
  seos: Array<Seos>;
  /** fetch data from the table: "seos" using primary key columns */
  seos_by_pk?: Maybe<Seos>;
  /** fetch data from the table: "tags" */
  tags: Array<Tags>;
  /** fetch data from the table: "tags" using primary key columns */
  tags_by_pk?: Maybe<Tags>;
};

export type QueryRootAssetsArgs = {
  distinct_on?: InputMaybe<Array<AssetsSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<AssetsOrderBy>>;
  where?: InputMaybe<AssetsBoolExp>;
};

export type QueryRootAssetsByPkArgs = {
  id: Scalars["uuid"]["input"];
};

export type QueryRootPostTagsArgs = {
  distinct_on?: InputMaybe<Array<PostTagsSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<PostTagsOrderBy>>;
  where?: InputMaybe<PostTagsBoolExp>;
};

export type QueryRootPostTagsByPkArgs = {
  post_id: Scalars["uuid"]["input"];
  tag_id: Scalars["uuid"]["input"];
};

export type QueryRootPostsArgs = {
  distinct_on?: InputMaybe<Array<PostsSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<PostsOrderBy>>;
  where?: InputMaybe<PostsBoolExp>;
};

export type QueryRootPostsByPkArgs = {
  id: Scalars["uuid"]["input"];
};

export type QueryRootSeosArgs = {
  distinct_on?: InputMaybe<Array<SeosSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<SeosOrderBy>>;
  where?: InputMaybe<SeosBoolExp>;
};

export type QueryRootSeosByPkArgs = {
  id: Scalars["uuid"]["input"];
};

export type QueryRootTagsArgs = {
  distinct_on?: InputMaybe<Array<TagsSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<TagsOrderBy>>;
  where?: InputMaybe<TagsBoolExp>;
};

export type QueryRootTagsByPkArgs = {
  id: Scalars["uuid"]["input"];
};

/** SEO */
export type Seos = {
  __typename?: "seos";
  /** 作成日時 */
  created_at: Scalars["timestamptz"]["output"];
  /** 削除日時 */
  deleted_at?: Maybe<Scalars["timestamptz"]["output"]>;
  /** 説明文 */
  description: Scalars["String"]["output"];
  /** SEO ID */
  id: Scalars["uuid"]["output"];
  /** カスタム OG 画像 URL ( 1280✕720 ) */
  og_image_url?: Maybe<Scalars["String"]["output"]>;
  /** An array relationship */
  posts: Array<Posts>;
  /** タイトル */
  title: Scalars["String"]["output"];
  /** 更新日時 */
  updated_at: Scalars["timestamptz"]["output"];
};

/** SEO */
export type SeosPostsArgs = {
  distinct_on?: InputMaybe<Array<PostsSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<PostsOrderBy>>;
  where?: InputMaybe<PostsBoolExp>;
};

/** Boolean expression to filter rows from the table "seos". All fields are combined with a logical 'AND'. */
export type SeosBoolExp = {
  _and?: InputMaybe<Array<SeosBoolExp>>;
  _not?: InputMaybe<SeosBoolExp>;
  _or?: InputMaybe<Array<SeosBoolExp>>;
  created_at?: InputMaybe<TimestamptzComparisonExp>;
  deleted_at?: InputMaybe<TimestamptzComparisonExp>;
  description?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  og_image_url?: InputMaybe<StringComparisonExp>;
  posts?: InputMaybe<PostsBoolExp>;
  title?: InputMaybe<StringComparisonExp>;
  updated_at?: InputMaybe<TimestamptzComparisonExp>;
};

/** Ordering options when selecting data from "seos". */
export type SeosOrderBy = {
  created_at?: InputMaybe<OrderBy>;
  deleted_at?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  og_image_url?: InputMaybe<OrderBy>;
  posts_aggregate?: InputMaybe<PostsAggregateOrderBy>;
  title?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
};

/** select columns of table "seos" */
export enum SeosSelectColumn {
  /** column name */
  CREATED_AT = "created_at",
  /** column name */
  DELETED_AT = "deleted_at",
  /** column name */
  DESCRIPTION = "description",
  /** column name */
  ID = "id",
  /** column name */
  OG_IMAGE_URL = "og_image_url",
  /** column name */
  TITLE = "title",
  /** column name */
  UPDATED_AT = "updated_at",
}

/** Streaming cursor of the table "seos" */
export type SeosStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: SeosStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type SeosStreamCursorValueInput = {
  /** 作成日時 */
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  /** 削除日時 */
  deleted_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  /** 説明文 */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** SEO ID */
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  /** カスタム OG 画像 URL ( 1280✕720 ) */
  og_image_url?: InputMaybe<Scalars["String"]["input"]>;
  /** タイトル */
  title?: InputMaybe<Scalars["String"]["input"]>;
  /** 更新日時 */
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
};

/** Boolean expression to compare columns of type "smallint". All fields are combined with logical 'AND'. */
export type SmallintComparisonExp = {
  _eq?: InputMaybe<Scalars["smallint"]["input"]>;
  _gt?: InputMaybe<Scalars["smallint"]["input"]>;
  _gte?: InputMaybe<Scalars["smallint"]["input"]>;
  _in?: InputMaybe<Array<Scalars["smallint"]["input"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["smallint"]["input"]>;
  _lte?: InputMaybe<Scalars["smallint"]["input"]>;
  _neq?: InputMaybe<Scalars["smallint"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["smallint"]["input"]>>;
};

export type SubscriptionRoot = {
  __typename?: "subscription_root";
  /** fetch data from the table: "assets" */
  assets: Array<Assets>;
  /** fetch data from the table: "assets" using primary key columns */
  assets_by_pk?: Maybe<Assets>;
  /** fetch data from the table in a streaming manner: "assets" */
  assets_stream: Array<Assets>;
  /** An array relationship */
  post_tags: Array<PostTags>;
  /** fetch data from the table: "post_tags" using primary key columns */
  post_tags_by_pk?: Maybe<PostTags>;
  /** fetch data from the table in a streaming manner: "post_tags" */
  post_tags_stream: Array<PostTags>;
  /** An array relationship */
  posts: Array<Posts>;
  /** fetch data from the table: "posts" using primary key columns */
  posts_by_pk?: Maybe<Posts>;
  /** fetch data from the table in a streaming manner: "posts" */
  posts_stream: Array<Posts>;
  /** fetch data from the table: "seos" */
  seos: Array<Seos>;
  /** fetch data from the table: "seos" using primary key columns */
  seos_by_pk?: Maybe<Seos>;
  /** fetch data from the table in a streaming manner: "seos" */
  seos_stream: Array<Seos>;
  /** fetch data from the table: "tags" */
  tags: Array<Tags>;
  /** fetch data from the table: "tags" using primary key columns */
  tags_by_pk?: Maybe<Tags>;
  /** fetch data from the table in a streaming manner: "tags" */
  tags_stream: Array<Tags>;
};

export type SubscriptionRootAssetsArgs = {
  distinct_on?: InputMaybe<Array<AssetsSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<AssetsOrderBy>>;
  where?: InputMaybe<AssetsBoolExp>;
};

export type SubscriptionRootAssetsByPkArgs = {
  id: Scalars["uuid"]["input"];
};

export type SubscriptionRootAssetsStreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<AssetsStreamCursorInput>>;
  where?: InputMaybe<AssetsBoolExp>;
};

export type SubscriptionRootPostTagsArgs = {
  distinct_on?: InputMaybe<Array<PostTagsSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<PostTagsOrderBy>>;
  where?: InputMaybe<PostTagsBoolExp>;
};

export type SubscriptionRootPostTagsByPkArgs = {
  post_id: Scalars["uuid"]["input"];
  tag_id: Scalars["uuid"]["input"];
};

export type SubscriptionRootPostTagsStreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<PostTagsStreamCursorInput>>;
  where?: InputMaybe<PostTagsBoolExp>;
};

export type SubscriptionRootPostsArgs = {
  distinct_on?: InputMaybe<Array<PostsSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<PostsOrderBy>>;
  where?: InputMaybe<PostsBoolExp>;
};

export type SubscriptionRootPostsByPkArgs = {
  id: Scalars["uuid"]["input"];
};

export type SubscriptionRootPostsStreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<PostsStreamCursorInput>>;
  where?: InputMaybe<PostsBoolExp>;
};

export type SubscriptionRootSeosArgs = {
  distinct_on?: InputMaybe<Array<SeosSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<SeosOrderBy>>;
  where?: InputMaybe<SeosBoolExp>;
};

export type SubscriptionRootSeosByPkArgs = {
  id: Scalars["uuid"]["input"];
};

export type SubscriptionRootSeosStreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<SeosStreamCursorInput>>;
  where?: InputMaybe<SeosBoolExp>;
};

export type SubscriptionRootTagsArgs = {
  distinct_on?: InputMaybe<Array<TagsSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<TagsOrderBy>>;
  where?: InputMaybe<TagsBoolExp>;
};

export type SubscriptionRootTagsByPkArgs = {
  id: Scalars["uuid"]["input"];
};

export type SubscriptionRootTagsStreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<TagsStreamCursorInput>>;
  where?: InputMaybe<TagsBoolExp>;
};

/** タグ */
export type Tags = {
  __typename?: "tags";
  /** 作成日時 */
  created_at: Scalars["timestamptz"]["output"];
  /** 説明文 */
  description: Scalars["String"]["output"];
  /** タグID */
  id: Scalars["uuid"]["output"];
  /** An array relationship */
  post_tags: Array<PostTags>;
  /** タグ */
  tag: Scalars["String"]["output"];
  /** 更新日時 */
  updated_at: Scalars["timestamptz"]["output"];
};

/** タグ */
export type TagsPostTagsArgs = {
  distinct_on?: InputMaybe<Array<PostTagsSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<PostTagsOrderBy>>;
  where?: InputMaybe<PostTagsBoolExp>;
};

/** Boolean expression to filter rows from the table "tags". All fields are combined with a logical 'AND'. */
export type TagsBoolExp = {
  _and?: InputMaybe<Array<TagsBoolExp>>;
  _not?: InputMaybe<TagsBoolExp>;
  _or?: InputMaybe<Array<TagsBoolExp>>;
  created_at?: InputMaybe<TimestamptzComparisonExp>;
  description?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  post_tags?: InputMaybe<PostTagsBoolExp>;
  tag?: InputMaybe<StringComparisonExp>;
  updated_at?: InputMaybe<TimestamptzComparisonExp>;
};

/** Ordering options when selecting data from "tags". */
export type TagsOrderBy = {
  created_at?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  post_tags_aggregate?: InputMaybe<PostTagsAggregateOrderBy>;
  tag?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
};

/** select columns of table "tags" */
export enum TagsSelectColumn {
  /** column name */
  CREATED_AT = "created_at",
  /** column name */
  DESCRIPTION = "description",
  /** column name */
  ID = "id",
  /** column name */
  TAG = "tag",
  /** column name */
  UPDATED_AT = "updated_at",
}

/** Streaming cursor of the table "tags" */
export type TagsStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: TagsStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type TagsStreamCursorValueInput = {
  /** 作成日時 */
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  /** 説明文 */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** タグID */
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  /** タグ */
  tag?: InputMaybe<Scalars["String"]["input"]>;
  /** 更新日時 */
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type TimestamptzComparisonExp = {
  _eq?: InputMaybe<Scalars["timestamptz"]["input"]>;
  _gt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  _gte?: InputMaybe<Scalars["timestamptz"]["input"]>;
  _in?: InputMaybe<Array<Scalars["timestamptz"]["input"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  _lte?: InputMaybe<Scalars["timestamptz"]["input"]>;
  _neq?: InputMaybe<Scalars["timestamptz"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["timestamptz"]["input"]>>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type UuidComparisonExp = {
  _eq?: InputMaybe<Scalars["uuid"]["input"]>;
  _gt?: InputMaybe<Scalars["uuid"]["input"]>;
  _gte?: InputMaybe<Scalars["uuid"]["input"]>;
  _in?: InputMaybe<Array<Scalars["uuid"]["input"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["uuid"]["input"]>;
  _lte?: InputMaybe<Scalars["uuid"]["input"]>;
  _neq?: InputMaybe<Scalars["uuid"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["uuid"]["input"]>>;
};

export type PostsQueryVariables = Exact<{
  now: Scalars["timestamptz"]["input"];
}>;

export type PostsQuery = {
  __typename?: "query_root";
  posts: Array<{
    __typename?: "posts";
    id: string;
    title: string;
    excerpt: string;
    published_at?: Date | null;
    coverImage?: { __typename?: "assets"; url: string } | null;
  }>;
};

export type PostIdsQueryVariables = Exact<{
  now: Scalars["timestamptz"]["input"];
}>;

export type PostIdsQuery = { __typename?: "query_root"; posts: Array<{ __typename?: "posts"; id: string }> };

export type PostMetadataQueryVariables = Exact<{
  id: Scalars["uuid"]["input"];
}>;

export type PostMetadataQuery = {
  __typename?: "query_root";
  posts_by_pk?: { __typename?: "posts"; title: string; excerpt: string } | null;
};

export type PostQueryVariables = Exact<{
  id: Scalars["uuid"]["input"];
}>;

export type PostQuery = {
  __typename?: "query_root";
  posts_by_pk?: {
    __typename?: "posts";
    title: string;
    excerpt: string;
    published_at?: Date | null;
    content: string;
    coverImage?: { __typename?: "assets"; url: string } | null;
    post_tags: Array<{ __typename?: "post_tags"; tag: { __typename?: "tags"; tag: string } }>;
  } | null;
};

export const PostsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "Posts" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "now" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "timestamptz" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "posts" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "order_by" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "published_at" },
                      value: { kind: "EnumValue", value: "desc" },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "published_at" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "_lte" },
                            value: { kind: "Variable", name: { kind: "Name", value: "now" } },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
                { kind: "Field", name: { kind: "Name", value: "excerpt" } },
                { kind: "Field", name: { kind: "Name", value: "published_at" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "coverImage" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{ kind: "Field", name: { kind: "Name", value: "url" } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PostsQuery, PostsQueryVariables>;
export const PostIdsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "PostIds" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "now" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "timestamptz" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "posts" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "published_at" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "_lte" },
                            value: { kind: "Variable", name: { kind: "Name", value: "now" } },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PostIdsQuery, PostIdsQueryVariables>;
export const PostMetadataDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "PostMetadata" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "uuid" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "posts_by_pk" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "title" } },
                { kind: "Field", name: { kind: "Name", value: "excerpt" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PostMetadataQuery, PostMetadataQueryVariables>;
export const PostDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "Post" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "uuid" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "posts_by_pk" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "title" } },
                { kind: "Field", name: { kind: "Name", value: "excerpt" } },
                { kind: "Field", name: { kind: "Name", value: "published_at" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "coverImage" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{ kind: "Field", name: { kind: "Name", value: "url" } }],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "content" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "post_tags" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "tag" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [{ kind: "Field", name: { kind: "Name", value: "tag" } }],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PostQuery, PostQueryVariables>;
