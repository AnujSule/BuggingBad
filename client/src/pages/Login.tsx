import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../components/UserContext';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { loginAsUser, loginAsAdmin } = useUser();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock logic: 'admin' logs in as admin, anything else as user
    if (username === 'admin' && password === 'admin') {
      loginAsAdmin();
      navigate('/dashboard');
    } else if (username && password) {
      loginAsUser();
      navigate('/dashboard');
    } else {
      setError('Please enter username and password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-blue-400">
      <div className="bg-base-100 rounded-2xl shadow-xl p-8 w-full max-w-md flex flex-col items-center">
        <div className="w-20 h-20 rounded-full bg-blue-200 flex items-center justify-center mb-6">
          <span className="text-4xl">👕</span>
        </div>
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form className="w-full flex flex-col gap-4" onSubmit={handleLogin}>
          <input
            type="text"
            className="input input-bordered w-full"
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            autoFocus
          />
          <input
            type="password"
            className="input input-bordered w-full"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          {error && <div className="text-error text-sm text-center">{error}</div>}
          <button type="submit" className="btn btn-primary w-full">Login</button>
        </form>
        <div className="mt-4 text-sm text-gray-500">
          Don&apos;t have an account?{' '}
          <button className="link link-primary" onClick={() => navigate('/register')}>Register</button>
        </div>
      </div>
    </div>
  );
};

export default Login; 