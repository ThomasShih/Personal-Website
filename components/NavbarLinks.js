import HoverEffect from "./utilities/hoverEffect"
import {popOut} from "./utilities/pop"
import {shake} from "./utilities/shake"
import {Link} from "react-router-dom"

// function removeScreen(redirectID,buttonID){
//   if(window.location.href.includes(redirectID)){
//     shake(buttonID,2)
//   }else{
//     popOut("*",() => {window.location.href = "./" + redirectID});
//   }
// }

const NavbarLinks = ({data}) =>(
  <HoverEffect className="navLink" hoverID={data.id}>
    <Link to={data.link}>
      {data.name}
    </Link>
  </HoverEffect>
)

export default NavbarLinks