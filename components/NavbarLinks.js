import React from "react"

function NavbarLinks(props){
  return(
    <div><a className="navLink" href={"./" + props.href}>{props.name}</a></div>
)}

export default NavbarLinks