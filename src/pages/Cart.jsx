import { Link, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { FaShoppingBag } from 'react-icons/fa';
import './Cart.css';
import { useCart } from '../contexts/CartContext';

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

const Cart = () => {
  // Replace your useState with the useCart hook
  const navigate = useNavigate();
  const { cart, removeFromCart, updateQuantity } = useCart();
  
  // New state to track checked items
  const [checkedItems, setCheckedItems] = useState(
    cart.reduce((acc, item) => {
      acc[item.id] = true;
      return acc;
    }, {})
  );

  useEffect(() => {
    setCheckedItems(prev => {
      const updated = {...prev};
      cart.forEach(item => {
        if (updated[item.id] === undefined) {
          updated[item.id] = true;
        }
      });
      return updated;
    });
  }, [cart]);

  const handleCheckout = () => {
    const itemsToCheckout = cart.filter(item => checkedItems[item.id]);
    navigate('/checkout', { state: { cartItems: itemsToCheckout } });
  };
  
  const toggleCheck = (id) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const totalAmount = cart.reduce(
    (sum, item) => (checkedItems[item.id] ? sum + item.price * item.quantity : sum),
    0
  );

  return (
    <div className="container">
        <Navbar />
        <div className="subcontainer">
            <h2 className="title">YOUR CART</h2>

            {cart.length === 0 ? (
              <div className="empty-cart">
                <p>Your cart is empty.</p>
                <Link to="/home-page">
                  <button className="continue-shopping">
                    <FaShoppingBag style={{ marginRight: '10px' }} /> Continue Shopping
                  </button>
                </Link>
              </div>
            ) : (
              <>
                <table className="table">
                    <thead>
                        <tr>
                            <th className="th"></th> {/* Checkbox */}
                            <th className="th"></th> {/* Image */}
                            <th className="th">Product</th>
                            <th className="th">Quantity</th>
                            <th className="th">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map(item => (
                            <tr key={item.id} className="tr">
                                <td className="tdcheckbox">
                                    <div className="productRow">
                                        <input
                                            type="checkbox"
                                            checked={checkedItems[item.id] || false}
                                            onChange={() => toggleCheck(item.id)}
                                            className="checkbox"
                                        />
                                    </div>
                                </td>
                                <td className="td">
                                    <div className="productRow">
                                        <img src={item.image} alt={item.name} className="image" />
                                    </div>
                                </td>
                                <td className="td">
                                    <div>
                                        <strong>{item.name}</strong>
                                        <p>Price: ₱{item.price.toFixed(2)}</p>
                                    </div>
                                </td>
                                <td className="td">
                                    <div className="quantityControl">
                                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="qtyBtn">−</button>
                                        <span className="qtyValue">{item.quantity}</span>
                                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="qtyBtn">＋</button>
                                    </div>
                                </td>
                                <td className="td">₱{(item.price * item.quantity).toFixed(2)}</td>
                                <td>
                                    <button onClick={() => removeFromCart(item.id)} className="remove-btn">✕</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="footer">
                    <p className="total">Estimated Total: ₱{totalAmount.toFixed(2)}</p>
                    <button 
                        onClick={handleCheckout} 
                        className="checkout">
                        Checkout
                    </button>
                </div>

              </>
            )}
        </div>
    </div>
  );
};

export default Cart;
