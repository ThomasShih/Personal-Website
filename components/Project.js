import projectList from "../javaScriptAssets/projectList"
import iconLinkList from "../javaScriptAssets/contactIcons"
import IconLink from "./IconLink"
import Media from "./Media"
import HoverEffect from "./utilities/hoverEffect"

function ProjectCard({data}){
  const keywords = data.keywords.map((keyword,keywordID) => <li key={keywordID} className="keyword">{keyword}</li>)
  const gitHubIcon = iconLinkList[1].logoUrl
  return(
    <div className="ProjectCard">
      <div className="projectName">{data.name}</div>
      <div className="desc">
        {data.desc}
        {data.link!=undefined &&  
          <HoverEffect hoverID={`${data.id}_visitLink`}>
            <br/><h1><a href={data.link}>Visit This Project!</a></h1>
          </HoverEffect>
        }
      </div>
      <h2 className="length">Status: {data.length}</h2>
      <Media video={data.video} picture={data.picture}/>
      <ul className="keywords">{keywords}</ul>
      <IconLink className="gitHub"
                data={{
                       url:data.gitHub
                      ,id:data.id+"icon"
                      ,logoUrl:gitHubIcon
                      ,alt:"GitHub"}}/>
      {data.attribution!=undefined && <h6>{data.attribution}</h6>}
    </div>
  )
}

function ProjectList(){
  const projects = projectList.map((project,projectNumber) => (<ProjectCard key={`projectNumber${projectNumber}`} data={project}/>))
  return(<>{projects}</>)
}

export default ProjectList