import Typist from 'react-typist'
const flairList = ["Front-End Developer","Python Data Analyst","Math Tutor","Photographer"]

const flairComponents = flairList.map((flair,index) => <li key={index}>{flair}<Typist.Delay ms={400} /></li>)

const Flair = () => (
  <Typist startDelay={1000} cursor={{show:false}}>
    <ul>
      {flairComponents}
    </ul>
  </Typist>
)

export default Flair