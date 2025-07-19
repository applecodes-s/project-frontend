import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';


const SubmitProject = () => {
  const navigate = useNavigate();

  const [project, setProject] = useState({
    title: '',
    description: '',
    tags: '',
    github: '',
    liveDemo: '',
  });

  const handleChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formattedProject = {
      ...project,
      tags: project.tags.split(',').map(tag => tag.trim()), 
    };
    try {
      await axios.post('https://project-backend-kwo0.onrender.com/api/projects', formattedProject);
      toast.success("Project created successfully!");
      navigate('/projects');
    } catch (err) {
      toast.error("Failed to create project");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">📤 Submit New Project</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="title"
            value={project.title}
            onChange={handleChange}
            placeholder="Project Title"
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            name="description"
            value={project.description}
            onChange={handleChange}
            placeholder="Project Description"
            required
            rows={4}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="text"
            name="tags"
            value={project.tags}
            onChange={handleChange}
            placeholder="Tags (comma-separated)"
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="url"
            name="github"
            value={project.github}
            onChange={handleChange}
            placeholder="GitHub Repository Link"
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="url"
            name="liveDemo"
            value={project.liveDemo}
            onChange={handleChange}
            placeholder="Live Demo Link (optional)"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-md transition"
          >
            ✅ Submit Project
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubmitProject;
