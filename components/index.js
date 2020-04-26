import NavbarLinks from "./NavbarLinks"
import navbarLinks from "../javaScriptAssets/navbarLinks"
import ProfileImg from "./ProfileImg"

import {popIn} from "./utilities/pop.js"
import checkCDNexist from "./utilities/checkCDN"

function Landing(){
  const navbarComponents = navbarLinks.map(link => <NavbarLinks key={link.id}
                                                                data= {{
                                                                        id:link.id,
                                                                        key:link.name,
                                                                        href:"html/" + link.href,
                                                                        name:link.name,
                                                                      }}/>)

  React.useEffect(() => {
                          checkCDNexist()
                          navbarLinks.map(link => {popIn(link.id)})
                          popIn("landingPotrait")
                          popIn("name")
                        },[])

  return(
          <div className="landing">
            <div className="name" id="name"> Thomas Shih </div>
            <ProfileImg/>
            <div className="navLinks">
                {navbarComponents}
            </div>
          </div>
        )
}

ReactDOM.render(<Landing/>,document.getElementById("body"))