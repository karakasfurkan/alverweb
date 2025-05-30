import React from 'react';
import products from '../data/products.json';
import ProductCard from '../components/ProductCard';
import WeatherWidget from '../components/WeatherWidget';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-page">
      <h1 className="page-title">Ürünler</h1>
      <div className="weather-widget-container">
        <WeatherWidget /> 
      </div>

      <div className="product-list">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;