import React from "react";
import logo from '../images/logo_nobg.png';
import Navbar from './navbar.js';

const Header = () => (
  <header className="main--background">
        <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TZ9DRTR"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
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
