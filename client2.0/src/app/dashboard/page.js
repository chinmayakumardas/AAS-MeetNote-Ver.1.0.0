// app/dashboard/page.js
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, logout } from '../../redux/slices/authSlice';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(logout());
    router.push('/login'); // Redirect to login after logout
  };

  return (
    <div>
      <h1>Welcome, {user?.username}</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
