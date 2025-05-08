import React, { useState, useEffect } from 'react';
import { FaShoppingCart, FaHeart, FaCog, FaCreditCard, FaMapMarkerAlt, FaPencilAlt } from 'react-icons/fa';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';
import './checkOut.css';

const Navbar = () => {
  return (
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
  );
};

const Checkout = () => {
  const location = useLocation();
  const [cartItems, setCartItems] = useState([]);
  
  useEffect(() => {
    // Get cart items from location state (passed when navigating from Cart.jsx)
    if (location.state && location.state.cartItems) {
      setCartItems(location.state.cartItems);
    }
  }, [location]);

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const shipping = 100;
  const merchandiseSubTotal = totalAmount;
  const shippingSubTotal = shipping;
  const totalPayment = merchandiseSubTotal + shippingSubTotal;

  return (
    <div className="container">
      <Navbar />
      <div className="subcontainer">
        <h2 className="title">CHECKOUT</h2>

        <table className="table">
          <thead>
            <tr>
              <th className="th"></th>
              <th className="th">Product</th>
              <th className="th">Quantity</th>
              <th className="th">Total</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.length > 0 ? (
              cartItems.map(item => (
                <tr key={item.id} className="tr">
                  <td className="tdimage">
                    <div className="productRow">
                      <img src={item.image} alt={item.name} className="image" />
                    </div>
                  </td>
                  <td className="tdnameprice">
                    <div>
                      <strong>{item.name}</strong>
                      <p>Price: ₱{item.price.toFixed(2)}</p>
                    </div>
                  </td>
                  <td className="td">
                    <span><span>x</span>{item.quantity}</span>
                  </td>
                  <td className="td">₱{(item.price * item.quantity).toFixed(2)}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" style={{textAlign: 'center', padding: '20px'}}>
                  No items in cart. Please add items before checking out.
                </td>
              </tr>
            )}
          </tbody>
        </table>

        <div className="detailsContainer">
          <div className="personalDetails">
            <h3>Personal Details</h3>
            <div className="subpersonalDetails">
              <p> {/*Removed inline styles, this will use default p tag styling from browser or any global CSS you may have, consider setting styles in checkOut.css if needed*/}
                John Cena, 09123456789, 123 Main Street, Quezon City, Metro Manila. {/* Replace with actual data fetching logic */}
              </p>
              <div className="arrowWrapper"> {/* Use Link component for navigation instead of button */}
                <Link to="/address" className="arrowButton"> {/* Link to your Address component */}
                  <MdKeyboardArrowRight size={24} />
                </Link>
              </div>
            </div>
          </div>

          <div className="paymentDetails">
            <h3>Payment Details</h3>

            <div className="paymentDetailRow">
              <span>Total Quantity:</span>
              <span>{totalQuantity} item(s)</span>
            </div>
            <div className="paymentDetailRow">
              <span>Merchandise Subtotal:</span>
              <span>₱{merchandiseSubTotal.toFixed(2)}</span>
            </div>
            <div className="paymentDetailRow">
              <span>Shipping Subtotal:</span>
              <span>₱{shippingSubTotal.toFixed(2)}</span>
            </div>
            <div className="paymentDetailRow">
              <strong>Estimated Total Payment:</strong>
              <strong>₱{totalPayment.toFixed(2)}</strong>
            </div>

            <div className="footer">
              <button className="checkout">Checkout</button> {/* Add onClick handler here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Checkout;