import HoverEffect from "../utilities/hoverEffect"

function IconLink(props){
  return(
    <HoverEffect hoverID={props.data.id} className={props.className}>
      <a href={props.data.url}>
        <img className="icon" src={props.data.logoUrl} alt={props.data.alt}></img>
      </a>
    </HoverEffect>
  )
}

export default IconLink