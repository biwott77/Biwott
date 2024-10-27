import React from "react";
import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from './Frontend/Navbar';
import HomePage from "./Frontend/Home";
import AboutPage from "./Frontend/About";
import ProjectsPage from "./Frontend/Projects";
import ContactPage from "./Frontend/Contact";
import Footer from "./Frontend/Footer";
import './styles/App.css';

function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />
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
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
