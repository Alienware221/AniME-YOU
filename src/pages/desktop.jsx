import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './categories.css';
import { fetchProductsByCategory } from '../services/productService';

const Desktop = () => {
    const navigate = useNavigate();
    const [desktopData, setDesktopData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
    const loadProducts = async () => {
        try {
            setLoading(true);
            // Use the direct fetch approach that works in your homepage
            const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://animeyoubackend.onrender.com';
            
            // Get user and token from localStorage
            const user = JSON.parse(localStorage.getItem('user'));
            const token = user ? user.token : null;
            
            // Include the token in your request headers
            const response = await fetch(`${API_URL}/api/admin/products`, {
              headers: {
                'Authorization': `Bearer ${token}`
              }
            });
            
            if (!response.ok) {
                throw new Error('Failed to fetch products');
            }
            
            const products = await response.json();
            console.log('All products:', products);
            
            // Filter only desktop products
            const desktopProducts = products.filter(product => 
                product.category === 'desktop'
            );
            
            console.log('Desktop products:', desktopProducts);
            setDesktopData(desktopProducts);
        } catch (err) {
            console.error('Failed to fetch desktop products:', err);
            setError('Failed to load products. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

        loadProducts();
    }, []);


    if (loading) {
        return <div className="loading">Loading...</div>;
    }

    if (error) {
        return <div className="error-message">{error}</div>;
    }

    return (
           <div className="app">
            <div className="product-section">
                <h2 className="section-heading">DESKTOP</h2>
                <div className="product-grid">
                    {desktopData.map(product => (
                        <div 
                            key={product._id || product.id} // Use _id if that's what your MongoDB uses
                            className="product-card" 
                            onClick={() => navigate(`/product/${product._id || product.id}`)}
                        >
                            <img src={product.image} alt={product.name} />
                            <h3>{product.name}</h3>
                            <p className="price">₱{product.price.toFixed(2)}</p>
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

export default Desktop;
