import Flair from "./Flair"
import "./landing.css"
const Loading = () => <div className="loadingDotsContainer"><h1 className="loadingDots"></h1></div>

function Landing(){
  document.title = "Landing"
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
              <br/>
            </div>
            <h2 className="query">
              Hello! I am a young professional with a passion for math, computer science, and nature. 
              <br/><br/>
              I am currently looking for front-end development positons. I am also available for freelancing where my skills apply. To contact me, please find my information in the footer below.
            </h2>
          </div>
      )
}

export default Landing