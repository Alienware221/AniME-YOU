import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const confirmed = window.confirm("Login successful! Would you like to go to the homepage?");
    if (confirmed) {
       navigate('/home-page'); 
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
