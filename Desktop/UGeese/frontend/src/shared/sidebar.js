import { Link } from 'react-router-dom';
// Import the trophy and clock icons
import { FaBars, FaUser, FaCog, FaChartBar, FaShoppingCart, FaTrophy, FaClock } from 'react-icons/fa';

const Sidebar = ({ toggleSidebar, isSidebarOpen, openSettings }) => {
  return (
    <div className={`sidebar ${isSidebarOpen ? 'bg-yellow-200' : ''} text-black h-screen`}>
      <button onClick={toggleSidebar} className="sidebar-toggle p-4 focus:outline-none">
        <FaBars className="text-black" />
      </button>
      <nav className={`mt-5 ${isSidebarOpen ? 'block' : 'hidden'}`}>
        <ul className="space-y-2">
          {/* Existing items */}
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
          {/* New items for achievements and Top Goose Pomodorks */}
          <li>
            <a href="/achievements" className="flex items-center p-2 hover:bg-yellow-400">
              <FaTrophy className="mr-2 text-black" />
              Achievements
            </a>
          </li>
          <li>
            <a href="/top-goose-pomodorks" className="flex items-center p-2 hover:bg-yellow-400">
              <FaClock className="mr-2 text-black" />
              Top Goose Pomodorks
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
