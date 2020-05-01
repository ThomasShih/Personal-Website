import NavbarLinks from "./NavbarLinks"
import navbarLinks from "../javaScriptAssets/navbarLinks"
import ProfileImg from "./ProfileImg"
import {popIn} from "./utilities/pop.js"

//Import the stylesheet
import {style} from "../css/landing.css"

function Landing(){
  console.log(style)
  const navbarComponents = navbarLinks.map(link => <NavbarLinks key={link.id} data= {link}/>)

  React.useEffect(() => {
                          navbarLinks.map(link => {popIn(link.id)})
                          popIn("landingPotrait")
                          popIn("name")
                        },[])

  return(
          <div className="landing">
            <div className="name" id="name">Thomas Shih</div>
            <ProfileImg/>
            <div className="navLinks">
                {navbarComponents}
            </div>
          </div>
        )
}

export default Landing