import React from "react";
import logo from '../images/logo_nobg.png';
import Navbar from './navbar.js';

const Header = () => (
  <header className="main--background">     
    <div className="header__contain container">
      <div className="header__item">
          <div className="header__brand">
            <a href="http://wolfactive.net/"><img data-src={logo} alt="Logo-wolfactive" className="logo lazyload" /></a>
          </div>
      </div>
      <div className="header__item">
        <Navbar />
      </div>
    </div>
  </header>
);

export default Header;
