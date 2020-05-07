import HoverEffect from "../utilities/hoverEffect"
import {Link} from "react-router-dom"

const Component = window.styled.div`
  .name{
    font-size: 3em;
    color: var(--nav-text-color);
    text-decoration: none;
    text-align: center;
  }
`;

const LandingPageLink = () =>
  <HoverEffect hoverID="landingPageLink">
    <Component>
      <Link to="/" className="name">Thomas Shih</Link>
    </Component>
  </HoverEffect>

export default LandingPageLink