// app/login/page.js
'use client';

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/slices/authSlice';
import { useRouter } from 'next/navigation';
import { selectIsAuthenticated } from '../../redux/slices/authSlice';

export default function LoginPage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const isAuthenticated = useSelector(selectIsAuthenticated);

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/note'); // Redirect to the notes page if already logged in
    }
  }, [isAuthenticated, router]);

  // Sample login data for validation
  const sampleUser = {
    username: 'user',
    password: 'password',
    email: 'user@example.com',
  };

  const handleLogin = () => {
    if (username === sampleUser.username && password === sampleUser.password) {
      dispatch(login({ username: sampleUser.username, email: sampleUser.email }));
      router.push('/note'); // Redirect to notes page after successful login
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
