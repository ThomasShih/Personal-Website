import HoverEffect from "./utilities/hoverEffect"
import {popOut} from "./utilities/pop"
import {shake} from "./utilities/shake"

function removeScreen(redirectID,buttonID){
  if(window.location.href.includes(redirectID)){
    shake(buttonID,2)
  }else{
    popOut("*",() => {window.location.href = "./" + redirectID});
  }
}

const NavbarLinks = ({data}) =>(
  <HoverEffect className="navLink" hoverID={data.id}>
    <a onClick = {() => {removeScreen(data.href,data.id)}}>
      {data.name}
    </a>
  </HoverEffect>
)

export default NavbarLinks