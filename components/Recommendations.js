import recommendationsList from "../javaScriptAssets/recommendationsList"

function RecommendationCard({data}){
  return(
    <div className="recommendationCard">
      <img className="imgUrl" src={data.imgUrl} alt="can't find image"></img>
      <div className="referenceName">{data.name}</div>
      <div className="position">{data.position}</div>
      <div className="company">{data.company}</div>
      <div  className="referenceText">{data.text}</div>
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