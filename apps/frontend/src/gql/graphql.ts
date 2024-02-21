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
  timestamptz: { input: any; output: any };
  uuid: { input: any; output: any };
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
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
export type String_Comparison_Exp = {
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
  distinct_on?: InputMaybe<Array<Posts_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Posts_Order_By>>;
  where?: InputMaybe<Posts_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "assets". All fields are combined with a logical 'AND'. */
export type Assets_Bool_Exp = {
  _and?: InputMaybe<Array<Assets_Bool_Exp>>;
  _not?: InputMaybe<Assets_Bool_Exp>;
  _or?: InputMaybe<Array<Assets_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  file_name?: InputMaybe<String_Comparison_Exp>;
  height?: InputMaybe<Smallint_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  mime_type?: InputMaybe<String_Comparison_Exp>;
  posts?: InputMaybe<Posts_Bool_Exp>;
  size?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  url?: InputMaybe<String_Comparison_Exp>;
  width?: InputMaybe<Smallint_Comparison_Exp>;
};

/** Ordering options when selecting data from "assets". */
export type Assets_Order_By = {
  created_at?: InputMaybe<Order_By>;
  file_name?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  mime_type?: InputMaybe<Order_By>;
  posts_aggregate?: InputMaybe<Posts_Aggregate_Order_By>;
  size?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
  width?: InputMaybe<Order_By>;
};

/** select columns of table "assets" */
export enum Assets_Select_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  FileName = "file_name",
  /** column name */
  Height = "height",
  /** column name */
  Id = "id",
  /** column name */
  MimeType = "mime_type",
  /** column name */
  Size = "size",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  Url = "url",
  /** column name */
  Width = "width",
}

/** Streaming cursor of the table "assets" */
export type Assets_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Assets_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Assets_Stream_Cursor_Value_Input = {
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
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = "ASC",
  /** descending ordering of the cursor */
  Desc = "DESC",
}

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = "asc",
  /** in ascending order, nulls first */
  AscNullsFirst = "asc_nulls_first",
  /** in ascending order, nulls last */
  AscNullsLast = "asc_nulls_last",
  /** in descending order, nulls first */
  Desc = "desc",
  /** in descending order, nulls first */
  DescNullsFirst = "desc_nulls_first",
  /** in descending order, nulls last */
  DescNullsLast = "desc_nulls_last",
}

/** ポストとタグの関連付け */
export type Post_Tags = {
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
export type Post_Tags_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Post_Tags_Max_Order_By>;
  min?: InputMaybe<Post_Tags_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "post_tags". All fields are combined with a logical 'AND'. */
export type Post_Tags_Bool_Exp = {
  _and?: InputMaybe<Array<Post_Tags_Bool_Exp>>;
  _not?: InputMaybe<Post_Tags_Bool_Exp>;
  _or?: InputMaybe<Array<Post_Tags_Bool_Exp>>;
  post?: InputMaybe<Posts_Bool_Exp>;
  post_id?: InputMaybe<Uuid_Comparison_Exp>;
  tag?: InputMaybe<Tags_Bool_Exp>;
  tag_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** order by max() on columns of table "post_tags" */
export type Post_Tags_Max_Order_By = {
  /** ポストID */
  post_id?: InputMaybe<Order_By>;
  /** タグID */
  tag_id?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "post_tags" */
export type Post_Tags_Min_Order_By = {
  /** ポストID */
  post_id?: InputMaybe<Order_By>;
  /** タグID */
  tag_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "post_tags". */
export type Post_Tags_Order_By = {
  post?: InputMaybe<Posts_Order_By>;
  post_id?: InputMaybe<Order_By>;
  tag?: InputMaybe<Tags_Order_By>;
  tag_id?: InputMaybe<Order_By>;
};

/** select columns of table "post_tags" */
export enum Post_Tags_Select_Column {
  /** column name */
  PostId = "post_id",
  /** column name */
  TagId = "tag_id",
}

/** Streaming cursor of the table "post_tags" */
export type Post_Tags_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Post_Tags_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Post_Tags_Stream_Cursor_Value_Input = {
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
  post_tags: Array<Post_Tags>;
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
export type PostsPost_TagsArgs = {
  distinct_on?: InputMaybe<Array<Post_Tags_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Post_Tags_Order_By>>;
  where?: InputMaybe<Post_Tags_Bool_Exp>;
};

/** order by aggregate values of table "posts" */
export type Posts_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Posts_Max_Order_By>;
  min?: InputMaybe<Posts_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "posts". All fields are combined with a logical 'AND'. */
export type Posts_Bool_Exp = {
  _and?: InputMaybe<Array<Posts_Bool_Exp>>;
  _not?: InputMaybe<Posts_Bool_Exp>;
  _or?: InputMaybe<Array<Posts_Bool_Exp>>;
  content?: InputMaybe<String_Comparison_Exp>;
  coverImage?: InputMaybe<Assets_Bool_Exp>;
  cover_image_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  excerpt?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  post_tags?: InputMaybe<Post_Tags_Bool_Exp>;
  published_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  seo?: InputMaybe<Seos_Bool_Exp>;
  seo_id?: InputMaybe<Uuid_Comparison_Exp>;
  slug?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** order by max() on columns of table "posts" */
export type Posts_Max_Order_By = {
  /** 内容 */
  content?: InputMaybe<Order_By>;
  /** カバー画像 */
  cover_image_id?: InputMaybe<Order_By>;
  /** 作成日時 */
  created_at?: InputMaybe<Order_By>;
  /** 削除日時 */
  deleted_at?: InputMaybe<Order_By>;
  /** 抜粋 */
  excerpt?: InputMaybe<Order_By>;
  /** ポスト ID */
  id?: InputMaybe<Order_By>;
  /** 公開日時 */
  published_at?: InputMaybe<Order_By>;
  /** SEO */
  seo_id?: InputMaybe<Order_By>;
  /** ラベル文字列 */
  slug?: InputMaybe<Order_By>;
  /** タイトル */
  title?: InputMaybe<Order_By>;
  /** 更新日時 */
  updated_at?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "posts" */
export type Posts_Min_Order_By = {
  /** 内容 */
  content?: InputMaybe<Order_By>;
  /** カバー画像 */
  cover_image_id?: InputMaybe<Order_By>;
  /** 作成日時 */
  created_at?: InputMaybe<Order_By>;
  /** 削除日時 */
  deleted_at?: InputMaybe<Order_By>;
  /** 抜粋 */
  excerpt?: InputMaybe<Order_By>;
  /** ポスト ID */
  id?: InputMaybe<Order_By>;
  /** 公開日時 */
  published_at?: InputMaybe<Order_By>;
  /** SEO */
  seo_id?: InputMaybe<Order_By>;
  /** ラベル文字列 */
  slug?: InputMaybe<Order_By>;
  /** タイトル */
  title?: InputMaybe<Order_By>;
  /** 更新日時 */
  updated_at?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "posts". */
export type Posts_Order_By = {
  content?: InputMaybe<Order_By>;
  coverImage?: InputMaybe<Assets_Order_By>;
  cover_image_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  excerpt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  post_tags_aggregate?: InputMaybe<Post_Tags_Aggregate_Order_By>;
  published_at?: InputMaybe<Order_By>;
  seo?: InputMaybe<Seos_Order_By>;
  seo_id?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** select columns of table "posts" */
export enum Posts_Select_Column {
  /** column name */
  Content = "content",
  /** column name */
  CoverImageId = "cover_image_id",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  DeletedAt = "deleted_at",
  /** column name */
  Excerpt = "excerpt",
  /** column name */
  Id = "id",
  /** column name */
  PublishedAt = "published_at",
  /** column name */
  SeoId = "seo_id",
  /** column name */
  Slug = "slug",
  /** column name */
  Title = "title",
  /** column name */
  UpdatedAt = "updated_at",
}

/** Streaming cursor of the table "posts" */
export type Posts_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Posts_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Posts_Stream_Cursor_Value_Input = {
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

export type Query_Root = {
  __typename?: "query_root";
  /** fetch data from the table: "assets" */
  assets: Array<Assets>;
  /** fetch data from the table: "assets" using primary key columns */
  assets_by_pk?: Maybe<Assets>;
  /** An array relationship */
  post_tags: Array<Post_Tags>;
  /** fetch data from the table: "post_tags" using primary key columns */
  post_tags_by_pk?: Maybe<Post_Tags>;
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

export type Query_RootAssetsArgs = {
  distinct_on?: InputMaybe<Array<Assets_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Assets_Order_By>>;
  where?: InputMaybe<Assets_Bool_Exp>;
};

export type Query_RootAssets_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Query_RootPost_TagsArgs = {
  distinct_on?: InputMaybe<Array<Post_Tags_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Post_Tags_Order_By>>;
  where?: InputMaybe<Post_Tags_Bool_Exp>;
};

export type Query_RootPost_Tags_By_PkArgs = {
  post_id: Scalars["uuid"]["input"];
  tag_id: Scalars["uuid"]["input"];
};

export type Query_RootPostsArgs = {
  distinct_on?: InputMaybe<Array<Posts_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Posts_Order_By>>;
  where?: InputMaybe<Posts_Bool_Exp>;
};

export type Query_RootPosts_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Query_RootSeosArgs = {
  distinct_on?: InputMaybe<Array<Seos_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Seos_Order_By>>;
  where?: InputMaybe<Seos_Bool_Exp>;
};

export type Query_RootSeos_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Query_RootTagsArgs = {
  distinct_on?: InputMaybe<Array<Tags_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Tags_Order_By>>;
  where?: InputMaybe<Tags_Bool_Exp>;
};

export type Query_RootTags_By_PkArgs = {
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
  distinct_on?: InputMaybe<Array<Posts_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Posts_Order_By>>;
  where?: InputMaybe<Posts_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "seos". All fields are combined with a logical 'AND'. */
export type Seos_Bool_Exp = {
  _and?: InputMaybe<Array<Seos_Bool_Exp>>;
  _not?: InputMaybe<Seos_Bool_Exp>;
  _or?: InputMaybe<Array<Seos_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  og_image_url?: InputMaybe<String_Comparison_Exp>;
  posts?: InputMaybe<Posts_Bool_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** Ordering options when selecting data from "seos". */
export type Seos_Order_By = {
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  og_image_url?: InputMaybe<Order_By>;
  posts_aggregate?: InputMaybe<Posts_Aggregate_Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** select columns of table "seos" */
export enum Seos_Select_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  DeletedAt = "deleted_at",
  /** column name */
  Description = "description",
  /** column name */
  Id = "id",
  /** column name */
  OgImageUrl = "og_image_url",
  /** column name */
  Title = "title",
  /** column name */
  UpdatedAt = "updated_at",
}

/** Streaming cursor of the table "seos" */
export type Seos_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Seos_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Seos_Stream_Cursor_Value_Input = {
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
export type Smallint_Comparison_Exp = {
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

export type Subscription_Root = {
  __typename?: "subscription_root";
  /** fetch data from the table: "assets" */
  assets: Array<Assets>;
  /** fetch data from the table: "assets" using primary key columns */
  assets_by_pk?: Maybe<Assets>;
  /** fetch data from the table in a streaming manner: "assets" */
  assets_stream: Array<Assets>;
  /** An array relationship */
  post_tags: Array<Post_Tags>;
  /** fetch data from the table: "post_tags" using primary key columns */
  post_tags_by_pk?: Maybe<Post_Tags>;
  /** fetch data from the table in a streaming manner: "post_tags" */
  post_tags_stream: Array<Post_Tags>;
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

export type Subscription_RootAssetsArgs = {
  distinct_on?: InputMaybe<Array<Assets_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Assets_Order_By>>;
  where?: InputMaybe<Assets_Bool_Exp>;
};

export type Subscription_RootAssets_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Subscription_RootAssets_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Assets_Stream_Cursor_Input>>;
  where?: InputMaybe<Assets_Bool_Exp>;
};

export type Subscription_RootPost_TagsArgs = {
  distinct_on?: InputMaybe<Array<Post_Tags_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Post_Tags_Order_By>>;
  where?: InputMaybe<Post_Tags_Bool_Exp>;
};

export type Subscription_RootPost_Tags_By_PkArgs = {
  post_id: Scalars["uuid"]["input"];
  tag_id: Scalars["uuid"]["input"];
};

export type Subscription_RootPost_Tags_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Post_Tags_Stream_Cursor_Input>>;
  where?: InputMaybe<Post_Tags_Bool_Exp>;
};

export type Subscription_RootPostsArgs = {
  distinct_on?: InputMaybe<Array<Posts_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Posts_Order_By>>;
  where?: InputMaybe<Posts_Bool_Exp>;
};

export type Subscription_RootPosts_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Subscription_RootPosts_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Posts_Stream_Cursor_Input>>;
  where?: InputMaybe<Posts_Bool_Exp>;
};

export type Subscription_RootSeosArgs = {
  distinct_on?: InputMaybe<Array<Seos_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Seos_Order_By>>;
  where?: InputMaybe<Seos_Bool_Exp>;
};

export type Subscription_RootSeos_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Subscription_RootSeos_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Seos_Stream_Cursor_Input>>;
  where?: InputMaybe<Seos_Bool_Exp>;
};

export type Subscription_RootTagsArgs = {
  distinct_on?: InputMaybe<Array<Tags_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Tags_Order_By>>;
  where?: InputMaybe<Tags_Bool_Exp>;
};

export type Subscription_RootTags_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Subscription_RootTags_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Tags_Stream_Cursor_Input>>;
  where?: InputMaybe<Tags_Bool_Exp>;
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
  post_tags: Array<Post_Tags>;
  /** タグ */
  tag: Scalars["String"]["output"];
  /** 更新日時 */
  updated_at: Scalars["timestamptz"]["output"];
};

/** タグ */
export type TagsPost_TagsArgs = {
  distinct_on?: InputMaybe<Array<Post_Tags_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Post_Tags_Order_By>>;
  where?: InputMaybe<Post_Tags_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "tags". All fields are combined with a logical 'AND'. */
export type Tags_Bool_Exp = {
  _and?: InputMaybe<Array<Tags_Bool_Exp>>;
  _not?: InputMaybe<Tags_Bool_Exp>;
  _or?: InputMaybe<Array<Tags_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  post_tags?: InputMaybe<Post_Tags_Bool_Exp>;
  tag?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** Ordering options when selecting data from "tags". */
export type Tags_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  post_tags_aggregate?: InputMaybe<Post_Tags_Aggregate_Order_By>;
  tag?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** select columns of table "tags" */
export enum Tags_Select_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Description = "description",
  /** column name */
  Id = "id",
  /** column name */
  Tag = "tag",
  /** column name */
  UpdatedAt = "updated_at",
}

/** Streaming cursor of the table "tags" */
export type Tags_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Tags_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Tags_Stream_Cursor_Value_Input = {
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
export type Timestamptz_Comparison_Exp = {
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
export type Uuid_Comparison_Exp = {
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
    id: any;
    title: string;
    excerpt: string;
    published_at?: any | null;
    coverImage?: { __typename?: "assets"; url: string } | null;
  }>;
};

export type PostIdsQueryVariables = Exact<{
  now: Scalars["timestamptz"]["input"];
}>;

export type PostIdsQuery = { __typename?: "query_root"; posts: Array<{ __typename?: "posts"; id: any }> };

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
    published_at?: any | null;
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
