import React from "react"
import Navbar from "./navbar"
import { Link } from "gatsby"
import ButtonToggle from "../Theme/buttonToggle"

const Header = props => (
  <section className="header">
    <Link to="/">
      <div className="logo"></div>
    </Link>
    <Navbar linkHome="Home" link1="Portfolio" link2="Contact" />
    <div className="linksdiv">
      <ul>
        <li>
          <ButtonToggle></ButtonToggle>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="#portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="#contact">Contact</Link>
        </li>
      </ul>
    </div>
  </section>
)

export default Header
