import React from "react"
import {enterButton,leaveButton} from "../utilities/buttonEffects"

class NavbarLinks extends React.Component{
  constructor(props){
    super()
  };

  render(){
    return(
      <div>
      <a href={"./" + this.props.href}>
        <button className="navLink" 
                onMouseEnter={() => {enterButton(this.props.id)}}
                onMouseLeave={() => {leaveButton(this.props.id)}}
                id={this.props.id}>
                  {this.props.name}
        </button>
      </a>
      </div>
  )};
}

export default NavbarLinks