import Flair from "./Flair"
import "./landing.css"
const Loading = () => <div className="loadingDotsContainer"><h1 className="loadingDots"></h1></div>

function Landing(){
  document.title = "Thomas Shih: Landing"
  const [loading,setLoading] = React.useState(true)

  return( loading? 
          <>
            <Loading/>
            <img style={{width:".01px"}} id="landingPotrait" src="./assets/portraitCircle.svg" onLoad={() => setLoading(false)}></img>
          </>
          :
          <div className="landing">
            <div className="portrait">
              <img id="landingPotrait" src="./assets/portraitCircle.svg"></img>
            </div>
            <div className="flair">
              <Flair/>
            </div>
          </div>
      )
}

export default Landing