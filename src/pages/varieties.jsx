import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './categories.css';
import productData from '../data/productData';

const Varieties = () =>  {
    const navigate = useNavigate();
    const varietiesData = productData.varieties;

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
                                 <li><Link to="/desktop/mousepad">Mousepads</Link></li>
                                 <li><Link to="/desktop/deskorganizers">Desk Organizers</Link></li>
                                 <li><Link to="/desktop/wallart">Wall Art</Link></li>
                                 <li><Link to="/desktop/desklamps">Desk Lamps</Link></li>
                                 <li><Link to="/desktop/coasters">Coasters</Link></li>
                               </ul>
                             </li>
                             <li>
                               <Link to="/figurines">FIGURINES</Link>
                               <ul className="dropdown-menu">
                                 <li><Link to="/figurines/figures">Scaled Figures</Link></li>
                                 <li><Link to="/figurines/nendoroids">Nendoroids</Link></li>
                                 <li><Link to="/figurines/acrylic">Acrylic Stands</Link></li>
                                 <li><Link to="/figurines/mini">Mini Figurines</Link></li>
                                 <li><Link to="/figurines/gacha">Gachapons</Link></li>
                               </ul>
                             </li>
                             <li>
                               <Link to="/plushies">PLUSHIES</Link>
                               <ul className="dropdown-menu">
                                 <li><Link to="/plushies/animal">Animal Plushies</Link></li>
                                 <li><Link to="/plushies/character">Character Plushies</Link></li>
                                 <li><Link to="/plushies/keychain">Keychain Plushies</Link></li>
                                 <li><Link to="/plushies/pillow">Pillow Plushies</Link></li>
                                 <li><Link to="/plushies/blanket">Blanket Plushies</Link></li>
                               </ul>
                             </li>
                             <li>
                               <Link to="/clothing">CLOTHING</Link>
                               <ul className="dropdown-menu">
                                 <li><Link to="/clothing/t-shirts">T-Shirts</Link></li>
                                 <li><Link to="/clothing/hoodies">Hoodies</Link></li>
                                 <li><Link to="/clothing/accessories">Accessories</Link></li>
                                 <li><Link to="/clothing/cosplay">Cosplays</Link></li>
                                 <li><Link to="/clothing/socks">Socks</Link></li>
                               </ul>
                             </li>
                             <li>
                               <Link to="/varieties">VARIETIES</Link>
                               <ul className="dropdown-menu">
                                 <li><Link to="/varieties/manga">Manga</Link></li>
                                 <li><Link to="/varieties/dvd">Anime DVDs and Blurays</Link></li>
                                 <li><Link to="/varieties/books">Art Books</Link></li>
                                 <li><Link to="/varieties/novels">Light Novels</Link></li>
                                 <li><Link to="/varieties/games">Videogames</Link></li>
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
            <div className="product-section">
                <h2 className="section-heading">VARIETIES</h2>
                <div className="product-grid">
                    {varietiesData.map(product => (
                        <div 
                            key={product.id}
                            className="product-card" 
                            onClick={() => navigate(`/product/${product.id}`)}
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

export default Varieties;