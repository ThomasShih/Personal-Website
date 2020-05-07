import projectList from "../../javaScriptAssets/projectList"
import Media from "./Media"
import ProjectSourceCode from "./ProjectSourceCode"

import "./projects.css"
import {PopAnimation} from "../utilities/pop"

function ProjectCard({data,id,toggle}){
  const keywords = data.keywords.map((keyword,keywordID) => <li key={keywordID} className="keyword">{keyword}</li>)
  return(
    <PopAnimation in={toggle}>
      <div className="projectCard" id={id}>
        <h1 className="name">{data.name}</h1>
        <p  className="desc">{data.desc}</p>
        <ProjectSourceCode data={data}/>
        <Media className="media" video={data.video} picture={data.picture}/>
        <ul className="keywords">{keywords}</ul>
        {data.attribution!=undefined && <h6>{data.attribution}</h6>}
      </div>
    </PopAnimation>
  )
}

function Projects(){
  document.title = "Projects"
  const [toggle,setToggle] = React.useState(false)
  React.useEffect(() => {setToggle(true)},[])

  const projects = projectList.map((project,projectNumber) => (<ProjectCard key={`projectNumber${projectNumber}`}
                                                                            id={`projectNumber${projectNumber}`}
                                                                            data={project}
                                                                            toggle={toggle}/>))
  return(
    <div className="projectPage">
      {projects}
    </div>
  )
}

export default Projects