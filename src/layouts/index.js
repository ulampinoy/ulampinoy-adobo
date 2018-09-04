import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './main.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Home | Ulampinoy" />
    <Navbar />
    <main>{children()}</main>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
