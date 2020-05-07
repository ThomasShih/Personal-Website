import HoverEffect from "../utilities/hoverEffect"

const Component = window.styled.div`
  grid-area:status;
  text-align: center;

  button{
    margin:5px;
    a{
    background-color:var(--main-bg-color);
    color: var(--nav-text-color);
    border-radius:.25em;
      padding: 4px;
      text-decoration:none;
      box-sizing: border-box;
    }
  }
`;

const ProjectSourceCode = ({data}) => (
  <Component className="status">
    <h3>Status: {data.length}</h3>
    {data.gitHub!=undefined &&  
      <HoverEffect hoverID={`${data.id}Source`}>
        <a href={data.gitHub}>Source Code</a>
      </HoverEffect>
    }
    {data.link!=undefined &&  
      <HoverEffect hoverID={`${data.id}Hosted`}>
        <a href={data.link}>Hosted Site</a>
      </HoverEffect>
    }
  </Component>
)

export default ProjectSourceCode