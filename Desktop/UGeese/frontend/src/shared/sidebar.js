import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaUser, FaCog, FaChartBar, FaShoppingCart } from 'react-icons/fa';

const Sidebar = ({ toggleSidebar, isSidebarOpen, openSettings }) => {
  return (
    <div className={`sidebar ${isSidebarOpen ? 'bg-yellow-200' : ''} text-black h-screen`}>
      <button onClick={toggleSidebar} className="sidebar-toggle p-4 focus:outline-none">
        <FaBars className="text-black" />
      </button>
      <nav className={`mt-5 ${isSidebarOpen ? 'block' : 'hidden'}`}>
        <ul className="space-y-2">
          <li>
            <a href="/profile" className="flex items-center p-2 hover:bg-yellow-400">
              <FaUser className="mr-2 text-black" />
              Profile
            </a>
          </li>
          <li>
          <Link to="/settings" className="flex items-center p-2 hover:bg-yellow-400" onClick={openSettings}>
            <FaCog className="mr-2 text-black" />
            Settings
          </Link>
          </li>
          <li>
            <a href="/stats" className="flex items-center p-2 hover:bg-yellow-400">
              <FaChartBar className="mr-2 text-black" />
              Stats
            </a>
          </li>
          <li>
            <a href="/store" className="flex items-center p-2 hover:bg-yellow-400">
              <FaShoppingCart className="mr-2 text-black" />
              Store
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
