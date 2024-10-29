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
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isSignupOpen, setSignupOpen] = useState(false);

  const handleLoginOpen = () => {
    setLoginOpen(true);
  };

  const handleSignupOpen = () => {
    setSignupOpen(true);
  };

  const handleClose = () => {
    setLoginOpen(false);
    setSignupOpen(false);
  };

  return (
    <>
      <Navbar onLoginClick={handleLoginOpen} onSignupClick={handleSignupOpen} />
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
              {isLoginOpen && <Login key="login" onClose={handleClose} onSwitchToSignup={handleSignupOpen} />}
            </AnimatePresence>
          }
        />
        <Route
          path="/signup"
          element={
            <AnimatePresence mode="wait">
              {isSignupOpen && <SignUp key="signup" onClose={handleClose}  onSwitchToLogin={handleLoginOpen}/>}
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
