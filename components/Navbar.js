import NavbarLinks from "./NavbarLinks"
import navbarLinks from "../assets/navbarLinks"
import {enterButton,leaveButton} from "../utilities/buttonEffects"
import {popIn} from "../utilities/pop"

class Navbar extends React.Component{
  constructor(){super()
  this.navbarComponents = navbarLinks.map(link => <NavbarLinks  key={link.id}
                                                                id={link.id}
                                                                href={link.href}
                                                                name={link.name}/>)
  }

  componentDidMount(){
    popIn("navbar")
    popIn("landingPage")
  }

  render(){
    return(
      <div id="navbar" className="navbar">
        <a href="../index.html">
          <button id="landingPage"
                  onMouseEnter={() => {enterButton("landingPage")}}
                  onMouseLeave={() => {leaveButton("landingPage")}}>
              <header className="name">Thomas Shih</header>
          </button>
        </a>
        <div className="navLinkTop">
          {this.navbarComponents}
        </div>
      </div>
  )};
}

export default Navbar