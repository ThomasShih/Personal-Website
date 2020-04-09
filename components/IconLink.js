import React from "react"
import {enterButton,leaveButton} from "../utilities/buttonEffects"

class IconLink extends React.Component{
  render(){
    return(
      <a href={this.props.url}>
        <button id={this.props.id}
                onMouseEnter={() => {enterButton(this.props.id)}}
                onMouseLeave={() => {leaveButton(this.props.id)}}>
          <img className="icon" src={this.props.logoUrl} alt={this.props.alt}></img>
        </button>
      </a>
    )
  }
}

export default IconLink