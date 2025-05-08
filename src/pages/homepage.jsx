import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './homepage.css';
import productData from '../data/productData'; // Import the product data

const Homepage = () => {
  const banners = ['/assets/Banner 2.png', '/assets/Banner 3.png', '/assets/Banner 4.png', '/assets/Banner 5.png'];
  const [current, setCurrent] = useState(0);
  const [showDisclaimer, setShowDisclaimer] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [banners.length]);

  if (showDisclaimer) {
    return (
      <div className="disclaimer-overlay">
        <div className="disclaimer-box">
          <img src="/assets/logo.png" alt="Logo" className="disclaimer-logo" />
          <h6 className="disclaimer-header">Disclaimer!</h6>
          <p className="disclaimer-text">This is for educational purposes only.</p>
          <button className="disclaimer-button" onClick={() => setShowDisclaimer(false)}>Proceed</button>
        </div>
      </div>
    );
  }

  const renderProductSection = (title, products) => {
    
    return (
      <div className={`product-section ${title.toLowerCase()}-section`}>
        <h2>{title.toUpperCase()} ──────────────────────────────────</h2>
        <div className="product-list">
          {products.map((product, index) => (
            <div 
              className="product-card" 
              key={index}
              onClick={() => navigate(`/product/${product.id}`)} // Use this exact path format
            >
              <img src={product.image} alt={product.alt} />
              <p className="product-name">{product.name}</p>
              <p className="product-subtitle">{product.subtitle}</p>
              <p className="price">₱{product.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
        <Link to={`/${title.toLowerCase()}`} className="view-all">View All</Link>
      </div>
    );
  };  
  

  return (
    <div className="app">
        <nav className="navbar">
            <div className="logo">
                <img src="/assets/logo.png" alt="Brand Logo" />
            </div>
            <ul className="nav-links">
              <li>
                <Link to="/desktop">DESKTOP</Link>
                <ul className="dropdown-menu">
                  <li><Link to="/desktop/mousepad">Mousepad</Link></li>
                  <li><Link to="/desktop/stationeries">Stationer</Link></li>
                  <li><Link to="/desktop/mousepads">Mousepads</Link></li>
                </ul>
              </li>
              <li>
                <Link to="/figurines">FIGURINES</Link>
                <ul className="dropdown-menu">
                  <li><Link to="/figurines/anime">Anime Figurines</Link></li>
                  <li><Link to="/figurines/movie">Movie Characters</Link></li>
                  <li><Link to="/figurines/limited">Limited Editions</Link></li>
                </ul>
              </li>
              <li>
                <Link to="/plushies">PLUSHIES</Link>
                <ul className="dropdown-menu">
                  <li><Link to="/plushies/animal">Animal Plushies</Link></li>
                  <li><Link to="/plushies/character">Character Plushies</Link></li>
                  <li><Link to="/plushies/collectable">Collectable Plushies</Link></li>
                </ul>
              </li>
              <li>
                <Link to="/clothing">CLOTHING</Link>
                <ul className="dropdown-menu">
                  <li><Link to="/clothing/t-shirts">T-Shirts</Link></li>
                  <li><Link to="/clothing/hoodies">Hoodies</Link></li>
                  <li><Link to="/clothing/accessories">Accessories</Link></li>
                </ul>
              </li>
              <li>
                <Link to="/varieties">VARIETIES</Link>
                <ul className="dropdown-menu">
                  <li><Link to="/varieties/mousepads">Mousepads</Link></li>
                  <li><Link to="/varieties/gaming-accessories">Gaming Accessories</Link></li>
                  <li><Link to="/varieties/collectibles">Collectibles</Link></li>
                </ul>
              </li>
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

      {/* Carousel */}
      <div className="carousel">
        <img src={banners[current]} alt={`Banner ${current + 1}`} />
      </div>

      {Object.entries(productData).map(([title, products]) => renderProductSection(title, products))}

      {/* Footer */}
      <footer className="footer">
        <div className="footer-columns">
          {/* Left Column */}
          <div className="footer-column left-column">
            <img src="/assets/logo.png" alt="Logo" className="footer-logo" />
            <div className="social-links">
              <h3 className="footer-left">Follow Us</h3>
              <div className="social-icons">
                <img src="/assets/fb.png" alt="Facebook" />
                <img src="/assets/ig.png" alt="Instagram" />
                <img src="/assets/tt.png" alt="TikTok" />
              </div>
            </div>
          </div>

          {/* Right Column */}
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
                <li><Link to="/about-faqs">About Us</Link></li>
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

export default Homepage;
