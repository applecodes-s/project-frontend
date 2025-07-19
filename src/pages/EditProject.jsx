import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';


const EditProject = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    technologies: '',
    github: '',
    demo: '',
  });

  const [loading, setLoading] = useState(true);

  // Fetch existing project details
  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await axios.get(`https://project-backend-kwo0.onrender.com/api/projects/${id}`);
        const data = response.data;
        setFormData({
          title: data.title || '',
          description: data.description || '',
          technologies: data.technologies || '',
          github: data.github || '',
          demo: data.demo || '',
        });
        setLoading(false);
      } catch (err) {
        console.error('Error fetching project:', err);
      }
    };

    fetchProject();
  }, [id]);

  // Handle input change
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`https://project-backend-kwo0.onrender.com/api/projects/${id}`, formData);
      if (res.status === 200) {
        toast.success("Project updated successfully!");
        navigate('/projects'); // Redirect to project list
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to update project");
    }
  };

  if (loading) return <div className="p-10 text-gray-600">Loading...</div>;

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 px-4">
      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-xl p-10 w-full max-w-xl">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">✏️ Edit Project</h2>

        <input
          type="text"
          name="title"
          placeholder="Project Title"
          value={formData.title}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 border rounded-md"
        />

        <textarea
          name="description"
          placeholder="Project Description"
          value={formData.description}
          onChange={handleChange}
          rows="4"
          className="w-full mb-4 px-4 py-2 border rounded-md"
        ></textarea>

        <input
          type="text"
          name="technologies"
          placeholder="Technologies Used"
          value={formData.technologies}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 border rounded-md"
        />

        <input
          type="url"
          name="github"
          placeholder="GitHub URL"
          value={formData.github}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 border rounded-md"
        />

        <input
          type="url"
          name="demo"
          placeholder="Live Demo URL"
          value={formData.demo}
          onChange={handleChange}
          className="w-full mb-6 px-4 py-2 border rounded-md"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          💾 Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditProject;
