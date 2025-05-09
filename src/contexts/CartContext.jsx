// CartContext.jsx
import React, { createContext, useState, useContext } from 'react';

// Add export here
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const updateQuantity = (productId, newQuantity) => {
        // If quantity becomes zero or negative, remove the item
        if (newQuantity <= 0) {
          removeFromCart(productId);
          return;
        }
        
        // Update the cart state using your cart state setter
        setCart(prevCart => 
          prevCart.map(item => 
            item.id === productId ? {...item, quantity: newQuantity} : item
          )
        );
      };

    const addToCart = (product, quantity) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.id === product.id);
            if (existingItem) {
                return prevCart.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            } else {
                return [...prevCart, { ...product, quantity }];
            }
        });
    };

    const removeFromCart = (productId) => {
        setCart(prevCart => prevCart.filter(item => item.id !== productId));
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, updateQuantity }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
