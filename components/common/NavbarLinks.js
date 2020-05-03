import HoverEffect from "../utilities/hoverEffect"
import {shake} from "../utilities/shake"
import {Link} from "react-router-dom"

const isLinkValid = (desiredAddress,notValidCallback) =>{
  const currentAddress = window.location.pathname
  
  if (currentAddress == desiredAddress){
    //Your already on the desired page
    notValidCallback()
  }
}

function NavbarLinks({className,data}){
  const notValidCallback = () => {shake(data.id,0)}
  const checkValid = () => {isLinkValid(data.link,notValidCallback)}

  return(
    <HoverEffect className={className} hoverID={data.id}>
      <Link to={data.link} onClick={checkValid}>
        {data.name}
      </Link>
    </HoverEffect> 
  )
}

export default NavbarLinks