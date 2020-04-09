import React from "react"

class NavbarLinks extends React.Component{
  render(){
    return(
      <div><a className="navLink" href={"./" + this.props.href}>{this.props.name}</a></div>
  )}
}

export default NavbarLinks