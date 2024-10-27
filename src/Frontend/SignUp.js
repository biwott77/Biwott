import React, { useState } from 'react';
import axios from 'axios';
import '../styles/SignUp.css';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMsg('');
        setSuccessMsg('');

        try {
            const response = await axios.post('http://localhost:9000/signup', {
                username,
                email,
                password,
                confirm_password: confirmPassword,
            });
            if (response.status === 200) {
                setSuccessMsg('Registration successful! Please log in.');
            }
        } catch (error) {
            setErrorMsg(error.response.data || 'An error occurred during signup.');
        }
    };

    return (
        <div>
            <h2>Signup</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                </div>
                <button type="submit">Sign Up</button>
            </form>
            {errorMsg && <p style={{ color: 'red' }}>{errorMsg}</p>}
            {successMsg && <p style={{ color: 'green' }}>{successMsg}</p>}
        </div>
    );
};

export default Signup;