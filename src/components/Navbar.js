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
            <Link to="/videos"
              activeStyle={{
              borderBottom: '2px solid #909090',
              paddingBottom: '.5rem'
              }}
            >Videos
            </Link>
            <Link to="/about" activeStyle={{
              borderBottom: '2px solid #909090',
              paddingBottom: '.5rem'
              }}>About</Link>
          </div>
        </nav>
      </div>
  </header>
);

export default Navbar
