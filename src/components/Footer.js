import React from 'react'
import Link from 'gatsby-link'

import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'

const Footer = () => (
  <footer>
      <div>
        <Link to="/">ULAMPINOY</Link> | Copyright © 2018 |
        <Link to="/glossary"> Glossary</Link>
      </div>
  </footer>
);

export default Footer
