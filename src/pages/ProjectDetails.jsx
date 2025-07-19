import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';


const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);


  const handleDelete = async () => {
    const confirm = window.confirm("Are you sure you want to delete this project?");
    if (!confirm) return;

    try {
      await axios.delete(`https://project-backend-kwo0.onrender.com/api/projects/${id}`);
      alert("Project deleted successfully");
      navigate('/projects'); // redirect to project list
    } catch (error) {
      console.error('Delete error:', error);
      alert("Failed to delete project");
    }
  };

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await axios.get(`https://project-backend-kwo0.onrender.com/api/projects/${id}`);
        setProject(res.data);
      } catch (error) {
        console.error('Error fetching project:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!project) return <p className="text-center mt-10 text-red-600">Project not found.</p>;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <div className="bg-white rounded-xl shadow-lg max-w-2xl w-full p-8">
  <h2 className="text-2xl font-bold text-gray-800 mb-2">{project.title}</h2>
  <p className="text-gray-600 mb-4">{project.description}</p>


<div className="mb-2">
  <span className="font-semibold text-gray-700">Tags:</span> {project.tags?.join(', ')}
</div>


  <div className="flex gap-4 mt-4">
    <a href={project.github} className="text-blue-600 hover:underline">GitHub</a>
    <a
  href={project.liveDemo}
  target="_blank"
  rel="noopener noreferrer"
  className="text-blue-600 underline"
>
  View Live Demo
</a>  </div>

  

      </div>
    </div>
  );
};

export default ProjectDetails;
