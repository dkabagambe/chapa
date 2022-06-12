import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <p>&copy;{new Date().getFullYear()} chapa General enterprises ltd</p>
    </div>
  );
};

export default Footer;
