import React from 'react';
import { UserCircleIcon } from '@heroicons/react/24/solid';

const mockProfile = {
  name: 'Jane Doe',
  email: 'jane@example.com',
  points: 120,
  listings: [
    {
      id: '1',
      title: 'Vintage Denim Jacket',
      image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: '2',
      title: 'Floral Summer Dress',
      image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80',
    },
  ],
  purchases: [
    {
      id: '3',
      title: 'Cozy Knit Sweater',
      image: 'https://images.unsplash.com/photo-1469398715555-76331a6c7fa0?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: '4',
      title: 'Classic White Tee',
      image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80',
    },
  ],
};

const Dashboard: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-10">
    <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-8">
      {/* Profile Summary */}
      <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 rounded-full bg-blue-200 flex items-center justify-center mb-2">
            <UserCircleIcon className="w-16 h-16 text-blue-700" />
          </div>
          <div className="text-xl font-bold text-blue-900">{mockProfile.name}</div>
          <div className="text-gray-500">{mockProfile.email}</div>
        </div>
        <div className="flex-1 flex flex-col md:flex-row gap-4 justify-center items-center">
          <div className="bg-blue-100 rounded-xl px-8 py-4 text-center shadow">
            <div className="text-2xl font-bold text-blue-900">{mockProfile.points}</div>
            <div className="text-blue-700">Points</div>
          </div>
          <div className="bg-blue-100 rounded-xl px-8 py-4 text-center shadow">
            <div className="text-2xl font-bold text-blue-900">{mockProfile.listings.length}</div>
            <div className="text-blue-700">My Listings</div>
          </div>
          <div className="bg-blue-100 rounded-xl px-8 py-4 text-center shadow">
            <div className="text-2xl font-bold text-blue-900">{mockProfile.purchases.length}</div>
            <div className="text-blue-700">My Purchases</div>
          </div>
        </div>
      </div>
      {/* My Listings */}
      <div className="mb-10">
        <h3 className="text-xl font-semibold mb-4 text-blue-900">My Listings</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {mockProfile.listings.map(item => (
            <div key={item.id} className="card bg-blue-50 shadow rounded-xl overflow-hidden">
              <figure><img src={item.image} alt={item.title} className="h-32 w-full object-cover" /></figure>
              <div className="card-body p-4">
                <h4 className="card-title text-blue-900">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* My Purchases */}
      <div>
        <h3 className="text-xl font-semibold mb-4 text-blue-900">My Purchases</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {mockProfile.purchases.map(item => (
            <div key={item.id} className="card bg-blue-50 shadow rounded-xl overflow-hidden">
              <figure><img src={item.image} alt={item.title} className="h-32 w-full object-cover" /></figure>
              <div className="card-body p-4">
                <h4 className="card-title text-blue-900">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Dashboard; 