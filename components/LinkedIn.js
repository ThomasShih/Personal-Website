import React from "react"
import recommendationsList from "../assets/recommendationsList"

function RecommendationCard(props){
  return(
    <div className="recommendationCard">
      <img className="imgUrl" src={props.imgUrl} alt="can't find image"></img>
      <h3 className="referenceName">{props.name}</h3>
      <h4 className="position">{props.position}</h4>
      <h4 className="company">{props.company}</h4>
      <p  className="referenceText">{props.text}</p>
    </div>
)}

function Recommendations(){
  const recommendationsComponents = recommendationsList.map(recommendation => <RecommendationCard key={recommendation.name}
                                                                                                  name={recommendation.name}
                                                                                                  position={recommendation.position}
                                                                                                  company={recommendation.company}
                                                                                                  text={recommendation.text}
                                                                                                  imgUrl={recommendation.imgUrl}/>)
  return(
    <div>
      {recommendationsComponents}
    </div>
)}

function LinkedIn(){
  return(
    <div className="aside">
      <Recommendations/>
    </div>
)}

export default LinkedIn