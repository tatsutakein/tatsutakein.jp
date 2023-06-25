import '@/styles/globals.css';
// include styles from the ui package
import 'ui/styles.css';
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang='ja'>
      <body className='tracking-wide text-gray-700 dark:bg-zinc-800 dark:text-white'>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
