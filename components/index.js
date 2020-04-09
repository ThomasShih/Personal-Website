import React from "react"
import ReactDOM from "react-dom"

import NavbarLinks from "./NavbarLinks"
import navbarLinks from "../assets/navbarLinks"

import ProfileImg from "./ProfileImg"

class Landing extends React.Component{
    constructor(){super()
      this.navbarComponents = navbarLinks.map(link => <NavbarLinks  id={link.id}
                                                                    key={link.name}
                                                                    href={"html/" + link.href}
                                                                    name={link.name}/>
      )
    };

    render(){return(
              <div className="landing">
                <div className="name"> Thomas Shih </div>
                <ProfileImg/>
                <div className="navLinks">
                    {this.navbarComponents}
                </div>
              </div>
    )};
}

ReactDOM.render(<Landing/>,document.getElementById("body"))