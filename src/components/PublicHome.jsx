import { Link } from "react-router-dom";

const PublicHome = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-3xl font-bold mb-4">👋 Welcome to Our Projects Platform</h1>
      <p className="mb-6 text-gray-600">Login to submit and manage your projects.</p>
      <Link
        to="/login"
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        🔐 Login
      </Link>
    </div>
  );
};

export default PublicHome;
