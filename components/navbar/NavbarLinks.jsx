import HoverEffect from "../utilities/hoverEffect"
import {shake} from "../utilities/shake"
import {Link} from "react-router-dom"

const Component = window.styled.div`
  color:var(--nav-text-color);
  a{
  color:inherit;
  font-size: 2em;
  text-decoration: none;
  transition: color .1s;
  }
`;

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
      <Component>
        <Link to={data.link} onClick={checkValid}>
          {data.name}
        </Link>
      </Component>
    </HoverEffect> 
  )
}

export default NavbarLinks