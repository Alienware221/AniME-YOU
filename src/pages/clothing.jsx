import React, { useState, useEffect } from 'react'; // Import hooks from React
import { useNavigate, Link } from 'react-router-dom';
import './categories.css';

const Clothing = () => {
    const navigate = useNavigate();
    const [clothingData, setClothingData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const loadProducts = async () => {
            try {
                setLoading(true);
                // Use the direct fetch approach
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
                
                // Filter only clothing products
                const clothingProducts = products.filter(product => 
                    product.category === 'clothing'
                );
                
                console.log('Clothing products:', clothingProducts);
                setClothingData(clothingProducts);
            } catch (err) {
                console.error('Failed to fetch clothing products:', err);
                setError('Failed to load products. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        loadProducts();
    }, []);

   return (
           <div className="app">
            <div className="product-section">
                <h2 className="section-heading">CLOTHING</h2>
                
                {loading && <p className="loading">Loading products...</p>}
                {error && <p className="error-message">{error}</p>}
                
                <div className="product-grid">
                    {clothingData.map(product => (
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
        </div>
    );
};

export default Clothing;
