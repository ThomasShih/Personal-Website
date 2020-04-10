import recommendationsList from "../assets/recommendationsList"

class RecommendationCard extends React.Component{
  render(){
    return(
    <div className="recommendationCard">
      <img className="imgUrl" src={this.props.imgUrl} alt="can't find image"></img>
      <h3 className="referenceName">{this.props.name}</h3>
      <h4 className="position">{this.props.position}</h4>
      <h4 className="company">{this.props.company}</h4>
      <p  className="referenceText">{this.props.text}</p>
    </div>
  )}
}

class Recommendations extends React.Component{
  constructor(){super()
  this.recommendationsComponents = recommendationsList.map(recommendation => <RecommendationCard key={recommendation.name}
                                                                                            name={recommendation.name}
                                                                                            position={recommendation.position}
                                                                                            company={recommendation.company}
                                                                                            text={recommendation.text}
                                                                                            imgUrl={recommendation.imgUrl}/>)
  
  }
  render(){
    return(
      <div className="aside">
        {this.recommendationsComponents}
      </div>
    )
  }
}

export default Recommendations