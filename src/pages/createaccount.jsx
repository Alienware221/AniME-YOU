import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';

const CreateAccount = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[\W_]).{8,}$/;

    if (!formData.firstName) newErrors.firstName = "First Name is required.";
    if (!formData.lastName) newErrors.lastName = "Last Name is required.";
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (!passwordRegex.test(formData.password)) {
      newErrors.password = "Password must be at least 8 characters long, include at least one letter, one number, and one symbol.";
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }
    if (!formData.phoneNumber) newErrors.phoneNumber = "Phone Number is required.";

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    if (window.confirm("Registration successful! Would you like to go to the homepage?")) {
      // navigate('/home'); COMMENTED FOR NOW
    }
  };

  const renderInput = (name, type, placeholder) => (
    <>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={formData[name]}
        onChange={handleChange}
      />
      {errors[name] && <span className="error">{errors[name]}</span>}
    </>
  );

  return (
    <div className="login-container">
      <img src="/assets/anime-logo.png" alt="Side Logo" className="background-logo" />
      <div className="login-box">
        <div className="login-left">
          <h2>CREATE ACCOUNT</h2>
          <form onSubmit={handleSubmit}>
            {renderInput('firstName', 'text', 'First Name')}
            {renderInput('lastName', 'text', 'Last Name')}
            {renderInput('email', 'email', 'Email')}
            {renderInput('password', 'password', 'Password')}
            {renderInput('confirmPassword', 'password', 'Confirm Password')}
            {renderInput('phoneNumber', 'tel', 'Phone Number')}
            <button type="submit" className="sign-in">REGISTER</button>
          </form>
          <div className="back-to-login">
            <Link to="/" className="auth-link">Back to Login</Link>
          </div>
        </div>
        <div className="login-right">
          <img src="/assets/logo.png" alt="Logo" className="logo-image" />
          <img src="/assets/anime-slogan.png" alt="Slogan" className="slogan-image" />
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
