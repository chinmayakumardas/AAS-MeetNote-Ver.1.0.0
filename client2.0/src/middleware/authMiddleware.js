// middleware/authMiddleware.js
import { redirect } from 'next/navigation';
import { store } from '../redux/store';
import { selectIsAuthenticated } from '../redux/slices/authSlice';

export function checkAuthentication(pathname) {
  const isAuthenticated = store.getState().auth.isAuthenticated;

  // Only check authentication if the route is protected
  if (pathname !== '/login' && !isAuthenticated) {
    // Redirect to login page if not authenticated
    redirect('/login');
  }
}
