import React from "react"

class IconLink extends React.Component{
  render(){
  return(
    <a href={this.props.url}>
      <img className="icon" src={this.props.logoUrl} alt={this.props.alt}></img>
    </a>
  )}
}

export default IconLink