import {enterButton,leaveButton} from "../utilities/buttonEffects"
import {popOut} from "../utilities/pop"
import {shake} from "../utilities/shake"

function removeScreen(redirectID){
  if(window.location.href.includes(redirectID)){
    shake("*",2)
  }else{
    popOut("*",() => {window.location.href = "./" + redirectID});
  }
}

class NavbarLinks extends React.Component{
  render(){
    return(
      <button className="navLink"
              onClick     = {() => {removeScreen(this.props.href)}}
              onMouseEnter= {() => {enterButton(this.props.id)}}
              onMouseLeave= {() => {leaveButton(this.props.id)}}
              id={this.props.id}>
                {this.props.name}
      </button>
  )};
}

export default NavbarLinks