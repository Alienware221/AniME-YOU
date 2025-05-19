// src/components/NavBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';
import { FaShoppingCart, FaUser, FaSignInAlt, FaTachometerAlt } from 'react-icons/fa';

const NavBar = () => {
  const { user, isAdmin, isGuest } = useUser();

  return (
    <nav className="navigation">
      <div className="nav-left">
        <Link to="/home-page" className="logo">AnimeYou</Link>
        <Link to="/desktop">Desktop</Link>
        <Link to="/clothing">Clothing</Link>
        <Link to="/figurines">Figurines</Link>
        <Link to="/plushies">Plushies</Link>
        <Link to="/varieties">Varieties</Link>
      </div>
      
      <div className="nav-right">
        {isAdmin() && (
          <Link to="/admin" className="nav-icon">
            <FaTachometerAlt />
            <span>Admin</span>
          </Link>
        )}
        
        {!isGuest() && (
          <Link to="/cart" className="nav-icon">
            <FaShoppingCart />
            <span>Cart</span>
          </Link>
        )}
        
        {isGuest() ? (
          <Link to="/" className="nav-icon">
            <FaSignInAlt />
            <span>Sign In</span>
          </Link>
        ) : (
          <Link to="/profile" className="nav-icon">
            <FaUser />
            <span>Profile</span>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
