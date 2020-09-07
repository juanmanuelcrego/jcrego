import React, { useState } from 'react'
import { Link } from 'gatsby'
import ButtonToggle from '../Theme/buttonToggle'
import Menu from './menu-svg'

const Navbar = (props) => (
    <div className='navbar'>
        <ul>
        <li className='toggleresponsive'><ButtonToggle></ButtonToggle></li>
            <li><Link to="/">{props.linkHome}</Link></li>
            <li><Link to='#portfolio'>{props.link1}</Link></li>
            <li><Link to='#contact'>{props.link2}</Link></li>
        </ul>   
            <Menu className='menu'></Menu>
    </div>

  )

export default Navbar


