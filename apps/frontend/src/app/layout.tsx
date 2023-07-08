import '@/styles/globals.css';
// include styles from the ui package
import '@tatsutakeinjp/core-ui/styles.css';
import GoogleAnalytics from '@/components/Utils/GoogleAnalytics';
import { env } from '@/env.mjs';
import { Analytics } from '@vercel/analytics/react';
import { Metadata } from 'next';
import React from 'react';

const siteName = env.NEXT_PUBLIC_SITE_NAME;
const description = 'Ryo Takeuchi のポートフォリオサイトです。';
const url = env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  title: {
    default: siteName,
    /** `next-seo`の`titleTemplate`に相当する機能 */
    template: `%s | ${siteName}`,
  },
  description,
  openGraph: {
    title: siteName,
    description,
    url,
    siteName,
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description,
    creator: '@tatsutakein',
  },
  alternates: {
    canonical: url,
  },
};

interface LayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<LayoutProps> = ({ children }) => {
  // noinspection HtmlRequiredTitleElement
  return (
    <html lang='ja'>
      <head>
        <GoogleAnalytics />
      </head>
      <body className='tracking-wide text-gray-700 dark:bg-zinc-800 dark:text-white'>
        {children}
        <Analytics />
      </body>
    </html>
  );
};

export default RootLayout;
