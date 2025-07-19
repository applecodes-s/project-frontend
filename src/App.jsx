import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./components/Auth/Signup";
import Login from "./components/Auth/Login";
import Navbar from "./components/Navbar";

import SubmitProject from './pages/SubmitProject';
import ProtectedRoute from './components/ProtectedRoute';
import PrivateHome from './components/PrivateHome';
import ProjectList from './pages/ProjectList'
import EditProject from './pages/EditProject';
import ProjectDetails from './pages/ProjectDetails';
import { Toaster } from 'react-hot-toast';


function App() {
  return (
   
    <Router>
      <Navbar />
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/projects" element={<ProjectList />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />

        <Route
          path="/submit"
          element={
          
              <SubmitProject />
          }
        />
        <Route
  path="/private"
  element={
      <PrivateHome />
  }
/>
<Route path="/edit/:id" element={<EditProject />} />

      </Routes>
    </Router>
    
  );
}

export default App;
