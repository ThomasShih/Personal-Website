import {enterButton,leaveButton} from "../utilities/buttonEffects"

function IconLink(props){
  return(
    <a href={props.data.url}>
      <button id={props.data.id}
              onMouseEnter={() => {enterButton(props.data.id)}}
              onMouseLeave={() => {leaveButton(props.data.id)}}>
        <img className="icon" src={props.data.logoUrl} alt={props.data.alt}></img>
      </button>
    </a>
  )
}

export default IconLink