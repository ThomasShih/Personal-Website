import recommendationsList from "../javaScriptAssets/recommendationsList"

function RecommendationCard({data}){
  return(
    <div className="recommendationCard">
      <img className="imgUrl" src={data.imgUrl} alt="can't find image"></img>
      <h2 className="referenceName">{data.name}</h2>
      <h3 className="position">{data.position}</h3>
      <h4 className="company">{data.company}</h4>
      <p className="referenceText">{data.text}</p>
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