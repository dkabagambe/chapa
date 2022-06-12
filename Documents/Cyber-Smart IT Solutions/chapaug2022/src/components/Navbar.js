import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';
import logo from '../images/chapa.PNG';
import { Link, useLocation } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdLightbulb } from 'react-icons/md';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setToggleMenu(false);
  }, [location]);
  return (
    <div>
      <div className="App__navbar">
        <div className="App__navbar-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="App__navbar-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/clients">Clients</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/services">Services</Link>
          <Link to="/mission">Mission</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="App__navbar-smallscreen">
          <GiHamburgerMenu
            color="blue"
            fontSize={27}
            onClick={() => {
              setToggleMenu(true);
            }}
          />
          {toggleMenu && (
            <div className="App__navbar-smallscreen-overlay flex__center slide-bottom">
              <MdLightbulb
                color="blue"
                fontSize={30}
                className="overlay__close"
                onClick={() => setToggleMenu(false)}
              />

              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/clients">Clients</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/gallery">Gallery</Link>
              <Link to="/services">Services</Link>
              <Link to="/mission">Mission</Link>
              <Link to="/contact">Contact</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
