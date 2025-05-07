import React, { useState } from 'react';
import { FaShoppingCart, FaHeart, FaCog, FaCreditCard, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './profile.css'; // Ensure this path is correct

const Address = () => {
  const [address, setAddress] = useState({
    prefix: '',
    firstName: '',
    middleName: '',
    lastName: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    postalCode: '',
    country: '',
    telephone: '',
    fax: '',
    vatNumber: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress({ ...address, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(address);
  };

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
        
          
            <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
          
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
            <h2>digong</h2>
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
          <h2>Manage Addresses</h2>
          <form onSubmit={handleSubmit} className="address-form">
            <div className="form-group">
              <label htmlFor="prefix">Prefix</label>
              <input type="text" id="prefix" name="prefix" value={address.prefix} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="firstName">First Name *</label>
              <input type="text" id="firstName" name="firstName" required value={address.firstName} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="middleName">Middle Name</label>
              <input type="text" id="middleName" name="middleName" value={address.middleName} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name *</label>
              <input type="text" id="lastName" name="lastName" required value={address.lastName} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="addressLine1">Address Line 1 *</label>
              <input type="text" id="addressLine1" name="addressLine1" required value={address.addressLine1} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="addressLine2">Address Line 2</label>
              <input type="text" id="addressLine2" name="addressLine2" value={address.addressLine2} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="city">City *</label>
              <input type="text" id="city" name="city" required value={address.city} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="state">State/Province</label>
              <select id="state" name="state" value={address.state} onChange={handleChange}>
                <option value="">Select</option>
                <option value="state1">State 1</option>
                <option value="state2">State 2</option>
                {/* Add more states as needed */}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="postalCode">Zip/Postal Code *</label>
              <input type="text" id="postalCode" name="postalCode" required value={address.postalCode} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="country">Country *</label>
              <select id="country" name="country" required value={address.country} onChange={handleChange}>
                <option value="">Select</option>
                <option value="country1">Country 1</option>
                <option value="country2">Country 2</option>
                {/* Add more countries as needed */}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="telephone">Telephone *</label>
              <input type="text" id="telephone" name="telephone" required value={address.telephone} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="fax">Fax</label>
              <input type="text" id="fax" name="fax" value={address.fax} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="vatNumber">VAT Number</label>
              <input type="text" id="vatNumber" name="vatNumber" value={address.vatNumber} onChange={handleChange} />
            </div>
            <button type="submit" className="save-button">Save Address</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Address;