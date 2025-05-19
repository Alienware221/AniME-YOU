import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';
import './Login.css';

const Login = () => {
    const navigate = useNavigate();
    // Call useUser at the top level of your component
    const { login, continueAsGuest } = useUser(); // Get continueAsGuest from useUser hook
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    
    if (email && password) {
        try {
            // Connect to your backend to authenticate
            const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://animeyoubackend.onrender.com';
            const response = await fetch(`${API_URL}/api/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password })
            });
            
            if (!response.ok) {
                throw new Error('Login failed');
            }
            
            // Get the full user data including role from your server
            const userData = await response.json();
            login(userData);
            
            // Redirect admin users to admin dashboard, others to home page
            if (userData.role === 'admin') {
                navigate('/admin');
            } else {
                navigate('/home-page');
            }
        } catch (error) {
            setError('Invalid email or password. Please try again.');
            console.error('Login error:', error);
        }
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
                        
                        {/* Replace the existing sign-in button with these login options */}
                        <div className="login-options">
                            <button type="submit" className="sign-in">Sign In</button>
                            
                        </div>
                        
                        <div className="create-account">
                            <Link to="/create-account" className="auth-link create-account-btn">
                                Create Account
                            </Link>
                            <a 
                             href="#" 
                            className="auth-link" 
                            onClick={(e) => {
                                 e.preventDefault();
                                  continueAsGuest();
                                  navigate('/home-page');
                            }}
                      >
                             Continue as Guest
                    </a>
                            
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
