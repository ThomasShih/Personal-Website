import NavbarLinks from "./NavbarLinks.jsx"
import LandingPageLink from "./LandingPageLink.jsx"
import navbarLinks from "../../javaScriptAssets/navbarLinks"

const Component = window.styled.div`
  background-color: var(--nav-bg-color);
  text-align: center;
  padding: 1em 3em 1em 3em;
  grid-area:navbar;
  column-gap: 2em;
  row-gap: 2em;
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width:1001px){
      display: grid;
      grid-template-columns: repeat(3,1fr);
  }
`;

function Navbar(){
  const navbarComponents = navbarLinks.map(link => <NavbarLinks key={link.id} data={link}/>)
  return(
    <Component>
      <LandingPageLink/>
      {navbarComponents}
    </Component>
  )
}

export default Navbar