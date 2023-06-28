import '../styles/globals.css';
// include styles from the ui package
import '@core/ui/styles.css';
import React from 'react';

const RootLayout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <html
      lang='en'
      className='bg-zinc-900'
    >
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
