import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Menu = () => (
    <StaticQuery
    query={
        graphql `
        query {
            btn: file(relativePath: {eq: "botonmenu.png"}) {
                childImageSharp{
                    fixed(width: 20, height: 20) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
        `
    }
    render={data => (
        <div className='menu-div'>
            <Img className='menu-btn' fixed={data.btn.childImageSharp.fixed} alt="Menu button" />
        </div>
    )}
    />
)

export default Menu
