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
import './App.css';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home-page" element={<Homepage />} />
                <Route path="/create-account" element={<CreateAccount />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/desktop" element={<Desktop />} />
                <Route path="/clothing" element={<Clothing />} />
                <Route path="/figurines" element={<Figurines />} />
                <Route path="/plushies" element={<Plushies />} />
                <Route path="/varieties" element={<Varieties />} />
            </Routes>
        </Router>
    );
};

export default App;
