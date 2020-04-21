import projectList from "../assets/projectList"
import iconLinkList from "../assets/contactIcons"
import IconLink from "./IconLink"
import {enterButton,leaveButton} from "../utilities/buttonEffects"
import YouTubePlayer  from "react-player/lib/players/YouTube"

const gitHubIcon = iconLinkList[1].logoUrl

class Media extends React.Component{
  render(){
    if(this.props.video==null){
      //content is a picture
      return(
        <div className="media">
          <img src={this.props.picture}></img>
        </div>
      )
    }else{
      //content is a video
      return(
        <div className="media">
          <YouTubePlayer url={this.props.video} width="100%"/>
        </div>
      )
    }
  }
}

class Project extends React.Component{
    constructor(props){
      super()
      this.keywords = props.keywords.map(keyword => <li className="keyword">{keyword}</li>)
    };
    render(){
      return(
          <div className="ProjectCard">
            <h1 className="projectName">{this.props.name}</h1>
            <p className="desc">
              {this.props.desc}
              {this.props.link!=undefined &&  <div><br/><a href={this.props.link}>Visit This Project!</a></div>}
            </p>
            <h5 className="length">Status: {this.props.length}</h5>
            <Media video={this.props.video} picture={this.props.picture}/>
            <ul className="keywords">{this.keywords}</ul>
            <IconLink className="gitHub"
                      url={this.props.gitHub}
                      id={this.props.id + "icon"}
                      logoUrl={gitHubIcon}
                      alt="GitHub"/>
            {this.props.attribution!=undefined && <h6>{this.props.attribution}</h6>}
          </div>
    )};
  }

class ProjectList extends React.Component{
    constructor(){super()
        this.projects = projectList.map(project => (<Project  id={project.id}
                                                              key={project.id}
                                                              name={project.name}
                                                              desc={project.desc}
                                                              gitHub={project.gitHub}
                                                              picture={project.picture}
                                                              keywords={project.keywords}
                                                              length={project.length}
                                                              attribution={project.attribution}
                                                              link={project.link}
                                                              video={project.video}/>))
    };
    render(){
        return(
            <div>
                {this.projects}
            </div>
    )};
}

export default ProjectList