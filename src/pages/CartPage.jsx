import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { getCartItems, removeFromCart, clearCart } from '../services/cartService';
import './CartPage.css'; 

function CartPage() {
  const [cartItems, setCartItems] = useState([]); 
  const navigate = useNavigate();

  
  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  
  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId); 
    setCartItems(getCartItems()); 
    alert('Ürün sepetten çıkarıldı.');
  };

  // Sepeti temizleme fonksiyonu
  const handleClearCart = () => {
    if (window.confirm('Sepeti tamamen temizlemek istediğinize emin misiniz?')) {
      clearCart(); 
      setCartItems([]); 
      alert('Sepet temizlendi.');
    }
  };

  // Ödeme yapma fonksiyonu
  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert('Sepetinizde ürün bulunmamaktadır.');
      return;
    }
    navigate('/thank-you'); 
  };

  // Sepet toplamını hesaplama
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <h1>Sepetim</h1>
      {cartItems.length === 0 ? (
        <p>Sepetinizde ürün bulunmamaktadır.</p>
      ) : (
        <>
          <div className="cart-items-list">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.imageUrl} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>Adet: {item.quantity}</p>
                  <p>Fiyat: {item.price} TL</p>
                  <p>Toplam: {item.price * item.quantity} TL</p>
                  <button onClick={() => handleRemoveFromCart(item.id)} className="remove-button">
                    Sepetten Çıkar
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h2>Genel Toplam: {total.toFixed(2)} TL</h2>
            <button onClick={handleClearCart} className="clear-cart-button">
              Sepeti Temizle
            </button>
            <button onClick={handleCheckout} className="checkout-button">
              Ödeme Yap
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default CartPage;