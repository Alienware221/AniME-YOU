import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './categories.css';

const Figurines = () => {
    const navigate = useNavigate();
    const [figurinesData, setFigurinesData] = useState([]);
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
                
                // Filter only figurine products
                const figurineProducts = products.filter(product => 
                    product.category === 'figurines'
                );
                
                console.log('Figurine products:', figurineProducts);
                setFigurinesData(figurineProducts);
            } catch (err) {
                console.error('Failed to fetch figurine products:', err);
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
                <h2 className="section-heading">FIGURINES</h2>
                <div className="product-grid">
                    {figurinesData.map(product => (
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

export default Figurines;
