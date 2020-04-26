import IconLink from "./IconLink"
import iconLinkList from "../javaScriptAssets/contactIcons"
import HoverEffect from "./utilities/hoverEffect"
const resumeSrc = "../assets/resume.pdf"

function ResumeDownload(){
  return(
    <HoverEffect className="resume" hoverID="resumeDownloadLink">
      <a href={resumeSrc} download>
        <i className="fa fa-download fa-2x"> Download Resume</i>
      </a>
    </HoverEffect>
  )
}

function ContactCard(){
  const iconLinks = iconLinkList.map(icon => <IconLink key={icon.id} data={icon}/>)
  return(
      <div className="contactCard">
        <ResumeDownload/>
        {iconLinks}
      </div>
  )
}

export default ContactCard