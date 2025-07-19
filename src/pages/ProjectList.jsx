import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';


function ProjectList() {
  const [projects, setProjects] = useState([]);

  const fetchProjects = async () => {
    try {
      const res = await axios.get('https://project-backend-kwo0.onrender.com/api/projects');
      setProjects(res.data);
    } catch (err) {
      console.error('Error fetching projects:', err);
    }
  };

  const deleteProject = async (id) => {
    try {
      await axios.delete(`https://project-backend-kwo0.onrender.com/api/projects/${id}`);
      setProjects(prev => prev.filter(p => p._id !== id));
    } catch (err) {
      console.error('Error deleting project:', err);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this project?");
    if (!confirmDelete) return;
  
    try {
      await axios.delete(`https://project-backend-kwo0.onrender.com/api/projects/${id}`);
      toast.success('Project deleted successfully!');
      setProjects(projects.filter(p => p._id !== id));
    } catch (err) {
      console.error(err);
      toast.error('Failed to delete project');
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">All Projects</h2>

      {projects.length === 0 ? (
        <p className="text-center text-gray-500">No projects found</p>
      ) : (
        <ul className="space-y-6">
          {projects.map(project => (
            <li key={project._id} className="bg-white rounded-xl shadow p-6 border">
              <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
              <p className="text-gray-600 mt-2">{project.description}</p>

              <div className="mt-4 flex space-x-4">
              <Link to={`/projects/${project._id}`} className="text-blue-600 hover:underline">
  View Details
</Link>

              <Link to={`/edit/${project._id}`}>
  <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
    ✏️ Edit
  </button>
</Link>
<button
        onClick={() => handleDelete(project._id)}
        className="bg-red-500 text-white px-3 py-1 rounded"
      >
        Delete
      </button>
                <Link to="/" className="text-blue-600 hover:underline mt-4 block text-center">
  ← Submit another project
</Link>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProjectList;
