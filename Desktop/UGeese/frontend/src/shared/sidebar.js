// Sidebar.js

import React from 'react';
import { FaBars, FaUser, FaCog, FaChartBar, FaShoppingCart } from 'react-icons/fa';

const Sidebar = ({ toggleSidebar, isSidebarOpen }) => {
  return (
    <div className="sidebar bg-gray-800 text-white h-screen">
      <button onClick={toggleSidebar} className="sidebar-toggle p-4 focus:outline-none">
        <FaBars />
      </button>
      <nav className={`mt-5 ${isSidebarOpen ? 'block' : 'hidden'}`}>
        <ul className="space-y-2">
          <li>
            <a href="#profile" className="flex items-center p-2 hover:bg-gray-700">
              <FaUser className="mr-2" />
              Profile
            </a>
          </li>
          <li>
            <a href="#settings" className="flex items-center p-2 hover:bg-gray-700">
              <FaCog className="mr-2" />
              Settings
            </a>
          </li>
          <li>
            <a href="#stats" className="flex items-center p-2 hover:bg-gray-700">
              <FaChartBar className="mr-2" />
              Stats
            </a>
          </li>
          <li>
            <a href="#store" className="flex items-center p-2 hover:bg-gray-700">
              <FaShoppingCart className="mr-2" />
              Store
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
