import React from "react"

import NavbarLinks from "./NavbarLinks"
import navbarLinks from "../assets/navbarLinks"

function Navbar(){
  const navbarComponents = navbarLinks.map(link => <NavbarLinks key={link.name}
                                                                href={link.href}
                                                                name={link.name}/>)
  return(
    <div className="navbar">
      <a href="../index.html">
        <header className="name">
            Thomas Shih
        </header>
      </a>
      <div className="navLinkTop">
        {navbarComponents}
      </div>
    </div>
)};

export default Navbar