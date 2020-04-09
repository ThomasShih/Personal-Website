import React from "react"

import NavbarLinks from "./NavbarLinks"
import navbarLinks from "../assets/navbarLinks"

class Navbar extends React.Component{
  constructor(){super()
  this.navbarComponents = navbarLinks.map(link => <NavbarLinks  key={link.name}
                                                                href={link.href}
                                                                name={link.name}/>)
  }
  render(){
    return(
      <div className="navbar">
        <a href="../index.html">
          <header className="name">
              Thomas Shih
          </header>
        </a>
        <div className="navLinkTop">
          {this.navbarComponents}
        </div>
      </div>
  )};
}

export default Navbar