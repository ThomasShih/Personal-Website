import HoverEffect from "../utilities/hoverEffect"

const Component = window.styled.div`
  padding: 1em;
  align-items: center;
  display: grid;
  column-gap: 2em;
  border-bottom: 1px solid var(--main-bg-color);
  row-gap:1em;
  grid-template-areas: "logo" "jobTitle" "length" "desc";

  @media (min-width:1001px){
    grid-template-columns: 3fr 5fr 1fr;
    grid-template-rows: 1fr 2fr;
    grid-template-areas: 
    "logo jobTitle length"
    "logo desc     length";
  }

  .logoLink{
      grid-area:logo;
      max-width:15vw;
  }

  .jobTitle{
      grid-area:jobTitle;
  }
  
  .desc{
    grid-area:desc;
    font-weight: bold;
  }

  .length{
      grid-area:length;
  }
`;

function CompanyProfile(props){
  const descLi = props.data.desc.map((item,index) => <li key={index}>{item}</li>)
  return(
    <Component className="companyProfile">
      <HoverEffect className="logoLink" hoverID={props.data.id + "_icon"}>
        <a href={props.data.url}>
          <img className="logoLink" src={props.data.imageUrl} alt={props.data.name}></img>
        </a>
      </HoverEffect>
      <h2 className="jobTitle">{props.data.jobTitle}</h2>
      <ul className="desc">{descLi}</ul>
      <h3 className="length">{props.data.length}</h3>
    </Component> )
}

export default CompanyProfile