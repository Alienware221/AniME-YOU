import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './homepage.css';

const Homepage = () => {
  const banners = ['/assets/Banner 2.png', '/assets/Banner 3.png', '/assets/Banner 4.png', '/assets/Banner 5.png'];
  const [current, setCurrent] = useState(0);
  const [showDisclaimer, setShowDisclaimer] = useState(true);

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

  const renderProductSection = (title, products) => (
    <div className={`product-section ${title.toLowerCase()}-section`}>
      <h2>{title} ──────────────────────────────────</h2>
      <div className="product-list">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <img src={product.image} alt={product.alt} />
            <p className="product-title">{product.title}</p>
            <p className="product-subtitle">{product.subtitle}</p>
            <p className="product-price">Price: {product.price}</p>
          </div>
        ))}
      </div>
      <button className="view-all">View All</button>
    </div>
  );

  const productsData = {
    DESKTOP: [
      { image: '/assets/penholder2.jpg', alt: 'Totobo Pen Holder', title: 'Totobo Pen Holder', subtitle: 'Ghiblok Studio', price: '₱250' },
      { image: '/assets/mousepad1.jpg', alt: 'Nagik Deskmat', title: 'Nagik Deskmat', subtitle: 'Blue Block', price: '₱300' },
      { image: '/assets/nb4.jpg', alt: 'Mikasasa Notebook', title: 'Mikasasa Notebook', subtitle: 'Attack on Simplicio', price: '₱150' },
      { image: '/assets/penholder1.jpg', alt: 'Giga Chad Pen Holder', title: 'Giga Chad Pen Holder', subtitle: 'Attack on Dwaine', price: '₱200' },
      { image: '/assets/mousepad6.jpg', alt: 'Gengare Deskmat', title: 'Gengare Deskmat', subtitle: 'Pokermon', price: '₱400' },
    ],
    FIGURINES: [
      { image: '/assets/figure10.jpg', alt: 'Itacho Figurine', title: 'Itacho Figurine', subtitle: 'Nauto', price: '₱950' },
      { image: '/assets/figure3.jpg', alt: 'Demon Lover Figurine', title: 'Demon Lover Figurine', subtitle: 'Demon Lover', price: '₱1,200' },
      { image: '/assets/figure11.jpg', alt: 'Naku Figurine', title: 'Naku Figurine', subtitle: 'Fairy the Platypus', price: '₱1,050' },
      { image: '/assets/figure12.jpg', alt: 'Remmy Figurine', title: 'Remmy Figurine', subtitle: 'Re: One', price: '₱980' },
      { image: '/assets/figure4.jpg', alt: 'Sabura Figurine', title: 'Sabura Figurine', subtitle: 'Narito', price: '₱990' },
    ],
    PLUSHIES: [
      { image: '/assets/plush3.jpg', alt: 'Picante Plush', title: 'Picante Plush', subtitle: 'Taco', price: '₱400' },
      { image: '/assets/plush11.jpg', alt: 'Gengare Plush', title: 'Gengare Plush', subtitle: 'Pokermon', price: '₱450' },
      { image: '/assets/plush10.jpg', alt: 'Bonito Plush', title: 'Bonito Plush', subtitle: 'Jujubsu Kraizen', price: '₱400' },
      { image: '/assets/plush7.jpg', alt: 'Flyhigh Plush', title: 'Flyhigh Plush', subtitle: 'Haiyaa', price: '₱350' },
      { image: '/assets/plush12.jpg', alt: 'Bombardilo Plush', title: 'Bombardilo Plush', subtitle: 'Pokermon', price: '₱450' },
    ],
    CLOTHING: [
      { image: '/assets/clothing8.jpg', alt: 'Akina Jacket', title: 'Akina Jacket', subtitle: 'Akina', price: '₱1,200' },
      { image: '/assets/clothing4.jpg', alt: 'Evangeline Sweater', title: 'Evangeline Sweater', subtitle: 'Evangeline', price: '₱850' },
      { image: '/assets/clothing11.jpg', alt: 'Niloko Pants', title: 'Niloko Pants', subtitle: 'Nauto', price: '₱1,400' },
      { image: '/assets/clothing5.jpg', alt: 'Evangeline Long-sleeve Polo', title: 'Evangeline Long-sleeve Polo', subtitle: 'Evangeline', price: '₱900' },
      { image: '/assets/clothing7.jpg', alt: 'Phantom Tropa Hoodie', title: 'Phantom Tropa Hoodie', subtitle: 'HunterxHunger', price: '₱1,250' },
    ],
    VARIETIES: [
      { image: '/assets/key2.jpg', alt: 'JK Keychain', title: 'JK Keychain', subtitle: 'JK Lang', price: '₱100' },
      { image: '/assets/pin2.jpg', alt: 'Demon Lover Pin', title: 'Demon Lover Pin', subtitle: 'Demon Lover', price: '₱70' },
      { image: '/assets/poster5.jpg', alt: 'Akina Poster', title: 'Akina Poster', subtitle: 'Akina', price: '₱300' },
      { image: '/assets/key3.jpg', alt: 'Chain Slayer Keychain', title: 'Chain Slayer Keychain', subtitle: 'Chain Slayer', price: '₱100' },
      { image: '/assets/poster4.jpg', alt: 'Di Pinili Poster', title: 'Di Pinili Poster', subtitle: 'Two Piece', price: '₱300' },
    ],
  };

  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">
          <img src="/assets/logo.png" alt="Brand Logo" />
        </div>
        <ul className="nav-links">
          <li>DESKTOP</li>
          <li>FIGURINES</li>
          <li>PLUSHIES</li>
          <li>CLOTHING</li>
          <li>VARIETIES</li>
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

      {/* Carousel */}
      <div className="carousel">
        <img src={banners[current]} alt={`Banner ${current + 1}`} />
      </div>

      {Object.entries(productsData).map(([title, products]) => renderProductSection(title, products))}

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

export default Homepage;
