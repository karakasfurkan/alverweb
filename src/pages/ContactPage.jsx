import React, { useState } from 'react';
import './ContactPage.css';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log('Form verileri:', formData);
    
    setFormData({ 
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="contact-page">
      <h1>Bize Ulaşın</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Adınız:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">E-posta:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Mesajınız:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required 
          ></textarea>
        </div>
        <button type="submit" className="submit-button">Gönder</button>
      </form>
    </div>
  );
}

export default ContactPage;