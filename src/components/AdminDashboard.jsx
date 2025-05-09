// AdminDashboard.jsx
import React, { useState, useEffect } from 'react';
import './AdminDashboard.css';

const CATEGORIES = [
  'Desktop',
  'Clothing',
  'Figurines',
  'Plushies',
  'Varieties'
];

const SUBCATEGORIES = {
  'Desktop': ['Mousepads', 'Desk Organizers', 'Wall Art', 'Desk Lamps', 'Coasters'],
  'Clothing': ['T-Shirts', 'Hoodies', 'Accessories', 'Cosplay', 'Socks'],
  'Figurines': ['Scaled Figures', 'Nendoroids', 'Acrylic Stands', 'Mini Figurines', 'Gachapons'],
  'Plushies': ['Animal Plushies', 'Character Plushies', 'Keychain Plushies', 'Pillow Plushies', 'Blanket Plushies'],
  'Varieties': ['Manga', 'Anime DVDs and Blurays', 'Art Books', 'Light Novels', 'Videogames']
};

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    subcategory: '',
    image: null,
    countInStock: ''
  });
  const [isEditing, setIsEditing] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [tableKey, setTableKey] = useState(0); // Add this state for forcing table re-render

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://anime-you-one.vercel.app/';
      const response = await fetch(`${API_URL}/api/admin/products`);
      if (!response.ok) throw new Error('Failed to fetch products');
      
      const data = await response.json();
      console.log("Fetched products:", data);
      setProducts(data);
      setTableKey(prevKey => prevKey + 1); // Increment key to force re-render
      setLoading(false);
    } catch (error) {
      console.error('Error fetching products:', error);
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    
    if (name === 'image' && files.length > 0) {
      // For file inputs
      const file = files[0];
      setFormData({
        ...formData,
        [name]: file
      });
      
      // Create preview URL
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else if (name === 'category') {
      // When category changes, reset subcategory
      setFormData({
        ...formData,
        [name]: value,
        subcategory: '' // Reset subcategory when category changes
      });
    } else {
      // For other inputs
      setFormData({
        ...formData,
        [name]: name === 'price' || name === 'countInStock' ? parseFloat(value) : value
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const url = isEditing 
        ? `http://localhost:5000/api/admin/products/${currentProduct._id}`
        : 'http://localhost:5000/api/admin/products';
      
      const method = isEditing ? 'PUT' : 'POST';
      
      // Create FormData object to handle file uploads
      const productData = new FormData();
      productData.append('name', formData.name);
      productData.append('description', formData.description);
      productData.append('price', formData.price);
      productData.append('category', formData.category.toLowerCase());
      productData.append('subcategory', formData.subcategory.toLowerCase());
      productData.append('countInStock', formData.countInStock);
      
      // Only append image if it's a new file (not a URL string)
      if (formData.image instanceof File) {
        productData.append('image', formData.image);
      } else if (isEditing && formData.image) {
        // When editing, pass the existing image URL if no new file selected
        productData.append('imageUrl', formData.image);
      }
      
      console.log("Submitting form data:", {
        name: formData.name,
        description: formData.description,
        price: formData.price,
        category: formData.category.toLowerCase(),
        subcategory: formData.subcategory.toLowerCase(),
        countInStock: formData.countInStock
      });
      
      const response = await fetch(url, {
        method,
        // Don't set Content-Type header, let the browser set it with the boundary
        body: productData
      });

      if (!response.ok) throw new Error(`Failed to ${isEditing ? 'update' : 'create'} product`);
      
      console.log("Product updated successfully, refreshing data");
      
      // Reset form and refresh products
      resetForm();
      await fetchProducts(); // Wait for products to be fetched
      
    } catch (error) {
      console.error('Error saving product:', error);
    }
  };

  const handleEdit = (product) => {
    console.log("Editing product:", product);
    setCurrentProduct(product);
    setFormData({
      name: product.name,
      description: product.description,
      price: product.price,
      category: product.category,
      subcategory: product.subcategory || '',
      image: product.image,
      countInStock: product.countInStock || 0
    });
    setImagePreview(product.image);
    setIsEditing(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this product?')) return;
    
    try {
      const response = await fetch(`http://localhost:5000/api/admin/products/${id}`, {
        method: 'DELETE'
      });

      if (!response.ok) throw new Error('Failed to delete product');
      
      fetchProducts();
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      description: '',
      price: '',
      category: '',
      subcategory: '',
      image: null,
      countInStock: ''
    });
    setImagePreview(null)
    setCurrentProduct(null);
    setIsEditing(false);
  };

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      
      <div className="admin-container">
        <div className="product-form-container">
          <h2>{isEditing ? 'Edit Product' : 'Add New Product'}</h2>
          <form onSubmit={handleSubmit} className="product-form">
            <div className="form-group">
              <label htmlFor="name">Product Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="price">Price</label>
              <input
                type="number"
                id="price"
                name="price"
                step="0.01"
                value={formData.price}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="category">Category</label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                required
              >
                <option value="" disabled>Select a category</option>
                {CATEGORIES.map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="subcategory">Subcategory</label>
              <select
                id="subcategory"
                name="subcategory"
                value={formData.subcategory || ''}
                onChange={handleInputChange}
                required
                disabled={!formData.category}
              >
                <option value="" disabled>Select a subcategory</option>
                {formData.category && SUBCATEGORIES[formData.category] ? 
                  SUBCATEGORIES[formData.category].map(subcategory => (
                    <option key={subcategory} value={subcategory}>
                      {subcategory}
                    </option>
                  )) : null
                }
              </select>
            </div>


            <div className="form-group">
              <label htmlFor="image">Product Image</label>
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                onChange={handleInputChange}
                required={!isEditing}
              />
              {imagePreview && (
                <div className="image-preview">
                  <img src={imagePreview} alt="Preview" />
                </div>
              )}
            </div>

            
            <div className="form-group">
              <label htmlFor="countInStock">Count In Stock</label>
              <input
                type="number"
                id="countInStock"
                name="countInStock"
                value={formData.countInStock}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="form-buttons">
              <button type="submit" className="btn-submit">
                {isEditing ? 'Update Product' : 'Add Product'}
              </button>
              {isEditing && (
                <button type="button" className="btn-cancel" onClick={resetForm}>
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>
        
        <div className="products-list-container">
          <h2>Product List</h2>
          <div className="products-list">
            <table key={tableKey}>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Subcategory</th>
                  <th>Price</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {products && products.length > 0 ? (
                  products.map(product => (
                    <tr key={product._id}>
                      <td>
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="product-thumbnail" 
                        />
                      </td>
                      <td>{product.name}</td>
                      <td>{product.category}</td>
                      <td>{product.subcategory}</td>
                      <td>₱{product.price.toFixed(2)}</td>
                      <td className="actions">
                        <button 
                          className="btn-edit" 
                          onClick={() => handleEdit(product)}
                        >
                          Edit
                        </button>
                        <button 
                          className="btn-delete" 
                          onClick={() => handleDelete(product._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="no-products">No products found</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

console.log('AdminDashboard loaded');
export default AdminDashboard;