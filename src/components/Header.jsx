import React, { useState, useEffect } from 'react'; 
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { getCartItems } from '../services/cartService';
import './Header.css';

function Header() {
  const { isLoggedIn, user, logout } = useAuth();
  const [cartItemCount, setCartItemCount] = useState(0); 

  // Sepet öğesi sayısını güncellemek için bir fonksiyondurr
  const updateCartCount = () => {
    const items = getCartItems();
    const count = items.reduce((total, item) => total + item.quantity, 0);
    setCartItemCount(count);
  };

  // Bileşen yüklendiğinde ve her sepet değiştiğinde sepet sayısını günceller
  useEffect(() => {
    updateCartCount(); 

    const handleStorageChange = () => {
      updateCartCount();
    };
    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return (
    <header className="header">
      <nav className="nav-links">
        <Link to="/">Ana Sayfa</Link>
        <Link to="/about">Hakkımızda</Link>
        <Link to="/contact">İletişim</Link>
        <Link to="/cart" className="cart-link">
          Sepetim ({cartItemCount})
        </Link>
      </nav>
      <div className="auth-status">
        {isLoggedIn ? (
          <>
            <span>Hoşgeldin, <strong>{user?.username}</strong>!</span>
            <button onClick={logout} className="logout-button">Çıkış Yap</button>
          </>
        ) : (
          <Link to="/login" className="login-button">Giriş Yap</Link>
        )}
      </div>
    </header>
  );
}

export default Header;