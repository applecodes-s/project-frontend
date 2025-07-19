import { Link } from "react-router-dom";

const PublicHome = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-3xl font-bold mb-4">👋 Welcome to Our Projects Platform</h1>
      <p className="mb-6 text-gray-600">Login to submit and manage your projects.</p>
      <div className="flex gap-4">
  <Link to="/login">
    <button className="px-4 py-2 bg-blue-500 text-white rounded">Login</button>
  </Link>
  <Link to="/signup">
    <button className="px-4 py-2 bg-green-500 text-white rounded">Signup</button>
  </Link>
</div>
    </div>
  );
};

export default PublicHome;
