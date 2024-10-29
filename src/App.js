import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from './Frontend/Navbar';
import Login from './Frontend/Login';
import SignUp from './Frontend/SignUp';
import HomePage from "./Frontend/Home";
import AboutPage from "./Frontend/About";
import ProjectsPage from "./Frontend/Projects";
import ContactPage from "./Frontend/Contact";
import Footer from "./Frontend/Footer";
import './styles/App.css';

function App() {
  const location = useLocation();
  const [showLogin, setShowLogin] = useState(false);

  const handleCloseLogin = () => {
    console.log('Closing login modal'); // Debug log
    setShowLogin(false);
  };

  const handleOpenLogin = () => {
    console.log('Opening login modal'); // Debug log
    setShowLogin(true);
  };

  return (
    <>
      <Navbar onLoginClick={handleOpenLogin} />
      <Routes location={location}>
        <Route
          path="/"
          element={
            <AnimatePresence mode="wait">
              <HomePage key="home" />
            </AnimatePresence>
          }
        />
        <Route
          path="/about"
          element={
            <AnimatePresence mode="wait">
              <AboutPage key="about" />
            </AnimatePresence>
          }
        />
        <Route
          path="/projects"
          element={
            <AnimatePresence mode="wait">
              <ProjectsPage key="projects" />
            </AnimatePresence>
          }
        />
        <Route
          path="/login"
          element={
            <AnimatePresence mode="wait">
              {showLogin && <Login key="login" onClose={handleCloseLogin} />}
            </AnimatePresence>
          }
        />
        <Route
          path="/signup"
          element={
            <AnimatePresence mode="wait">
              <SignUp key="signup" />
            </AnimatePresence>
          }
        />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
