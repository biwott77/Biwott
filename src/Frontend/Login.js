import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/Login.css';
import { Link } from 'react-router-dom';

const Login = ({ onClose, onSwitchToSignup }) => {
    useEffect(() => {
        document.body.classList.add('modal-open');
        return () => {
            document.body.classList.remove('modal-open');
        };
    }, []);

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    const handleForgotPassword = (e) => {
        e.preventDefault();
        console.log('Forgot password clicked');
    };

    return (
        <motion.div 
            className="login-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose} // Close modal when clicking outside
        >
            <motion.div 
                className="login-modal"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                onClick={e => e.stopPropagation()} // Prevent closing when clicking inside
            >
                <div className="login-header">
                    <h2>Welcome Back</h2>
                    <p className="login-subtitle">Please enter your details</p>
                    <button 
                        className="login-close-button"
                        onClick={onClose} // Close modal when "X" is clicked
                        aria-label="Close"
                    >
                        X
                    </button>
                </div>

                <form className="login-form">
                    <div className="login-form-group">
                        <label htmlFor="username">Username</label>
                        <input 
                            type="text"
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={(e) => setFormData({
                                ...formData,
                                username: e.target.value
                            })}
                            placeholder="Enter your username"
                            required
                        />
                    </div>

                    <div className="login-form-group">
                        <label htmlFor="password">Password</label>
                        <div className="password-input-wrapper">
                            <input 
                                type={showPassword ? "text" : "password"}
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={(e) => setFormData({
                                    ...formData,
                                    password: e.target.value
                                })}
                                placeholder="Enter your password"
                                required
                            />
                            <button
                                type="button"
                                className="password-toggle"
                                onClick={() => setShowPassword(!showPassword)}
                                aria-label={showPassword ? "Hide password" : "Show password"}
                            >
                                {showPassword ? '/' : '.'}
                            </button>
                        </div>
                    </div>

                    <div className="login-options">
                        <label className="remember-me">
                            <input 
                                type="checkbox"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                            />
                            <span>Remember me</span>
                        </label>
                        <button 
                            type="button" 
                            className="forgot-password"
                            onClick={handleForgotPassword}
                        >
                            Forgot password?
                        </button>
                    </div>

                    <button type="submit" className="login-submit">
                        Sign in
                    </button>

                    <div className="login-footer">
                        <p>
                            Don't have an account?{' '}
                            <button 
                                type="button" 
                                className="signup-link"
                                onClick={onSwitchToSignup}
                            >
                                <Link to="/signup" style={{color: 'aqua', fontSize: '13x'}}>Sign up</Link>
                            </button>
                        </p>
                    </div>
                </form>
            </motion.div>
        </motion.div>
    );
};

export default Login;