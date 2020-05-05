import Typist from 'react-typist'
import "./landing.css"
const Loading = () => <div className="loadingDotsContainer"><h1 className="loadingDots"></h1></div>

const flairList = ["Front-End Developer","Python Data Analyst","Math Tutor","Photographer"]

const flairComponents = flairList.map((flair,index) => (
  <li key={index}>
    <Typist startDelay={1000 + 1500*index} cursor={{show:false}}>
      <span>{flair}</span>
    </Typist>
  </li>
))

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
              <ul>
                {flairComponents}
              </ul>
            </div>
          </div>
      )
}

export default Landing