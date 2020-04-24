import React from "react"

import recommendationsList from "../javaScriptAssets/recommendationsList"

function RecommendationCard({data}){
  return(
    <div className="recommendationCard">
      <img className="imgUrl" src={data.imgUrl} alt="can't find image"></img>
      <h3 className="referenceName">{data.name}</h3>
      <h4 className="position">{data.position}</h4>
      <h4 className="company">{data.company}</h4>
      <p  className="referenceText">{data.text}</p>
    </div>
  )
}

function Recommendations(){
  const recommendationsComponents = recommendationsList.map(recommendation => <RecommendationCard key={recommendation.name} data={recommendation}/>)
  return(
    <div className="aside">
      {recommendationsComponents}
    </div>
  )
}

export default Recommendations