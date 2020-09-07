import React, { useContext } from "react"
import PropTypes from "prop-types"

import Header from "./header"
// import "../styles/styles.css"

import { Global, css } from "@emotion/core"
import { useTheme } from "emotion-theming"
import Context from "../Theme/context"

import { Container, Row, Col } from "react-bootstrap"

const Layout = ({ children }) => {
  const { state } = useContext(Context)

  const theme = useTheme()

  return (
    <>
    <section>
          <Header />
              <Global
                styles={css`
                  * {
                    margin: 0;
                    padding: 0;
                  }

                  body {
                    background-color: ${state.isDark
                      ? theme.dark.background
                      : theme.light.background};
                  }
                  h1,
                  h2,
                  p {
                    color: ${state.isDark ? theme.dark.font : theme.light.font};
                  }
                `}
              />
              {children}
        </section>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
