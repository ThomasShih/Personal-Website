import iconLinkList from "../../javaScriptAssets/contactIcons"
import IconLink from "../common/IconLink.js"
import ResumeDownload from "./ResumeDownload.jsx"
import EmailLink from "./EmailLink.jsx"

const Component = window.styled.div`
  background-color: var(--nav-bg-color);
  padding: .5em 0 .5em 0;
  width: 100%;
  position: absolute;
  bottom: 0px;
  row-gap:.5em;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  justify-content: center;

  span{
    text-align: center;
    button{
      padding:0 1em 0 1em;
      a img{
        width:2em;
      }
    }
  }

  @media (min-width:1001px){
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

function Footer(){
  const iconLinks = iconLinkList.map(icon => <IconLink key={icon.id} data={icon}/>)
  return(
    <Component>
      <ResumeDownload/>
      <EmailLink/>
      <span>
        {iconLinks}
      </span>
    </Component>
  )
}

export default Footer