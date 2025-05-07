import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './categories.css';
import productData from '../data/productData';

const Figurines = () =>  {
    const navigate = useNavigate();
    const figurinesData = productData.figurines;

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
                    <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M20 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M4 21v-2a4 4 0 0 1 3-3.87" />
                        <circle cx="12" cy="7" r="4" />
                    </svg>
                </div>
            </nav>
            <div className="product-section">
                <h2 className="section-heading">FIGURINES</h2>
                <div className="product-grid">
                    {figurinesData.map(product => (
                        <div 
                            key={product.id}
                            className="product-card" 
                            onClick={() => navigate(`/product/${product.id}`)}
                        >
                            <img src={product.image} alt={product.name} />
                            <h3>{product.name}</h3>
                            <p className="price">{product.price}</p>
                        </div>
                    ))}
                </div>
                <hr className="bottom-line" />
            </div>
            {/*Footer*/}
            <footer className="footer">
                <div className="footer-columns">
                    {/* Left Column */}
                    <div className="footer-column left-column">
                        <img src="/assets/logo.png" alt="Logo" className="footer-logo" />
                        <h3 className="footer-left">Follow Us</h3>
                        <div className="social-icons">
                            <img src="/assets/fb.png" alt="Facebook" />
                            <img src="/assets/ig.png" alt="Instagram" />
                            <img src="/assets/tt.png" alt="TikTok" />
                        </div>
                    </div>

                    {/* Right Columns Group */}
                    <div className="right-columns-group">
                        <div className="footer-column">
                            <h3 className="footer-heading">Customer Support</h3>
                            <ul>
                                <li>FAQs</li>
                                <li>+63 1234 5678</li>
                                <li>Track Order</li>
                                <li>Return Policy</li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h3 className="footer-heading">Explore</h3>
                            <ul>
                                <li>All Products</li>
                                <li>New Offers</li>
                                <li>About Us</li>
                                <li>Homepage</li>
                            </ul>
                        </div>
                        <div className="footer-column right-column">
                            <h3 className="footer-heading">Get More Updates</h3>
                            <p className="footer-sentence">Join us and receive updates on the best offers and new items!</p>
                            <form className="subscribe-form">
                                <div className="subscribe-wrapper">
                                    <input type="email" placeholder="Your email" />
                                    <button type="submit">I'm in</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <p className="footer-bottom">&copy; 2025 Anime&You. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Figurines;
