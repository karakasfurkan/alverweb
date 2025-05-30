import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Alışveriş Sitem. Tüm hakları saklıdır.</p>
    </footer>
  );
}

export default Footer;