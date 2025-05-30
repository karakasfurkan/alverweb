import React, { useEffect } from 'react';
import { clearCart } from '../services/cartService'; 
import { Link } from 'react-router-dom';
import './ThankYouPage.css';

function ThankYouPage() {
  useEffect(() => {
    clearCart();
  }, []);

  return (
    <div className="thank-you-page">
      <h1>Teşekkür Ederiz!</h1>
      <p>Siparişiniz başarıyla alınmıştır.</p>
      <p>Kısa süre içinde siparişinizle ilgili detaylar e-posta adresinize gönderilecektir.</p>
      <Link to="/" className="back-to-home-button">Alışverişe Devam Et</Link>
    </div>
  );
}

export default ThankYouPage;