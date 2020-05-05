import recommendationsList from "../../javaScriptAssets/recommendationsList"
import {PopAnimation} from "../utilities/pop"

function RecommendationCard({data,id,toggle}){
  return(
    <PopAnimation in={toggle}>
      <div id={id} className="recommendationCard">
        <img className="imgUrl" src={data.imgUrl} alt="can't find image"></img>
        <h2 className="referenceName">{data.name}</h2>
        <h3 className="position">{data.position}</h3>
        <h4 className="company">{data.company}</h4>
        <p className="referenceText">{data.text}</p>
      </div>
    </PopAnimation>
  )
}

function Recommendations({toggle}){
  const recommendationsComponents = recommendationsList.map((recommendation,index) => <RecommendationCard key={index}
                                                                                                          data={recommendation}
                                                                                                          id={`recommendation${index}`}
                                                                                                          toggle={toggle}/>)
  return(
    <div className="Recommendations">
      {recommendationsComponents}
    </div>
  )
}

export default Recommendations