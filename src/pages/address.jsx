import React, { useState, useEffect } from 'react';
import { FaHeart, FaCog, FaCreditCard, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './profile.css';
import { useUser } from '../contexts/UserContext';


const Address = () => {
    const { user, updateUser, setUser } = useUser();
    const [formData, setFormData] = useState({
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        zip: '',
        country: '',
        telephone: '',
        fax: '',
        vatNumber: ''
    });

    useEffect(() => {
      const storedUser = JSON.parse(localStorage.getItem('user'));
  
      if (storedUser) {
          setUser(storedUser); // This can go here if the user doesn't change when the address is updated 
          setFormData({ ...storedUser.address }); 
      } else if (user && user.address) { // This condition won't change infinitely, so this logic will still be called once to initialize the form.
          setFormData({ ...user.address });
      }
  
  }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const updatedUser = { ...user, address: formData };
            await updateUser(updatedUser);
            localStorage.setItem('user', JSON.stringify(updatedUser)); // Update localStorage
        } catch (error) {
            console.error("Error updating address:", error);
            // TODO: Display error message to user.
        }
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
                        <h2>{user ? (user.firstName || user.name || 'Guest') : 'Guest'}</h2>{/* Dynamically render user's name or "Guest" */}
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
                            <label htmlFor="addressLine1">Address Line 1 *</label>
                            <input type="text" id="addressLine1" name="addressLine1" required value={formData.addressLine1} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="addressLine2">Address Line 2</label>
                            <input type="text" id="addressLine2" name="addressLine2" value={formData.addressLine2} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="city">City *</label>
                            <input type="text" id="city" name="city" required value={formData.city} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="state">State/Province</label>
                            <select id="state" name="state" value={formData.state} onChange={handleChange}>
                                <option value="">Select</option>
                                <option value="state1">State 1</option>
                                <option value="state2">State 2</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="zip">Zip/Postal Code *</label>
                            <input type="text" id="zip" name="zip" required value={formData.zip} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="country">Country *</label>
                            <select id="country" name="country" required value={formData.country} onChange={handleChange}>
                                <option value="">Select</option>
                                <option value="country1">Country 1</option>
                                <option value="country2">Country 2</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="telephone">Telephone *</label>
                            <input type="text" id="telephone" name="telephone" required value={formData.telephone} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="fax">Fax</label>
                            <input type="text" id="fax" name="fax" value={formData.fax} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="vatNumber">VAT Number</label>
                            <input type="text" id="vatNumber" name="vatNumber" value={formData.vatNumber} onChange={handleChange} />
                        </div>
                        <button type="submit" className="save-button">Save Address</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Address;
