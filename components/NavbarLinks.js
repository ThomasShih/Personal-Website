import {enterButton,leaveButton} from "../utilities/buttonEffects"
import {popOut} from "../utilities/pop"
import {shake} from "../utilities/shake"

function removeScreen(redirectID,buttonID){
  if(window.location.href.includes(redirectID)){
    shake(buttonID,2)
  }else{
    popOut("*",() => {window.location.href = "./" + redirectID});
  }
}

function NavbarLinks({data}){
  return(
    <button className="navLink"
            onClick     = {() => {removeScreen(data.href,data.id)}}
            onMouseEnter= {() => {enterButton(data.id)}}
            onMouseLeave= {() => {leaveButton(data.id)}}
            id={data.id}>
      {data.name}
    </button>
  )
}

export default NavbarLinks