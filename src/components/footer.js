import React from 'react'
import Social from './social'
import Cafecito from "./cafecito"

const Footer = () => (
    <section className='footer'>
        <Cafecito></Cafecito>
        <Social></Social>
        jCrego
          © {new Date().getFullYear()}
        {` `}
    </section>
)

export default Footer