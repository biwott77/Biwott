import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/SignUp.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

// Updated API_URL to your Go API endpoint
const API_URL = 'https://back-cbgjbjaoz-mois-projects-2e2312ad.vercel.app';

const Signup = ({ onClose, onSwitchToLogin }) => {
    const navigate = useNavigate();

    useEffect(() => {
        document.body.classList.add('modal-open');
        return () => {
            document.body.classList.remove('modal-open');
        };
    }, []);

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        passwordConfirm: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccessMessage('');

        // Validate password match
        if (formData.password !== formData.passwordConfirm) {
            setError("Passwords don't match");
            return;
        }

        try {
            const response = await axios.post(`${API_URL}/api/signup`, {
                username: formData.username,
                email: formData.email,
                password: formData.password,
                passwordConfirm: formData.passwordConfirm
            }, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (response.status === 201) {
                setSuccessMessage('Registration successful! Redirecting to login...');
                
                // Clear form
                setFormData({
                    username: '',
                    email: '',
                    password: '',
                    passwordConfirm: ''
                });

                // Wait 2 seconds then redirect
                setTimeout(() => {
                    if (onSwitchToLogin) {
                        onSwitchToLogin(); // If using modal switching
                    } else {
                        navigate('/login'); // If using route navigation
                    }
                }, 2000);
            }
        } catch (err) {
            setError(err.response?.data?.error || 'Registration failed. Please try again.');
            setTimeout(() => setError(''), 5000); // Clear error after 5 seconds
        }
    };

    return (
        <motion.div 
            className="login-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
        >
            {error && <div className="error-msg">{error}</div>}
            {successMessage && <div className="success-msg">{successMessage}</div>}

            <motion.div 
                className="login-modal"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                onClick={e => e.stopPropagation()}
            >
                <div className="login-header">
                    <h2>Create an Account</h2>
                    <p className="login-subtitle">Please fill in your details</p>
                    <button 
                        className="login-close-button"
                        onClick={onClose}
                        aria-label="Close"
                    >
                        X
                    </button>
                </div>

                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="login-form-group">
                        <label htmlFor="username">Username</label>
                        <input 
                            type="text"
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                            placeholder="Enter your username"
                            required
                        />
                    </div>

                    <div className="login-form-group">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="Enter your email"
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
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                placeholder="Enter your password"
                                required
                            />
                            <button
                                type="button"
                                className="password-toggle"
                                onClick={() => setShowPassword(!showPassword)}
                                aria-label={showPassword ? "Hide password" : "Show password"}
                            >
                                {showPassword ? '🙈' : '👁️'}
                            </button>
                        </div>
                    </div>

                    <div className="login-form-group">
                        <label htmlFor="passwordConfirm">Confirm Password</label>
                        <div className="password-input-wrapper">
                            <input 
                                type={showPassword ? "text" : "password"}
                                id="passwordConfirm"
                                name="passwordConfirm"
                                value={formData.passwordConfirm}
                                onChange={(e) => setFormData({ ...formData, passwordConfirm: e.target.value })}
                                placeholder="Confirm your password"
                                required
                            />
                            <button
                                type="button"
                                className="password-toggle"
                                onClick={() => setShowPassword(!showPassword)}
                                aria-label={showPassword ? "Hide password" : "Show password"}
                            >
                                {showPassword ? '🙈' : '👁️'}
                            </button>
                        </div>
                    </div>

                    <button type="submit" className="login-submit">
                        Sign Up
                    </button>
                    <div className="login-footer">
                        <p>
                            Already have an account?{' '}
                            <button 
                                type="button" 
                                className="signup-link"
                                onClick={onSwitchToLogin}
                            >
                                <Link to="/login" style={{ color: 'aqua', fontSize: '13px' }}>Sign In</Link>
                            </button>
                        </p>
                    </div>
                </form>
            </motion.div>
        </motion.div>
    );
};

export default Signup;
