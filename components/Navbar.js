import React from "react"
import navbarLinks from "../assets/navbarLinks"

function NavbarLinks(props){
  return(
    <div><a className="navLink" href={props.href}>{props.name}</a></div>
)}

function Navbar(){
  const navbarComponents = navbarLinks.map(link => <NavbarLinks key={link.name}
                                                                href={link.href}
                                                                name={link.name}/>)
  return(
    <div className="navbar">
      <header className="name">
        Thomas Shih
      </header>
      <div className="navLinkTop">
        {navbarComponents}
      </div>
    </div>
)};

export default Navbar