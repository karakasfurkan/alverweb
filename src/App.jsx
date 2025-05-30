import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductDetailPage from './pages/ProductDetailPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import CartPage from './pages/CartPage';
import ThankYouPage from './pages/ThankYouPage'; 
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/thank-you" element={<ThankYouPage />} />
          </Routes>
        </main>
        <Footer />
      </AuthProvider>
    </Router>
  );
}

export default App;