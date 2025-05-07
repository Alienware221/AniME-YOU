import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getProductById } from '../data/productData';
import './categories.css'; // Reusing your existing CSS

// Helper function to normalize image paths
const normalizeImagePath = (path) => {
  if (!path) return '';
  // Ensure path starts with a slash
  return path.startsWith('/') ? path : `/${path}`;
};

const ProductPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const product = getProductById(productId);
  
  if (!product) {
    return (
      <div className="not-found-container">
        <h2>Product Not Found</h2>
        <p>The product you're looking for doesn't exist or has been removed.</p>
        <button onClick={() => navigate('/home-page')}>Return to Homepage</button>
      </div>
    );
  }
  
  // Normalize the image path
  const imagePath = normalizeImagePath(product.image);
  
  return (
    <div className="app">
      {/* Navbar - Matching the structure from your categories pages */}
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
          {/* Icons - Using the same SVG icons as in your categories pages */}
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

      {/* Product Details Section */}
      <div className="product-section">
        <div className="product-detail-container">
          <div className="product-image-container">
            <img 
              src={imagePath} 
              alt={product.name} 
              className="product-detail-image" 
              onError={(e) => {
                console.error("Failed to load image:", imagePath);
                e.target.src = "/assets/placeholder.jpg"; // Fallback image
              }}
            />
          </div>
          <div className="product-info">
            <h1 className="product-name">{product.name}</h1>
            <p className="price">{product.price}</p>
            <div className="rating-container">
              <span className="rating-text">Rating: {product.rating}/5</span>
            </div>
            <p className="product-description">{product.description}</p>
            
            <div className="product-meta">
              <p>Category: <span>{product.category}</span></p>
              <p>In Stock: <span>{product.inStock ? "Yes" : "No"}</span></p>
            </div>
            
            <div className="product-actions">
              <button className="add-to-cart-btn">Add to Cart</button>
            </div>
          </div>
        </div>
        
        {/* Related Products Section */}
        <h2 className="section-heading">You May Also Like</h2>
        <div className="product-grid">
          {/* Map through related products here */}
        </div>
        <hr className="bottom-line" />
      </div>

      {/* Footer - Using the exact same structure as in your categories pages */}
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

export default ProductPage;
