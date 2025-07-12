import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useUser } from './UserContext';
import { UserCircleIcon } from '@heroicons/react/24/solid';

const Navbar: React.FC = () => {
  const location = useLocation();
  const { role, loginAsUser, loginAsAdmin, logout } = useUser();
  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/dashboard', label: 'Dashboard' },
    { to: '/add', label: 'Add Item' },
  ];
  if (role === 'admin') navLinks.push({ to: '/admin', label: 'Admin Panel' });

  return (
    <nav className="w-full bg-gradient-to-r from-green-400 via-blue-400 to-blue-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between h-16">
        {/* Logo/Brand */}
        <div className="flex items-center gap-2">
          <span className="text-3xl font-extrabold text-white tracking-tight drop-shadow">👕</span>
          <Link to="/" className="text-2xl font-bold text-white tracking-tight drop-shadow hover:text-yellow-200 transition">ReWear</Link>
        </div>
        {/* Horizontal Nav Links */}
        <div className="flex items-center gap-6">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-lg px-3 py-1 rounded-md font-medium transition-all duration-150
                ${location.pathname === link.to ? 'bg-white text-blue-700 shadow font-bold' : 'text-white hover:bg-blue-200 hover:text-blue-800'}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        {/* Profile Dropdown */}
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <UserCircleIcon className="w-9 h-9 text-white" />
          </label>
          <ul tabIndex={0} className="mt-3 p-3 shadow menu menu-sm dropdown-content bg-white rounded-box w-56 border border-blue-200">
            {role === null && (
              <>
                <li><button onClick={loginAsUser} className="hover:bg-blue-100">Log in as User</button></li>
                <li><button onClick={loginAsAdmin} className="hover:bg-blue-100">Log in as Admin</button></li>
              </>
            )}
            {role && (
              <>
                <li><span className="font-semibold text-blue-700">Role: {role}</span></li>
                <li><button onClick={logout} className="hover:bg-blue-100">Logout</button></li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 