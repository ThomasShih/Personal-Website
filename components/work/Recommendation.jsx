import {PopAnimation} from "../utilities/pop"

const Component = window.styled.div`
  background-color: var(--component-bg-color);
  border-radius: 1.7em;
  padding:2em;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 10em 3fr;

  grid-template-areas: 
  "imgUrl referenceName"
  "imgUrl position"
  "imgUrl company"
  "referenceText referenceText";

  .imgUrl{
    grid-area:imgUrl;
    border-radius: 50%;
    width: 100%;
  }

  h2, h3, h4{text-align: right;}
  .referenceName{grid-area:referenceName;}
  .position{grid-area:position;}
  .company{grid-area:company;}

  .referenceText{
      grid-area:referenceText;
      font-style: italic;
      padding-top: 1.5em;
  }
`;

function Recommendation({data,id,toggle}){
  return(
    <PopAnimation in={toggle}>
      <Component id={id}>
        <img className="imgUrl" src={data.imgUrl} alt="can't find image"></img>
        <h2 className="referenceName">{data.name}</h2>
        <h3 className="position">{data.position}</h3>
        <h4 className="company">{data.company}</h4>
        <p className="referenceText">{data.text}</p>
      </Component>
    </PopAnimation>
  )
}

export default Recommendation