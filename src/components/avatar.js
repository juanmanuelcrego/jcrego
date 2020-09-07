import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Avatar = () => (
    <StaticQuery
        query={
            graphql`
        query {
            profile: file(relativePath: {eq: "profile.jpg"}) {
                childImageSharp {
                  fixed(width: 120, height: 120, fit: COVER) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
        }
        `
        }
        render={data => (
            <section className='avatar'>
                <Img className='pic' fixed={data.profile.childImageSharp.fixed} alt="Profile image" />
            </section>
        )}
    />
)

export default Avatar
