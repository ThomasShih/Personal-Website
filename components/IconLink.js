import React from "react"

function IconLink(props){
  return(
    <a href={props.url}>
      <img className="icon" src={props.logoUrl} alt={props.alt}></img>
    </a>
)}

export default IconLink