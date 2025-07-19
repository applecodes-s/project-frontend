import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PrivateHome = () => {
  const { user } = useAuth(); // ✅ Correct: inside the component

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-100 flex items-center justify-center px-4">
      <div className="max-w-4xl w-full bg-white/70 backdrop-blur-md shadow-xl rounded-2xl p-10 flex flex-col md:flex-row items-center gap-8">
        
        {/* Left Text Section */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Welcome back, <span className="text-blue-700">{user?.displayName || "Guest"} 👋</span>
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Ready to manage your next amazing project?
          </p>

          <div className="flex justify-center md:justify-start gap-4">
            <Link
              to="/submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
            >
              + Create Project
            </Link>

            <Link
              to="/projects"
              className="bg-gray-800 text-white px-6 py-3 rounded-xl hover:bg-gray-900 transition"
            >
              📋 View Projects
            </Link>
          </div>
        </div>

        {/* Right Hero Illustration */}
        <div className="flex-1">
          <img
            src="./public/hero.svg"
            alt="Dashboard Hero"
            className="w-full max-w-sm mx-auto"
          />
        </div> 
      </div>
    </div>
  );
};

export default PrivateHome;
