import Flair from "./Flair.jsx"
import Portrait from "./Portrait.jsx";
import AboutMe from "./AboutMe.jsx";
import LoadingAnimation from "./LoadingAnimation.jsx"
const Component = window.styled.div`
  row-gap: 5em;
  padding: 5em;
  padding-bottom: 12em;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas: "portrait" "flair" "query";

  @media (min-width:1000px){
    padding-bottom: 5em;
    column-gap:10em;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 
        "portrait flair"
        "portrait query";
  }
`;

function Landing(){
  document.title = "Landing"
  const [loading,setLoading] = React.useState(true)

  return(loading? 
          <>
            <LoadingAnimation/>
            <img style={{width:".01px"}} id="landingPotrait" src="./assets/portraitCircle.svg" onLoad={() => setLoading(false)}></img>
          </>
          :
          <Component>
            <Portrait/>
            <Flair/>
            <AboutMe/>
          </Component>
      )
}

export default Landing