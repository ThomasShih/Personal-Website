import IconLink from "./IconLink"
import iconLinkList from "../javaScriptAssets/contactIcons"
import HoverEffect from "./utilities/hoverEffect"
import {usePop} from "./utilities/pop"
const resumeSrc = "../assets/resume.pdf"

function ResumeDownload(){
  return(
    <HoverEffect hoverID="resumeDownloadLink">
      <a href={resumeSrc} download>
        <h2><i className="fa fa-download fa-lg"> Download Resume</i></h2>
      </a>
    </HoverEffect>
  )
}

function ContactCard({id}){
  const iconLinks = iconLinkList.map(icon => <IconLink key={icon.id} data={icon}/>)
  React.useEffect(() => {return(usePop(id))},[])

  return(
      <div id={id} style={{opacity:0}} className="contactCard">
        <ResumeDownload/>
        {iconLinks}
      </div>
  )
}

export default ContactCard