import React, { useRef, useState } from 'react';

const categories = ['Jacket', 'Dress', 'Sweater', 'T-Shirt', 'Pants', 'Other'];
const types = ['Men', 'Women', 'Unisex', 'Kids'];
const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
const conditions = ['New', 'Like New', 'Good', 'Fair', 'Worn'];

const previousListings = [
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
];

const AddItem: React.FC = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (ev) => setImagePreview(ev.target?.result as string);
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submit handler
    alert('Item submitted! (mock)');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-10">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-8 flex flex-col md:flex-row gap-10">
        {/* Add Product Form */}
        <form className="flex-1 flex flex-col gap-6" onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold mb-2 text-blue-900">Add New Item</h2>
          {/* Image Upload */}
          <div>
            <label className="block font-semibold mb-2">Add Images</label>
            <input
              type="file"
              accept="image/*"
              className="file-input file-input-bordered w-full max-w-xs"
              onChange={handleImageChange}
              ref={fileInputRef}
            />
            {imagePreview && (
              <img src={imagePreview} alt="Preview" className="mt-4 w-40 h-40 object-cover rounded-lg border" />
            )}
          </div>
          {/* Description */}
          <div>
            <label className="block font-semibold mb-2">Add Product Description</label>
            <textarea className="textarea textarea-bordered w-full" placeholder="Describe your item" required />
          </div>
          {/* Category, Type, Size, Condition */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold mb-2">Category</label>
              <select className="select select-bordered w-full" required>
                <option value="">Select category</option>
                {categories.map(cat => <option key={cat}>{cat}</option>)}
              </select>
            </div>
            <div>
              <label className="block font-semibold mb-2">Type</label>
              <select className="select select-bordered w-full" required>
                <option value="">Select type</option>
                {types.map(type => <option key={type}>{type}</option>)}
              </select>
            </div>
            <div>
              <label className="block font-semibold mb-2">Size</label>
              <select className="select select-bordered w-full" required>
                <option value="">Select size</option>
                {sizes.map(size => <option key={size}>{size}</option>)}
              </select>
            </div>
            <div>
              <label className="block font-semibold mb-2">Condition</label>
              <select className="select select-bordered w-full" required>
                <option value="">Select condition</option>
                {conditions.map(cond => <option key={cond}>{cond}</option>)}
              </select>
            </div>
          </div>
          {/* Tags */}
          <div>
            <label className="block font-semibold mb-2">Tags</label>
            <input type="text" className="input input-bordered w-full" placeholder="Comma-separated tags (e.g. summer, casual)" />
          </div>
          {/* Submit */}
          <button type="submit" className="btn btn-primary w-full">Submit to List Item</button>
        </form>
        {/* Previous Listings */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-4 text-blue-900">Previous Listings</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {previousListings.map(item => (
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
};

export default AddItem; 