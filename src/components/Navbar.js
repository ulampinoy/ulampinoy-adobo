import React from 'react'
import Link from 'gatsby-link'

import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'

const Navbar = () => (
  <header>
      <div className="wrapper">
        <nav className="header-nav">
          <div className="header-logo">
            <Link to="/">
              <img src={logo} alt="Ulampinoy" />
            </Link>
          </div>
          <div className="header-menu">
            <Link to="/about">About</Link>
            <Link to="/products">Products</Link>
          </div>
        </nav>
      </div>
  </header>
);

export default Navbar
