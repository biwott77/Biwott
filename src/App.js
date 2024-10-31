import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation, Navigate, useNavigate } from "react-router-dom";
import Navbar from './api/Navbar';
import Login from './api/Login';
import SignUp from './api/SignUp';
import HomePage from "./api/Home";
import AboutPage from "./api/About";
import ProjectsPage from "./api/Projects";
import ContactPage from "./api/Contact";
import Footer from "./api/Footer";
import './styles/App.css';

function App() {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userInfoStr = localStorage.getItem('userInfo');
    if (token && userInfoStr) {
      setIsLoggedIn(true);
      setUserInfo(JSON.parse(userInfoStr));
    }
  }, []);

  // Protected Route component
  const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem('token');
    if (!token) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  const handleClose = () => {
    navigate('/');
  };

  return (
    <>
      <Navbar 
        isLoggedIn={isLoggedIn}
        userInfo={userInfo}
      />
      <div className="main-content">
        <Routes location={location} key={location.pathname}>
          {/* Public routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login onClose={handleClose} />} />
          <Route path="/signup" element={<SignUp onClose={handleClose} />} />
          
          {/* Protected routes */}
          <Route path="/about" element={
            <ProtectedRoute>
              <AboutPage />
            </ProtectedRoute>
          } />
          <Route path="/projects" element={
            <ProtectedRoute>
              <ProjectsPage />
            </ProtectedRoute>
          } />
          <Route path="/contact" element={
            <ProtectedRoute>
              <ContactPage />
            </ProtectedRoute>
          } />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
