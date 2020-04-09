import React from "react"

import NavbarLinks from "./NavbarLinks"
import navbarLinks from "../assets/navbarLinks"
import {enterButton,leaveButton} from "../utilities/buttonEffects"

class Navbar extends React.Component{
  constructor(){super()
  this.navbarComponents = navbarLinks.map(link => <NavbarLinks  key={link.id}
                                                                id={link.id}
                                                                href={link.href}
                                                                name={link.name}/>)
  }
  render(){
    return(
      <div className="navbar">
        <a href="../index.html">
          <button id="landingPage"
                  onMouseEnter={() => {enterButton("landingPage")}}
                  onMouseLeave={() => {leaveButton("landingPage")}}>
              <header className="name">Thomas Shih</header>
          </button>
        </a>
        <div className="navLinkTop">
          {this.navbarComponents}
        </div>
      </div>
  )};
}

export default Navbar