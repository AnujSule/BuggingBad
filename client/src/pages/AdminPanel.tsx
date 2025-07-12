import React, { useState } from 'react';
import { CheckCircleIcon, XCircleIcon, TrashIcon, LockClosedIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import { useUser } from '../components/UserContext';
import { useNavigate } from 'react-router-dom';

const mockUsers = [
  { id: '1', name: 'Jane Doe', email: 'jane@example.com', role: 'user' },
  { id: '2', name: 'John Smith', email: 'john@example.com', role: 'user' },
  { id: '3', name: 'Alice Lee', email: 'alice@example.com', role: 'admin' },
];
const mockListings = [
  { id: '1', title: 'Vintage Denim Jacket', status: 'Pending' },
  { id: '2', title: 'Floral Summer Dress', status: 'Approved' },
];
const mockOrders = [
  { id: '1', user: 'Jane Doe', item: 'Denim Jacket', status: 'Completed' },
  { id: '2', user: 'John Smith', item: 'Floral Dress', status: 'Pending' },
];

const TABS = ['Manage Users', 'Manage Orders', 'Manage Listings'] as const;
type Tab = typeof TABS[number];

const AdminPanel: React.FC = () => {
  const [tab, setTab] = useState<Tab>('Manage Users');
  const [users, setUsers] = useState(mockUsers);
  const [listings, setListings] = useState(mockListings);
  const [orders, setOrders] = useState(mockOrders);
  const { role } = useUser();
  const navigate = useNavigate();

  if (role !== 'admin') {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <LockClosedIcon className="w-16 h-16 text-error mb-4" />
        <h2 className="text-2xl font-bold mb-2 text-error">Access Denied</h2>
        <p className="mb-4">You must be an admin to view this page.</p>
        <button className="btn btn-primary" onClick={() => navigate('/')}>Go Home</button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-10">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b pb-2">
          {TABS.map(t => (
            <button
              key={t}
              className={`px-6 py-2 text-lg font-semibold rounded-t-lg border-b-4 transition-all duration-150 ${tab === t ? 'border-blue-600 text-blue-900 bg-blue-100' : 'border-transparent text-gray-500 hover:bg-blue-50'}`}
              onClick={() => setTab(t)}
            >
              {t}
            </button>
          ))}
        </div>
        {/* Tab Content */}
        {tab === 'Manage Users' && (
          <div>
            <h2 className="text-xl font-bold mb-4 text-blue-900">Manage Users</h2>
            <div className="space-y-4">
              {users.map(user => (
                <div key={user.id} className="flex items-center bg-blue-50 rounded-xl shadow p-4 gap-6">
                  <UserCircleIcon className="w-12 h-12 text-blue-700" />
                  <div className="flex-1">
                    <div className="font-bold text-lg text-blue-900">{user.name}</div>
                    <div className="text-gray-500">{user.email}</div>
                    <div className="text-sm text-blue-700">Role: {user.role}</div>
                  </div>
                  <div className="flex gap-2">
                    <button className="btn btn-xs btn-success">Action 1</button>
                    <button className="btn btn-xs btn-warning">Action 2</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {tab === 'Manage Orders' && (
          <div>
            <h2 className="text-xl font-bold mb-4 text-blue-900">Manage Orders</h2>
            <div className="overflow-x-auto">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th>User</th>
                    <th>Item</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map(order => (
                    <tr key={order.id}>
                      <td>{order.user}</td>
                      <td>{order.item}</td>
                      <td><span className={`badge ${order.status === 'Completed' ? 'badge-success' : 'badge-warning'}`}>{order.status}</span></td>
                      <td>
                        <button className="btn btn-xs btn-success mr-2">Action 1</button>
                        <button className="btn btn-xs btn-warning">Action 2</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
        {tab === 'Manage Listings' && (
          <div>
            <h2 className="text-xl font-bold mb-4 text-blue-900">Manage Listings</h2>
            <div className="overflow-x-auto">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {listings.map(listing => (
                    <tr key={listing.id}>
                      <td>{listing.title}</td>
                      <td><span className={`badge ${listing.status === 'Approved' ? 'badge-success' : 'badge-warning'}`}>{listing.status}</span></td>
                      <td>
                        <button className="btn btn-xs btn-success mr-2">Approve</button>
                        <button className="btn btn-xs btn-error">Reject</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel; 