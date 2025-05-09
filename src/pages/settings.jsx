// [settings.jsx](file:///C:\Users\inoninja\AniME-YOU-NEW\src\pages\settings.jsx)
import React from 'react';
import { FaShoppingCart, FaHeart, FaCog, FaCreditCard, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './profile.css'; // Ensure this path is correct
import { useUser } from '../contexts/UserContext';

const Settings = () => {
  const { user } = useUser();
  return (
          <div className="app">
            <nav className="navbar">
              <div className="logo">
                    <Link to="/home-page">
                        <img src="/assets/logo.png" alt="Brand Logo" />
                    </Link>
                </div>
                <ul className="nav-links">
                    <li><Link to="/desktop">DESKTOP</Link></li>
                    <li><Link to="/figurines">FIGURINES</Link></li>
                    <li><Link to="/plushies">PLUSHIES</Link></li>
                    <li><Link to="/clothing">CLOTHING</Link></li>
                    <li><Link to="/varieties">VARIETIES</Link></li>
                </ul>
              <div className="nav-icons">
        {/* Icons */}
          <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
      
        
          <Link to="/cart">
            <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
          </Link>
        
        <Link to="/profile">
          <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <path d="M20 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M4 21v-2a4 4 0 0 1 3-3.87" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </Link>
      </div>
            </nav>
      <div className="profile-main">
        <aside className="sidebar">
          <div className="profile-info">
            <div className="avatar-placeholder">👤</div>
            <h2>{user ? (user.firstName || user.name || 'Guest') : 'Guest'}</h2>
            <div className="profile-stats">
              <p>
                Coupons: <span className="clickable-stat">56</span>
              </p>
              <p>
                Reviews: <span className="clickable-stat">350</span>
              </p>
            </div>
          </div>
          <nav className="menu-list">
           
            <Link to="/wishlist" className="menu-item"><FaHeart /> Wishlist</Link>
            <Link to="/settings" className="menu-item"><FaCog /> Settings</Link>
            <Link to="/payments" className="menu-item"><FaCreditCard /> Payments</Link>
            <Link to="/address" className="menu-item"><FaMapMarkerAlt /> Address</Link>
          </nav>
        </aside>
        <div className="main-content">
          <h2>Account Settings</h2>
          <form className="settings-form">
          <div className="form-group">
  <label htmlFor="username">Username</label>
  <input type="text" id="username" placeholder="Username" defaultValue={user ? user.username : ""} /> {/* Use user.username if available */}
</div>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Your Name" defaultValue={user ? (user.firstName || user.name) : ""} /> {/* Use user.firstName or user.name */}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Email" defaultValue={user ? user.email : ""} /> {/* Use user.email */}

            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="text" id="phone" placeholder="Phone Number" defaultValue={user ? user.phoneNumber : ""} /> {/* Use user.phoneNumber */}
            </div>
            {/* ... other form groups */}
            <button type="submit" className="save-button">Save Changes</button> {/* Save button added */}
           </form>
        </div>
      </div>
    </div>
  );
};

export default Settings;
