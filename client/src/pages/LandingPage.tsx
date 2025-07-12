import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const featuredItems = [
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
  {
    id: '3',
    title: 'Cozy Knit Sweater',
    image: 'https://images.unsplash.com/photo-1469398715555-76331a6c7fa0?auto=format&fit=crop&w=400&q=80',
  },
];

const categories = [
  { name: 'Jackets', icon: '🧥' },
  { name: 'Dresses', icon: '👗' },
  { name: 'Sweaters', icon: '🧶' },
  { name: 'T-Shirts', icon: '👕' },
  { name: 'Pants', icon: '👖' },
  { name: 'Shoes', icon: '👟' },
];

const products = [
  {
    id: '1',
    title: 'Classic White Tee',
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80',
    price: 'Swap/120 pts',
  },
  {
    id: '2',
    title: 'Summer Floral Dress',
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80',
    price: 'Swap/150 pts',
  },
  {
    id: '3',
    title: 'Denim Jacket',
    image: 'https://images.unsplash.com/photo-1469398715555-76331a6c7fa0?auto=format&fit=crop&w=400&q=80',
    price: 'Swap/200 pts',
  },
  {
    id: '4',
    title: 'Cozy Knit Sweater',
    image: 'https://images.unsplash.com/photo-1469398715555-76331a6c7fa0?auto=format&fit=crop&w=400&q=80',
    price: 'Swap/100 pts',
  },
];

const LandingPage: React.FC = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 pb-12">
      {/* Search Bar */}
      <div className="max-w-4xl mx-auto pt-8 px-4">
        <input
          type="text"
          className="input input-bordered w-full text-lg"
          placeholder="Search for clothing, categories, or users..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto mt-8 px-4 flex flex-col items-center text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-blue-900 drop-shadow">ReWear – Community Clothing Exchange</h1>
        <p className="mb-6 text-lg max-w-2xl text-blue-800">
          Exchange unused clothing through direct swaps or a point-based system. Promote sustainable fashion and reduce textile waste!
        </p>
        <div className="flex gap-4 mb-8 flex-wrap justify-center">
          <button onClick={() => navigate('/dashboard')} className="btn btn-primary px-8 text-lg">Start Swapping</button>
          <button onClick={() => navigate('/dashboard')} className="btn btn-secondary px-8 text-lg">Browse Items</button>
          <button onClick={() => navigate('/add')} className="btn btn-accent px-8 text-lg">List an Item</button>
        </div>
      </div>
      {/* Featured Items Carousel */}
      <div className="max-w-3xl mx-auto mb-10 px-4">
        <h2 className="text-2xl font-semibold mb-4 text-blue-900">Featured Items</h2>
        <div className="carousel w-full rounded-box shadow-lg bg-white">
          {featuredItems.map((item, idx) => (
            <div key={item.id} id={`slide${idx}`} className="carousel-item relative w-full flex flex-col items-center">
              <img src={item.image} alt={item.title} className="w-full h-64 object-cover rounded-lg" />
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-80 px-4 py-2 rounded shadow text-lg font-semibold">
                {item.title}
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-2 right-2 top-1/2">
                <a href={`#slide${(idx - 1 + featuredItems.length) % featuredItems.length}`} className="btn btn-circle btn-sm">❮</a>
                <a href={`#slide${(idx + 1) % featuredItems.length}`} className="btn btn-circle btn-sm">❯</a>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Categories Section */}
      <div className="max-w-4xl mx-auto mb-10 px-4">
        <h2 className="text-2xl font-semibold mb-4 text-blue-900">Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {categories.map(cat => (
            <div key={cat.name} className="bg-white rounded-xl shadow flex flex-col items-center justify-center py-6 hover:bg-blue-100 transition cursor-pointer">
              <span className="text-3xl mb-2">{cat.icon}</span>
              <span className="font-semibold text-blue-800">{cat.name}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Product Listings */}
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-4 text-blue-900">Product Listings</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map(product => (
            <div key={product.id} className="card bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition-transform cursor-pointer" onClick={() => navigate(`/item/${product.id}`)}>
              <figure><img src={product.image} alt={product.title} className="h-48 w-full object-cover" /></figure>
              <div className="card-body p-4">
                <h4 className="card-title text-lg text-blue-900">{product.title}</h4>
                <span className="badge badge-accent text-base">{product.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage; 