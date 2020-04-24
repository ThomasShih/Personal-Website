import NavbarLinks from "./NavbarLinks"
import navbarLinks from "../javaScriptAssets/navbarLinks"
import {enterButton,leaveButton} from "../utilities/buttonEffects"
import {popIn} from "../utilities/pop"

function Navbar(){
  const navbarComponents = navbarLinks.map(link => <NavbarLinks key={link.id} data={link}/>)

  React.useEffect(() => {
                          popIn("navbar")
                          popIn("landingPage")
                        },[])

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
        {navbarComponents}
      </div>
    </div>
  )
}

export default Navbar