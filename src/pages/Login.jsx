import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';
import './Login.css';

const Login = () => {
    const navigate = useNavigate();
    const { login } = useUser();
    const [error, setError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        if (email && password) {
            // Create a user object with the data you want to store
            const userData = {
                email,
                name: email.split('@')[0], // Example: extract name from email
                isLoggedIn: true,
                lastLogin: new Date().toISOString()
            };
            
            login(userData);
            navigate('/home-page');
        } else {
            setError('Please enter both email and password');
        }
    };

    return (
        <div className="login-container">
            <img
                src="/assets/anime-logo.png"
                alt="Side Logo"
                className="background-logo"
            />

            <div className="login-box">
                <div className="login-left">
                    <h2>LOGIN</h2>
                    {error && <p className="error-message">{error}</p>}
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="Email" required />
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" placeholder="Password" required />
                        <div className="forgot">
                            <Link to="/forgot-password" className="auth-link forgot-password">
                                Forgot Password?
                            </Link>
                        </div>
                        <button type="submit" className="sign-in">SIGN IN</button>
                        <div className="create-account">
                            <Link to="/create-account" className="auth-link create-account-btn">
                                Create Account
                            </Link>
                        </div>
                    </form>
                </div>
                <div className="login-right">
                    <img src="/assets/logo.png" alt="Logo" className="logo-image" />
                    <img src="/assets/anime-slogan.png" alt="Slogan" className="slogan-image" />
                </div>
            </div>
        </div>
    );
};

export default Login;