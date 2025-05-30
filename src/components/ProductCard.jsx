import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css'; 

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.imageUrl} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.price} TL</p>
      <Link to={`/product/${product.id}`}>Detayları Gör</Link>
    </div>
  );
}

export default ProductCard;