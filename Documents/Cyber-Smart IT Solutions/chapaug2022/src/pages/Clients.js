import React from 'react';
import '../styles/Clients.css';
import img1 from '../images/rea.jpg';
import img2 from '../images/uedcl.jpg';
import img3 from '../images/umeme.jpg';

const Clients = () => {
  return (
    <div>
      <h3>Our Clients</h3>
      <div className="clients">
        <div className="card">
          <img src={img2} alt="clients" />
        </div>
        <div className="card">
          <img src={img3} alt="clients" />
        </div>

        <div className="card">
          <img src={img1} alt="clients" />
        </div>
      </div>
    </div>
  );
};

export default Clients;
