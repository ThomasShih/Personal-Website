import NavbarLinks from "./NavbarLinks"
import navbarLinks from "../assets/navbarLinks"
import ProfileImg from "./ProfileImg"

import {popIn} from "../utilities/pop.js"
import checkCDNexist from "../utilities/checkCDN"
checkCDNexist();

class Landing extends React.Component{
    constructor(){super()
      this.navbarComponents = navbarLinks.map(link => <NavbarLinks  id={link.id}
                                                                    key={link.name}
                                                                    href={"html/" + link.href}
                                                                    name={link.name}/>
      )
    };

    componentDidMount(){
      navbarLinks.map(link => {popIn(link.id)})
      popIn("landingPotrait")
      popIn("name")
    }

    render(){return(
              <div className="landing">
                <div className="name" id="name"> Thomas Shih </div>
                <ProfileImg/>
                <div className="navLinks">
                    {this.navbarComponents}
                </div>
              </div>
    )};
}

ReactDOM.render(<Landing/>,document.getElementById("body"))