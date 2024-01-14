
import { NavLink } from "react-router-dom";
import { VideoCameraIcon } from "@heroicons/react/24/outline"

const Header = () => {
  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto">
        <nav className="flex items-center justify-between p-4">
        <NavLink to="/" className="text-gold text-2xl flex items-center">
            <VideoCameraIcon className="w-6 h-6 mr-2" /> Movie Database
          </NavLink>
          <ul className="flex space-x-4">
            <li>
              <NavLink
                to="/"
                className="text-white hover:text-gold transition duration-300"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/watchList"
                className="text-white hover:text-gold transition duration-300"
              >
                Watch List
              </NavLink>
            </li>
          </ul>
          <div className="space-x-2">
            <button className="bg-transparent border border-white text-white px-4 py-2 rounded-md hover:bg-white hover:text-gray-900 transition duration-300">
              Login
            </button>
            <button className="bg-transparent border border-white text-white px-4 py-2 rounded-md hover:bg-white hover:text-gray-900 transition duration-300">
              Register
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
