import Typist from 'react-typist'
const flairList = ["Front-End Developer","Python Data Analyst","Calculus Tutor","Photographer"]
var animationPlayed = false

function Flair(){
  if(animationPlayed){
    return(
      <ul>
        {flairList.map((flair,index) => <li key={index}>{flair}</li>)}
      </ul>
    )
  }else{
    animationPlayed = true
    return(
      <Typist startDelay={500} cursor={{show:false}}>
        <ul>
          {flairList.map((flair,index) => <li key={index}>{flair}<Typist.Delay ms={300} /></li>)}
        </ul>
      </Typist>
    )
  }
}

export default Flair