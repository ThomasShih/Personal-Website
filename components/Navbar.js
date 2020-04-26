import NavbarLinks from "./NavbarLinks"
import navbarLinks from "../javaScriptAssets/navbarLinks"
import HoverEffect from "./utilities/hoverEffect"
import {popIn} from "../utilities/pop"

function Navbar(){
  const navbarComponents = navbarLinks.map(link => <NavbarLinks key={link.id} data={link}/>)

  React.useEffect(() => {
                          popIn("navbar")
                          popIn("landingPage")
                        },[])

  return(
    <div id="navbar" className="navbar">
      <HoverEffect hoverID="landingPageLink">
        <a className="name" href="../index.html">Thomas Shih</a>
      </HoverEffect>
      {navbarComponents}
    </div>
  )
}

export default Navbar