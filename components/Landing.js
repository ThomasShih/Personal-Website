import NavbarLinks from "./NavbarLinks"
import navbarLinks from "../javaScriptAssets/navbarLinks"
import {popIn} from "./utilities/pop.js"

function Landing(){
  const navbarComponents = navbarLinks.map(link => <NavbarLinks key={link.id}
                                                                className={"landing_NavLink"}
                                                                data= {link}/>)

  React.useEffect(() => {
                          navbarLinks.map(link => {popIn(link.id)})
                          popIn("landingPotrait")
                          popIn("name")
                        },[])

  return(
          <div className="landing">
            <div className="name" id="name">Thomas Shih</div>
            <div className="portrait">
              <img id="landingPotrait" src="./assets/portraitCircle.svg"></img>
            </div>
            <div className="navLinks">
                {navbarComponents}
            </div>
          </div>
        )
}

export default Landing