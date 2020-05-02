import HoverEffect from "./utilities/hoverEffect"
import {Link} from "react-router-dom"

const NavbarLinks = ({className,data}) =>(
  <HoverEffect className={className} hoverID={data.id}>
    <Link to={data.link}>
      {data.name}
    </Link>
  </HoverEffect> 
)

export default NavbarLinks