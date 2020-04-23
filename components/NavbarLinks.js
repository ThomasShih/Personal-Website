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

function NavbarLinks(props){
  return(
    <button className="navLink"
            onClick     = {() => {removeScreen(props.data.href)}}
            onMouseEnter= {() => {enterButton(props.data.id)}}
            onMouseLeave= {() => {leaveButton(props.data.id)}}
            id={props.data.id}>
      {props.data.name}
    </button>
  )
}

export default NavbarLinks