export const PagePath = {
  /**
   * ルートページ
   */
  root(withOrigin?: boolean): string {
    const path = '/';
    return withOrigin ? PagePath.withOrigin(path) : path;
  },

  /**
   * ブログページ
   */
  blogIndex(withOrigin?: boolean): string {
    const path = '/posts';
    return withOrigin ? PagePath.withOrigin(path) : path;
  },

  blogDetail(postId: string, withOrigin?: boolean): string {
    const path = `/posts/${postId}`;
    return withOrigin ? PagePath.withOrigin(path) : path;
  },

  blogNew(withOrigin?: boolean): string {
    const path = '/posts/new';
    return withOrigin ? PagePath.withOrigin(path) : path;
  },

  /**
   * タグ検索結果ページ
   */
  tagResult(tags: string[], withOrigin?: boolean): string {
    const path = `/tags/${tags.join('/')}`;
    return withOrigin ? PagePath.withOrigin(path) : path;
  },

  /**
   * Toolsページ
   */
  tools(withOrigin?: boolean): string {
    const path = '/tools';
    return withOrigin ? PagePath.withOrigin(path) : path;
  },

  /**
   * Works ページ
   */
  works(withOrigin?: boolean): string {
    const path = '/works';
    return withOrigin ? PagePath.withOrigin(path) : path;
  },

  /**
   * Aboutページ
   */
  about(withOrigin?: boolean): string {
    const path = '/about';
    return withOrigin ? PagePath.withOrigin(path) : path;
  },

  /**
   * 404ページ
   */
  notfound(withOrigin?: boolean): string {
    const path = '/404';
    return withOrigin ? PagePath.withOrigin(path) : path;
  },

  /**
   * Heroesページ
   */
  heroes(withOrigin?: boolean): string {
    const path = '/heroes';
    return withOrigin ? PagePath.withOrigin(path) : path;
  },

  withOrigin(path: string): string {
    // TODO: process.env.NEXT_PUBLIC_SITE_ORIGIN
    return '' + path;
  },

  //----------------------------------------------------------------------------
  // Private Methods
  //----------------------------------------------------------------------------

  /**
   * クエリパラメータを作成する
   * 返る文字列はエンコード済み
   * @example ?aaa=bbb&ccc=ddd
   */
  _makeSearchParams(params?: Record<string, string>): string {
    if (!params) return '';

    const searchParams = new URLSearchParams();

    Object.keys(params).forEach((key) => {
      const value = String(params[key]);

      if (value !== '') {
        searchParams.set(key, value);
      }
    });

    const query = searchParams.toString();

    return query ? `?${query}` : '';
  },
};
