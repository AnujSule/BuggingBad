import React from 'react';
import { useParams } from 'react-router-dom';
import { ArrowRightOnRectangleIcon, GiftIcon } from '@heroicons/react/24/solid';

const mockItem = {
  id: '1',
  title: 'Vintage Denim Jacket',
  description: 'A classic denim jacket in great condition. Perfect for layering in any season. Size M. 100% cotton, lightly worn, no stains or tears.',
  images: [
    'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1469398715555-76331a6c7fa0?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80',
  ],
  status: 'Available',
};

const ItemDetail: React.FC = () => {
  const { id } = useParams();
  const item = mockItem; // In real app, fetch by id

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-10">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-8 flex flex-col md:flex-row gap-8">
        {/* Main Product Image */}
        <div className="flex-1 flex flex-col items-center">
          <img src={item.images[0]} alt={item.title} className="w-full max-w-xs h-80 object-cover rounded-xl shadow mb-4" />
          {/* Additional Images */}
          <div className="flex gap-2 mt-2">
            {item.images.slice(1).map((img, idx) => (
              <img key={idx} src={img} alt="Additional" className="w-20 h-20 object-cover rounded-lg border hover:scale-105 transition" />
            ))}
          </div>
        </div>
        {/* Product Info */}
        <div className="flex-1 flex flex-col gap-4 justify-between">
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-2">{item.title}</h2>
            <div className="mb-4 text-gray-700 text-lg whitespace-pre-line">{item.description}</div>
            <span className={`badge ${item.status === 'Available' ? 'badge-success' : 'badge-ghost'} mb-4`}>{item.status}</span>
          </div>
          {/* Actions */}
          <div className="flex gap-4 mt-6">
            <button className="btn btn-primary flex items-center gap-2 px-6 text-lg"><ArrowRightOnRectangleIcon className="w-5 h-5" />Swap Request</button>
            <button className="btn btn-accent flex items-center gap-2 px-6 text-lg"><GiftIcon className="w-5 h-5" />Redeem via Points</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail; 