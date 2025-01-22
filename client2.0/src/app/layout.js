'use client'; // Ensure this is a client-side component

import { Provider } from 'react-redux'; // Import Redux Provider
import { store } from '../redux/store'; // Import the store
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { checkAuthentication } from '../middleware/authMiddleware';

export default function RootLayout({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== '/login') {
      checkAuthentication(pathname); // Only check for protected routes
    }
  }, [pathname]);

  return (
    <Provider store={store}> {/* Wrap your components with Provider */}
      <html lang="en">
        <body>
          <main>{children}</main>
        </body>
      </html>
    </Provider>
  );
}
