/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Bottom from "./bottomNavbar"
import "./layout.css"


const Layout = ({ children }) => {


  return (
    <>
      <Header />
      <Bottom/>
      <div className="container">
        <main>{children}</main>
      </div>
      <footer>
        <div className="footer__sub">
          <div className="container">
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org" className="text--light">Gatsby. </a>
          <span>All Right Reserved Wolfactive</span></div>
        </div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
