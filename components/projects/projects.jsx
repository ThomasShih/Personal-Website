import projectList from "../../javaScriptAssets/projectList"
import ProjectCard from "./ProjectCard.jsx"
const Component = window.styled.div`
  padding-bottom:12em;
  
  @media (min-width:1100px){
    padding-bottom:4em;
  }
`;

function Projects(){
  document.title = "Projects"
  const [toggle,setToggle] = React.useState(false)
  React.useEffect(() => {setToggle(true)},[])

  const projects = projectList.map((project,projectNumber) => (<ProjectCard key={`projectNumber${projectNumber}`}
                                                                            id={`projectNumber${projectNumber}`}
                                                                            data={project}
                                                                            toggle={toggle}/>))
  return(
    <Component>
      {projects}
    </Component>
  )
}

export default Projects