import projectList from "../javaScriptAssets/projectList"
import iconLinkList from "../javaScriptAssets/contactIcons"
import IconLink from "./IconLink"
import YouTubePlayer  from "react-player/lib/players/YouTube"

function Media(props){
  const mediaDevice = props.picture? <img src={props.picture}></img> : <YouTubePlayer url={props.video} width="100%"/>;
  return(
    <div className="media">
      {mediaDevice}
    </div>
  )
}

function ProjectCard({data}){
  const keywords = data.keywords.map(keyword => <li className="keyword">{keyword}</li>)
  const gitHubIcon = iconLinkList[1].logoUrl
  return(
    <div className="ProjectCard">
      <div className="projectName">{data.name}</div>
      <p className="desc">
        {data.desc}
        {data.link!=undefined &&  <div><br/><a href={data.link}>Visit This Project!</a></div>}
      </p>
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
  const projects = projectList.map(project => (<ProjectCard id={project.id} data={project}/>))
  return(
      <div>
          {projects}
      </div>
  )
}

export default ProjectList