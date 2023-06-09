import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import { config, dom } from '@fortawesome/fontawesome-svg-core';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);

    return { ...initialProps };
  }

  render() {
    return (
      <Html lang='ja'>
        <Head>
          <style>{dom.css()}</style>
        </Head>

        <body className='tracking-wide text-gray-700 dark:bg-zinc-800 dark:text-white'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
