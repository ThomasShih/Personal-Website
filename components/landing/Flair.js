import Typist from 'react-typist'
const flairList = ["Front-End Developer","Python Data Analyst","Calculus Tutor","Photographer"]

const flairComponents = flairList.map((flair,index) => <li key={index}>{flair}<Typist.Delay ms={300} /></li>)

const Flair = () => (
  <Typist startDelay={500} cursor={{show:false}}>
    <ul>
      {flairComponents}
    </ul>
  </Typist>
)

export default Flair