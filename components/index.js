import React from "react"
import ReactDOM from "react-dom"

import NavbarLinks from "./NavbarLinks"
import navbarLinks from "../assets/navbarLinks"

import ProfileImg from "./ProfileImg"

function Landing(){
    const navbarComponents = navbarLinks.map(link => <NavbarLinks key={link.name}
                                                                  href={"html/" + link.href}
                                                                  name={link.name}/>)
    return(
      <div className="landing">
        <div className="name"> Thomas Shih </div>
        <ProfileImg/>
        <div className="navLinks">
            {navbarComponents}
        </div>
      </div>
)}

ReactDOM.render(<Landing/>,document.getElementById("body"))