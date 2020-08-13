import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from 'gatsby'

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
        <div onClick={boton} className='menu-div'>
            <Img className='menu-btn' fixed={data.btn.childImageSharp.fixed} alt="Menu button" />
        </div>
    )}
    />
)

const boton = () => {
    let linksdiv = document.querySelector('div.linksdiv')

    if (linksdiv.style.display == 'none') {
        linksdiv.style.display = 'flex'
    }else {
        linksdiv.style.display = 'none'
    }

}

export default Menu
