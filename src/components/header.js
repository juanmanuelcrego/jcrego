import React from "react"
import Navbar from "./navbar"
import { Link } from "gatsby"
import ButtonToggle from "../Theme/buttonToggle"
import Cafecito from "./cafecito"

const Header = props => (
  <section className="header">
    <Link to="/">
      <div className="logo"></div>
    </Link>
    <Navbar/>
    <div className="linksdiv">
      <ul>
        <li>
          <ButtonToggle></ButtonToggle>
        </li>
        <li>
          <Cafecito></Cafecito>
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
