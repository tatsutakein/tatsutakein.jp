import '@/styles/globals.css';
// include styles from the ui package
import '@core/ui/styles.css';
import React from 'react';
import GoogleAnalytics from '@/components/Utils/GoogleAnalytics';

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
      </body>
    </html>
  );
};

export default RootLayout;
