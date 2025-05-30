import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products.json';
import { addToCart } from '../services/cartService';

function ProductDetailPage() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);

  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (product) {
      document.title = `${product.name} Detayı - Alışveriş Sitesi`;
    } else {
      document.title = 'Ürün Detayı - Alışveriş Sitesi';
    }
  }, [product]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
      alert(`${quantity} adet ${product.name} sepete eklendi!`);
    }
  };

  if (!product) {
    return <div>Ürün bulunamadı.</div>;
  }

  return (
    <div className="product-detail-page">
      <h1>{product.name}</h1>
      <img src={product.imageUrl} alt={product.name} style={{ maxWidth: '300px', height: 'auto' }} />
      <p>Fiyat: {product.price} TL</p>
      <p>Açıklama: {product.description}</p>

      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '20px' }}>
        <button onClick={() => setQuantity(prev => Math.max(1, prev - 1))} style={{ padding: '8px 12px' }}>-</button>                                                                                                                                                                                                                                     
        <span>{quantity}</span>
        <button onClick={() => setQuantity(prev => prev + 1)} style={{ padding: '8px 12px' }}>+</button>
        <button onClick={handleAddToCart} style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          Sepete Ekle
        </button>
      </div>
    </div>
  );
}

export default ProductDetailPage;