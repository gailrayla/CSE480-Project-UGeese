// StorePage.js
import React from 'react';
import { GooseAvatar } from './Avatars';

const StorePage = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Store Page</h2>
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-2">Available Avatars</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded shadow-md">
            <GooseAvatar name="civilEngineer" size={24} />
            <p className="text-center">Civil Engineer Goose</p>
          </div>
          <div className="bg-white p-4 rounded shadow-md">
            <GooseAvatar name="designer" size={24} />
            <p className="text-center">Designer Goose</p>
          </div>
          <div className="bg-white p-4 rounded shadow-md">
            <GooseAvatar name="business" size={24} />
            <p className="text-center">Business Goose</p>
          </div>
          {/* Add other avatars here */}
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Purchased Avatars</h3>
        {/* You can statically render purchased avatars here if needed */}
      </div>
    </div>
  );
};

export default StorePage;
