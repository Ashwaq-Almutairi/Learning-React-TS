import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar.tsx';
import ProductListPage from './ProductListPage.tsx';
import ProductDetails from './ProductDetails.tsx';
import CartPage from './CartPage.tsx';
import Checkout from './Checkout.tsx';
import type { Unit } from './ProductCard.tsx';
type CartItem = {
  unit: Unit;
  quantity: number;
};

export default function App() {
const [cartItems, setCartItems] = useState<CartItem[]>([]);

const handleAddToCart = (unit: Unit) => {
  setCartItems(prev => {
    const existing = prev.find(item => item.unit.id === unit.id);
    if (existing) {
      return prev.map(item =>
        item.unit.id === unit.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      return [...prev, { unit, quantity: 1 }];
    }
  });
};

const handleRemoveFromCart = (id: number) => {
  setCartItems(prev => prev.filter(item => item.unit.id !== id));
};

  return (
   
    <Router>
      <Navbar cartCount={cartItems.length} />
      <Routes>
        <Route path="/" element={<ProductListPage onAddToCart={handleAddToCart} />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<CartPage cartItems={cartItems} onRemove={handleRemoveFromCart} />} />
        <Route path="/checkout" element={<Checkout/>} />
      </Routes>
    </Router>
   
  );
}
