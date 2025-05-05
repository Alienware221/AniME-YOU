import React from 'react';
import { FaShoppingCart, FaHeart, FaCog, FaCreditCard, FaMapMarkerAlt } from 'react-icons/fa';
import './profile.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/">
          <img src="assets/logo.png" alt="Brand Logo" />
        </a>
      </div>
      <ul className="nav-links">
        <li>DESKTOP</li>
        <li>FIGURINES</li>
        <li>PLUSHIES</li>
        <li>CLOTHING</li>
        <li>VARIETIES</li>
      </ul>
      <div className="nav-icons">
        <FaShoppingCart className="icon" />
        <FaHeart className="icon" />
        <FaCog className="icon" />
        <FaCreditCard className="icon" />
        <FaMapMarkerAlt className="icon" />
      </div>
    </nav>
  );
};

const Profile = () => {
  return (
    <div className="profile-container">
      <Navbar />
      <div className="profile-main">
        <aside className="sidebar">
          <div className="profile-info">
            <div className="avatar-placeholder">👤</div>
            <h2>John Doe</h2>
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
            <div className="menu-item"><FaShoppingCart /> Orders</div>
            <div className="menu-item"><FaHeart /> Wishlist</div>
            <div className="menu-item"><FaCog /> Settings</div>
            <div className="menu-item"><FaCreditCard /> Payments</div>
            <div className="menu-item"><FaMapMarkerAlt /> Address</div>
          </nav>
        </aside>
        <div className="main-content">
          <div className="order-section">
            <h2>Completed Orders</h2>
            <div className="order-grid">
              {[
                { img: 'assets/narutofigure.jpg', name: 'Naruto Figurine', price: '₱799' },
                { img: 'assets/1pc.jpg', name: 'Luffy Figurine', price: '₱849' },
                { img: 'assets/lawmeow-one-piece.jpg', name: 'Lawmeow Plushie', price: '₱499' }
              ].map((item, index) => (
                <div className="order-card" key={index}>
                  <img src={item.img} alt={item.name} />
                  <h3>{item.name}</h3>
                  <p>{item.price}</p>
                  <FaShoppingCart className="cart-icon" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;