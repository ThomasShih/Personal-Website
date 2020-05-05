import IconLink from "../common/IconLink"
import iconLinkList from "../../javaScriptAssets/contactIcons"
import HoverEffect from "../utilities/hoverEffect"
import {PopAnimation} from "../utilities/pop"
const resumeSrc = "../../assets/resume.pdf"

const ResumeDownload = () => (
    <HoverEffect hoverID="resumeDownloadLink">
      <a href={resumeSrc} download>
        <h2><i className="fa fa-download fa-lg"> Download Resume</i></h2>
      </a>
    </HoverEffect>
)

function ContactCard({id,toggle}){
  const iconLinks = iconLinkList.map(icon => <IconLink key={icon.id} data={icon}/>)
  return(
    <PopAnimation in={toggle} style={{gridArea:"ContactCard"}}>
      <div id={id}>
        <ResumeDownload/>
        {iconLinks}
      </div>
    </PopAnimation>
  )
}

export default ContactCard