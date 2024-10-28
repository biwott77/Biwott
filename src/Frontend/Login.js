import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/Login.css';

const Login = ({ onClose }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Login attempt:', formData);
  };

  const handleClose = (e) => {
    if (e) e.preventDefault();
    onClose();
  };

  return (
    <motion.div 
      className="login-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={handleClose}
    >
      <motion.div 
        className="login-modal"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -50, opacity: 0 }}
        onClick={e => e.stopPropagation()}
      >
        <div className="login-header">
          <h2>Welcome Back</h2>
          <p className="login-subtitle">Please enter your details</p>
          <button 
            className="login-close-button"
            onClick={handleClose}
            aria-label="Close"
          >
            X
          </button>
        </div>
        
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="login-form-group">
            <label htmlFor="email">Email</label>
            <div className="input-container">
              <input 
                type="email" 
                id="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required 
              />
            </div>
          </div>
          
          <div className="login-form-group">
            <label htmlFor="password">Password</label>
            <div className="input-container">
              <input 
                type={showPassword ? "text" : "password"}
                id="password" 
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required 
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <div className="login-options">
            <label className="remember-me">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>
            <button type="button" className="forgot-password">
              Forgot password?
            </button>
          </div>

          <button type="submit" className="login-submit">
            Sign in
          </button>

          <div className="login-footer">
            <p>Don't have an account? <button type="button" className="signup-link">Sign up</button></p>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default Login;
