import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import CreateAccount from './pages/createaccount';
import ForgotPassword from './pages/forgotpassword';
import Homepage from './pages/homepage';
import Profile from './pages/profile';
import Desktop from './pages/desktop';
import Clothing from './pages/clothing';
import Figurines from './pages/figurines';
import Plushies from './pages/plushies';
import Varieties from './pages/varieties';
import ProductPage from './pages/ProductPage';
import Address from './pages/address';
import Wishlist from './pages/wishlist';
import Settings from './pages/settings';
import Payment from './pages/payment';
import Checkout from './pages/checkOut';
import Cart from './pages/Cart';
import SubcategoryPage from './pages/SubcategoryPage';
import AboutFAQs from './pages/AboutFAQs';
import { UserProvider } from './contexts/UserContext';
import ProtectedRoute from './components/ProtectedRoute';
import { CartProvider } from './contexts/CartContext';
import AdminDashboard from './components/AdminDashboard';
import './App.css';

const App = () => {
    return (
        <UserProvider>
            <CartProvider> 
            <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home-page" element={
                        <ProtectedRoute>
                            <Homepage />
                        </ProtectedRoute>
                    } />
                <Route path="/create-account" element={<CreateAccount />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/profile" element={
                        <ProtectedRoute>
                            <Profile />
                        </ProtectedRoute>
                    } />
                <Route path="/desktop" element={<ProtectedRoute><Desktop /></ProtectedRoute>} />
                <Route path="/clothing" element={<ProtectedRoute><Clothing /></ProtectedRoute>} />
                <Route path="/figurines" element={<ProtectedRoute><Figurines /></ProtectedRoute>} />
                <Route path="/plushies" element={<ProtectedRoute><Plushies /></ProtectedRoute>} />
                <Route path="/varieties" element={<ProtectedRoute><Varieties /></ProtectedRoute>} />
                <Route path="/product/:productId" element={<ProtectedRoute><ProductPage /></ProtectedRoute>} />
                <Route path="/address" element={<ProtectedRoute><Address /></ProtectedRoute>} />
                <Route path="/wishlist" element={<ProtectedRoute><Wishlist /></ProtectedRoute>} />
                <Route path="/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
                <Route path="/payments" element={<ProtectedRoute><Payment /></ProtectedRoute>} />
                <Route path="/checkOut" element={<ProtectedRoute><Checkout /></ProtectedRoute>} />
                <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
                <Route path="/:category/:subcategory" element={<ProtectedRoute><SubcategoryPage /></ProtectedRoute>} />
                <Route path="/about-faqs" element={<ProtectedRoute><AboutFAQs /></ProtectedRoute>} />
                <Route path="/admin" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />

            </Routes>
        </Router>
            </CartProvider>
            
        </UserProvider>
    );
};

export default App;
