import NavbarLinks from "./NavbarLinks"
import navbarLinks from "../javaScriptAssets/navbarLinks"
import {popIn} from "./utilities/pop.js"

const Loading = () => <div className="loadingDotsContainer"><h1 className="loadingDots"></h1></div>

function Landing(){
  const navbarComponents = navbarLinks.map(link => <NavbarLinks key={link.id}
                                                                className={"landing_NavLink"}
                                                                data= {link}/>)
  const [loading,setLoading] = React.useState(true)

  React.useEffect(() => {
                          navbarLinks.map(link => {popIn(link.id)})
                          popIn("landingPotrait")
                          popIn("name")
                        },[loading])

  return(
        <>
        { loading? 
          <>
            <Loading/>
            <img style={{width:".01px"}} id="landingPotrait" src="./assets/portraitCircle.svg" onLoad={() => setLoading(false)}></img>
          </>
          :
          <div className="landing">
            <div className="name" id="name">Thomas Shih</div>
            <div className="portrait">
              <img id="landingPotrait" src="./assets/portraitCircle.svg"></img>
            </div>
            <div className="navLinks">
                {navbarComponents}
            </div>
          </div>
        }
        </>
      )
}

export default Landing