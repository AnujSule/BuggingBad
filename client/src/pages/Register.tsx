import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../components/UserContext';

const Register: React.FC = () => {
  const [fields, setFields] = useState({ field1: '', field2: '', field3: '', field4: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { loginAsUser } = useUser();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (fields.field1 && fields.field2 && fields.field3 && fields.field4) {
      loginAsUser();
      navigate('/dashboard');
    } else {
      setError('Please fill all fields');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-blue-400">
      <div className="bg-base-100 rounded-2xl shadow-xl p-8 w-full max-w-md flex flex-col items-center">
        <div className="w-20 h-20 rounded-full bg-blue-200 flex items-center justify-center mb-6">
          <span className="text-4xl">👕</span>
        </div>
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <form className="w-full flex flex-col gap-4" onSubmit={handleRegister}>
          <input
            type="text"
            name="field1"
            className="input input-bordered w-full"
            placeholder="Field 1"
            value={fields.field1}
            onChange={handleChange}
            autoFocus
          />
          <input
            type="text"
            name="field2"
            className="input input-bordered w-full"
            placeholder="Field 2"
            value={fields.field2}
            onChange={handleChange}
          />
          <input
            type="text"
            name="field3"
            className="input input-bordered w-full"
            placeholder="Field 3"
            value={fields.field3}
            onChange={handleChange}
          />
          <input
            type="text"
            name="field4"
            className="input input-bordered w-full"
            placeholder="Field 4"
            value={fields.field4}
            onChange={handleChange}
          />
          {error && <div className="text-error text-sm text-center">{error}</div>}
          <button type="submit" className="btn btn-primary w-full">Register</button>
        </form>
        <div className="mt-4 text-sm text-gray-500">
          Already have an account?{' '}
          <button className="link link-primary" onClick={() => navigate('/login')}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Register; 