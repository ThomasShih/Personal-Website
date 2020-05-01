import HoverEffect from "./utilities/hoverEffect"
import {Link} from "react-router-dom"

const NavbarLinks = ({data}) =>(
  <HoverEffect className="navLink" hoverID={data.id}>
    <Link to={data.link}>
      {data.name}
    </Link>
  </HoverEffect>
)

export default NavbarLinks