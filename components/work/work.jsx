import CompaniesWorked from "./CompaniesWorked.jsx"
import Recommendation from "./Recommendation.jsx"
import recommendationsList from "../../javaScriptAssets/recommendationsList"

const Component = window.styled.div`
  padding-bottom:12em;
  @media (min-width:1001px){padding-bottom:3em;}
`;

const WorkExperienceContainer = window.styled.div`
  background-color: var(--main-bg-color);
  padding: 1em;

  @media (min-width:1001px){
    background-image: url(https://images.unsplash.com/photo-1555066932-e78dd8fb77bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80);
    background-repeat: no-repeat;
    background-size:cover;
    padding: 4% 4% 4% 40%;
  }
`
const RecommendationsRecieved = window.styled.div`
  padding: 1em;
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 4%;
  column-gap: 4%;

  @media (min-width:1001px){grid-template-columns: 1fr 1fr;}
`

function Work(){
  document.title = "Work"
  const [toggle,setToggle] = React.useState(false)
  React.useEffect(() => {setToggle(true)},[])
  return(
    <Component className="work">
      <WorkExperienceContainer>
        <CompaniesWorked toggle={toggle}/>
      </WorkExperienceContainer>
      <RecommendationsRecieved>
        {recommendationsList.map((recommendation,index) => <Recommendation key={index}
                                                                           data={recommendation}
                                                                           id={`recommendation${index}`}
                                                                           toggle={toggle}/>)}
      </RecommendationsRecieved>
    </Component>
  )
}

export default Work