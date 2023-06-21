import '@/styles/globals.css';
// include styles from the ui package
import 'ui/styles.css';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='ja'>
      <body className='tracking-wide text-gray-700 dark:bg-zinc-800 dark:text-white'>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
