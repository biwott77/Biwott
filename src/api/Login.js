import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/Login.css';
import { Link, useNavigate } from 'react-router-dom';

const Login = ({ onClose, onSwitchToSignup }) => {
    const navigate = useNavigate();

    useEffect(() => {
        document.body.classList.add('modal-open');
        return () => {
            document.body.classList.remove('modal-open');
        };
    }, []);

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        setSuccessMessage('');

        // Simulate a successful login for demonstration
        if (formData.email && formData.password) {
            localStorage.setItem('token', 'dummy-token');
            localStorage.setItem('userInfo', JSON.stringify({
                username: 'DemoUser',
                email: formData.email,
                role: 'user'
            }));

            setSuccessMessage('Login successful! Redirecting to homepage...');

            setTimeout(() => {
                onClose();
                navigate('/'); // Redirect to homepage
            }, 2000);
        } else {
            setError('Please enter valid credentials.');
        }
    };

    const handleClose = () => {
        navigate('/');
        if (onClose) onClose();
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
                    <h2>Welcome Back</h2>
                    <p className="login-subtitle">Please login to your account</p>
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
                        <input 
                            type="email"
                            id="email"
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

                    <button type="submit" className="login-submit">
                        Login
                    </button>

                    <div className="login-footer">
                        <p>
                            Don't have an account?{' '}
                            <button 
                                type="button" 
                                className="signup-link"
                                onClick={onSwitchToSignup}
                            >
                                <Link to="/signup" style={{ color: 'aqua', fontSize: '13px' }}>Sign Up</Link>
                            </button>
                        </p>
                    </div>
                </form>
            </motion.div>
        </motion.div>
    );
};

export default Login;
