import projectList from "../javaScriptAssets/projectList"
import iconLinkList from "../javaScriptAssets/contactIcons"
import IconLink from "./IconLink"
import Media from "./Media"
import HoverEffect from "./utilities/hoverEffect"
import {usePop} from "./utilities/pop"

function ProjectCard({data,id}){
  const keywords = data.keywords.map((keyword,keywordID) => <li key={keywordID} className="keyword">{keyword}</li>)
  const gitHubIcon = iconLinkList[1].logoUrl
  React.useEffect(() => usePop(id),[])
  return(
    <div className="projectCard" id={id} style={{opacity:0}} >
      <h1 className="name">{data.name}</h1>
      <p className="desc">
        {data.desc}
        {data.link!=undefined &&  
          <>
          <br/><br/>
          <HoverEffect hoverID={`${data.id}_visitLink`}>
            <h2><a href={data.link}>Visit This Project!</a></h2>
          </HoverEffect>
          </>
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

function Projects(){
  const projects = projectList.map((project,projectNumber) => (<ProjectCard key={`projectNumber${projectNumber}`}
                                                                            id={`projectNumber${projectNumber}`}
                                                                            data={project} />))
  return(
    <div className="layout">
      {projects}
    </div>
  )
}

export default Projects