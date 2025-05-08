import React, { useState } from 'react';
import { FaShoppingCart, FaHeart, FaCog, FaCreditCard, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './profile.css'; // Ensure this path is correct
import { useUser } from '../contexts/UserContext';

const Payment = () => {
  const { user } = useUser();
  const [methods, setMethods] = useState([
  ]);

  const [newCard, setNewCard] = useState({
    type: '', // Must initialize type here!
    fullName: '',
    email: '',
    cardNumber: '',
    expMonth: '',
    expYear: '',
    cvv: '',
    zipCode: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCard({ ...newCard, [name]: value });
  };

  const handleAddCard = (e) => {
    e.preventDefault();

    // Create a formatted number string.  Replace this with your actual formatting logic!
    const formattedCardNumber = `**** **** **** ${newCard.cardNumber.slice(-4)}`;

    // Create new method object with consistent properties
    const newMethod = { 
        id: Date.now(), 
        type: newCard.type, 
        number: formattedCardNumber, 
        owner: newCard.fullName // Or derive owner as needed
    };

    setMethods([...methods, newMethod]);
    setNewCard({ // Reset newCard
        type: '', // Reset type too
        fullName: '',
        email: '',
        cardNumber: '',
        expMonth: '',
        expYear: '',
        cvv: '',
        zipCode: ''
    });
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
          <h2>Payment Methods</h2>

          <div className="payment-methods">
            {methods.map(method => (
              <div key={method.id} className="method-item">
                <span>{method.type} - {method.number} ({method.owner})</span>
                <button onClick={() => setMethods(methods.filter(m => m.id !== method.id))}>Remove</button>
              </div>
            ))}
          </div>

          <h3>Add New Payment Method</h3>
          <form className="payment-form" onSubmit={handleAddCard}>
            <div className="form-group">
                <label htmlFor="type">Card Type:</label>
                <select 
                      id="type" 
                      name="type" 
                      value={newCard.type} 
                      onChange={handleChange} 
                      required
                >
                    <option value="">Select Card Type</option> {/* Default Empty Option */}
                    <option value="Visa">Visa</option>
                    <option value="MasterCard">MasterCard</option>
                    <option value="American Express">American Express</option>
                </select>
            </div>
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input type="text" id="fullName" name="fullName" value={newCard.fullName} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" value={newCard.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="cardNumber">Card Number</label>
              <input type="text" id="cardNumber" name="cardNumber" value={newCard.cardNumber} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="expMonth">Exp Month (MM)</label>
              <input type="text" id="expMonth" name="expMonth" value={newCard.expMonth} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="expYear">Exp Year (YYYY)</label>
              <input type="text" id="expYear" name="expYear" value={newCard.expYear} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="cvv">CVV</label>
              <input type="text" id="cvv" name="cvv" value={newCard.cvv} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="zipCode">Zip Code</label>
              <input type="text" id="zipCode" name="zipCode" value={newCard.zipCode} onChange={handleChange} required />
            </div>
            <button type="submit" className="add-card-button">Add Card</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Payment;
