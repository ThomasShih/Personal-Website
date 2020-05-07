import Media from "./Media.jsx"
import ProjectSourceCode from "./ProjectSourceCode.jsx"
import {PopAnimation} from "../utilities/pop"

const Component = window.styled.div`
  margin:1em 1em 0 1em;
  padding: 3em;
  border-radius: 1.7em;
  background-color: var(--component-bg-color);
  color:var(--component-text-color);

  display: grid;
  row-gap: 2em;
  grid-template-columns: 1fr;
  grid-template-areas: "name" "media" "status" "keywords" "desc";

  .name{grid-area:name;}
  .desc{
    grid-area:desc;
    color: black;
    font-size:1.2em;
  }

  @media (max-width:1099px){
    padding: 3em 2em 3em 2em;
    grid-template-columns: repeat(2,1fr);
    grid-template-areas:
        "name name"
        "media status"
        "media keywords"
        "desc desc";

    .name{text-align: center;}
  }

  @media (min-width:1100px){
    padding: 3em 1em 3em 1em;
    grid-template-columns: 1fr 3fr 1fr;
    grid-template-areas:
        "media name status"
        "media desc status"
        "media desc keywords";
  }
`;

function ProjectCard({data,id,toggle}){
  const keywords = data.keywords.map((keyword,keywordID) => <li key={keywordID} className="keyword">{keyword}</li>)
  return(
    <PopAnimation in={toggle}>
      <Component className="projectCard" id={id}>
        <h1 className="name">{data.name}</h1>
        <p  className="desc">{data.desc}</p>
        <ProjectSourceCode data={data}/>
        <Media video={data.video} picture={data.picture}/>
        <ul className="keywords">{keywords}</ul>
        {data.attribution!=undefined && <h6>{data.attribution}</h6>}
      </Component>
    </PopAnimation>
  )
}

export default ProjectCard