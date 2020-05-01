import NavbarLinks from "./NavbarLinks"
import navbarLinks from "../javaScriptAssets/navbarLinks"
import HoverEffect from "./utilities/hoverEffect"
import {Link} from "react-router-dom"

function Navbar(){
  const navbarComponents = navbarLinks.map(link => <NavbarLinks key={link.id} data={link}/>)

  return(
    <div id="navbar">
      <HoverEffect hoverID="landingPageLink">
        <Link to="/" className="name">Thomas Shih</Link>
      </HoverEffect>
      {navbarComponents}
    </div>
  )
}

export default Navbar