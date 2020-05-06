import HoverEffect from "../utilities/hoverEffect"

const ProjectSourceCode = ({data}) => (
  <div className="status">
    <h3>Status: {data.length}</h3>
    {data.link!=undefined &&  
      <HoverEffect hoverID={`${data.id}Source`}>
        <a href={data.gitHub}>Source Code</a>
      </HoverEffect>
    }
    {data.gitHub!=undefined &&  
      <HoverEffect hoverID={`${data.id}Hosted`}>
        <a href={data.link}>Hosted Site</a>
      </HoverEffect>
    }
  </div>
)

export default ProjectSourceCode