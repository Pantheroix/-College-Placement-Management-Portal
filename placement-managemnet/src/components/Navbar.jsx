import React, { useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              {/* Website Logo */}
              <Link to="/" className="flex items-center py-4 px-2">
                <span className="font-semibold text-gray-500 text-lg">AI Placement</span>
              </Link>
            </div>
            {/* Primary Navbar items */}
            <div className="hidden md:flex items-center space-x-1">
              <Link to="/" className={`py-4 px-2 text-gray-500 font-semibold ${location.pathname === '/' ? 'border-b-4 border-blue-500' : ''}`}>Home</Link>
              {user && <Link to="/about" className={`py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300 ${location.pathname === '/about' ? 'border-b-4 border-blue-500' : ''}`}>About</Link>}
            </div>
          </div>
          {/* Secondary Navbar items */}
          <div className="hidden md:flex items-center space-x-3 ">
            {!user ? (
              <>
                <Link to="/login" className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-blue-500 hover:text-white transition duration-300">Log In</Link>
                <Link to="/signup" className="py-2 px-2 font-medium text-white bg-blue-500 rounded hover:bg-blue-400 transition duration-300">Sign Up</Link>
              </>
            ) : (
              <div className="relative">
                <button className="flex items-center space-x-2">
                  <span className="font-medium text-gray-500">Welcome, {user.email}</span>
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20">
                  <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white">Logout</button>
                </div>
              </div>
            )}
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button className="outline-none mobile-menu-button">
              <svg className=" w-6 h-6 text-gray-500 hover:text-blue-500 "
                x-show="!showMenu"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* mobile menu */}
      <div className="hidden mobile-menu">
        <ul className="">
          <li className="active"><Link to="/" className="block text-sm px-2 py-4 text-white bg-blue-500 font-semibold">Home</Link></li>
          {user && <li><Link to="/about" className="block text-sm px-2 py-4 hover:bg-blue-500 transition duration-300">About</Link></li>}
          {!user ? (
            <>
              <li><Link to="/login" className="block text-sm px-2 py-4 hover:bg-blue-500 transition duration-300">Log In</Link></li>
              <li><Link to="/signup" className="block text-sm px-2 py-4 hover:bg-blue-500 transition duration-300">Sign Up</Link></li>
            </>
          ) : (
            <li><button onClick={handleLogout} className="block w-full text-left text-sm px-2 py-4 hover:bg-blue-500 transition duration-300">Logout</button></li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
