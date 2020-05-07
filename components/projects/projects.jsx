import projectList from "../../javaScriptAssets/projectList"
import ProjectCard from "./ProjectCard.jsx"

function Projects(){
  document.title = "Projects"
  const [toggle,setToggle] = React.useState(false)
  React.useEffect(() => {setToggle(true)},[])

  const projects = projectList.map((project,projectNumber) => (<ProjectCard key={`projectNumber${projectNumber}`}
                                                                            id={`projectNumber${projectNumber}`}
                                                                            data={project}
                                                                            toggle={toggle}/>))
  return(
    <div className="projectPage" style={{paddingBottom:"12em"}}>
      {projects}
    </div>
  )
}

export default Projects