import '@/styles/globals.css';
// include styles from the ui package
import '@core/ui/styles.css';
import React from 'react';
import GoogleAnalytics from '@/components/Utils/GoogleAnalytics';
import { Analytics } from '@vercel/analytics/react';
import { Metadata } from 'next';
import { env } from '@/env.mjs';

const siteName = env.NEXT_PUBLIC_SITE_NAME as string;
const description = 'Ryo Takeuchi のポートフォリオサイトです。';
const url = env.NEXT_PUBLIC_SITE_URL as string;

export const metadata: Metadata = {
  title: {
    default: siteName,
    /** `next-seo`の`titleTemplate`に相当する機能 */
    template: `%s - ${siteName}`,
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
