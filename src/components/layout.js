import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import "../styles/styles.css"

const Layout = ({ children }) => {

  return (
    <>
      <Header />
      <section
      >
        <main>{children}</main>
      </section>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
