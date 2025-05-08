import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();

  const navLink = (to, text) => (
    <Link
      to={to}
      className={`hover:text-blue-500 ${location.pathname === to ? 'active_link' : ''}`}
    >
      {text}
    </Link>
  );

  return (
    <header className="header_container">
      <div className="wrapper">
        <div className="row-fluid">
          <div className="span3 logo_container">
            <Link to="/">
              {/* <img
                src="https://framerusercontent.com/images/OOxiriZSeUAJ7ePRTT29eefprs.svg"
                alt="Logo"
              /> */}
              <p>Aryan.</p>
            </Link>
          </div>
          <div className="span9 menu_container">
            <nav className="nav_container">
              {navLink('/projects', 'Projects')}
              {navLink('/about', 'About')}
              {navLink('/resume', 'Resume')}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
