import React from 'react';
import { Link } from 'react-router-dom';
import './homepage.css';

export default function AboutUs() {
  return (
    <div className="app">
      <nav className="navbar">
            <div className="logo">
                <Link to="/home-page">
                    <img src="/assets/logo.png" alt="Brand Logo" />
                </Link>
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

      {/* About Us Section */}
      <div className="about-us">
        <h2>About Us</h2>
        <p>We are a company dedicated to offering high-quality merchandise for all fans of various anime and pop culture items. Our goal is to provide unique and exclusive items that cater to the needs of enthusiasts around the world.</p>
      </div>

      {/* FAQs Section */}
      <div className="faqs">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item">
          <h3>What products do you sell?</h3>
          <p>We sell a variety of products, including figurines, plushies, desktop items, clothing, and more, all related to your favorite anime and pop culture themes.</p>
        </div>
        <div className="faq-item">
          <h3>How can I track my order?</h3>
          <p>Once your order has shipped, you will receive a tracking number via email that can be used to track your package through the delivery service provider.</p>
        </div>
        <div className="faq-item">
          <h3>Do you offer international shipping?</h3>
          <p>Yes, we offer international shipping to most countries. Please check our shipping policy for more details.</p>
        </div>
        <div className="faq-item">
          <h3>How can I contact customer support?</h3>
          <p>You can reach us via email at support@animeandyou.com or through our contact page on the website. We're happy to assist with any inquiries or issues.</p>
        </div>
      </div>

            {/* Footer */}
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
