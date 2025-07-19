import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

const Navbar = () => {
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem('token');
      localStorage.removeItem('username');
      navigate('/login');
    } catch (err) {
      console.error('Logout failed:', err);
    }
  };

  return (
    <nav className="bg-white shadow-md px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-blue-700">
          MyProject
        </Link>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={!isOpen ? "M4 6h16M4 12h16M4 18h16" : "M6 18L18 6M6 6l12 12"}
              />
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-sm sm:text-base">
          {!user ? (
            <>
              <Link to="/login" className="text-gray-700 hover:text-blue-700">
                Login
              </Link>
              <Link to="/signup" className="text-gray-700 hover:text-blue-700">
                Signup
              </Link>
            </>
          ) : (
            <>
              <span className="text-gray-800 font-medium">Hi, {user.displayName || user.email}</span>
              <Link to="/private" className="text-gray-700 hover:text-blue-700">
                Home
              </Link>
              <button onClick={handleLogout} className="text-red-600 hover:underline">
                Logout
              </button>
            </>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mt-4 md:hidden flex flex-col space-y-2">
          {!user ? (
            <>
              <Link to="/login" className="text-gray-700 hover:text-blue-700">
                Login
              </Link>
              <Link to="/signup" className="text-gray-700 hover:text-blue-700">
                Signup
              </Link>
            </>
          ) : (
            <>
              <span className="text-gray-800 font-medium">Hi, {user.displayName || user.email}</span>
              <Link to="/private" className="text-gray-700 hover:text-blue-700">
                Home
              </Link>
              <button onClick={handleLogout} className="text-red-600 hover:underline text-left">
                Logout
              </button>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
