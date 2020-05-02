import projectList from "../javaScriptAssets/projectList"
import iconLinkList from "../javaScriptAssets/contactIcons"
import IconLink from "./IconLink"
import Media from "./Media"
import HoverEffect from "./utilities/hoverEffect"

function ProjectCard({data}){
  const keywords = data.keywords.map((keyword,keywordID) => <li key={keywordID} className="keyword">{keyword}</li>)
  const gitHubIcon = iconLinkList[1].logoUrl
  return(
    <div className="projectCard">
      <h1 className="name">{data.name}</h1>
      <p className="desc">
        {data.desc}
        {data.link!=undefined &&  
          <HoverEffect hoverID={`${data.id}_visitLink`}>
            <br/><h2><a href={data.link}>Visit This Project!</a></h2>
          </HoverEffect>
        }
      </p>
      <div className="status">
        <IconLink className="gitHub"
                  data={{url:data.gitHub
                        ,id:data.id+"icon"
                        ,logoUrl:gitHubIcon
                        ,alt:"GitHub"}}/>
        <h3>Status: {data.length}</h3>
      </div>
      <Media className="media" video={data.video} picture={data.picture}/>
      <ul className="keywords">{keywords}</ul>
      {data.attribution!=undefined && <h6>{data.attribution}</h6>}
    </div>
  )
}

function ProjectList(){
  const projects = projectList.map((project,projectNumber) => (<ProjectCard key={`projectNumber${projectNumber}`} data={project}/>))
  return(<>{projects}</>)
}

export default ProjectList