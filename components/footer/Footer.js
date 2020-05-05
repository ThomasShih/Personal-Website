import IconLink from "../common/IconLink"
import iconLinkList from "../../javaScriptAssets/contactIcons"
import HoverEffect from "../utilities/hoverEffect"
const resumeSrc = "../../assets/resume.pdf"
import "./footer.css"

const ResumeDownload = () => (
    <HoverEffect hoverID="footerResumeLink">
      <a href={resumeSrc} download>
        <h2><i className="fa fa-download fa-lg"> Download Resume</i></h2>
      </a>
    </HoverEffect>
)

const EmailLink = () => (
  <HoverEffect hoverID="footerEmailLink">
    <a href="mailto:thomasshih@cmail.carleton.ca" download>
      <h2><i className="fa fa-envelope fa-lg"> Email Me</i></h2>
    </a>
  </HoverEffect>
)

function Footer({id}){
  const iconLinks = iconLinkList.map(icon => <IconLink key={icon.id} data={icon}/>)
  return(
    <div className="footer">
      <ResumeDownload/>
      <EmailLink/>
      <span>
        {iconLinks}
      </span>
    </div>
  )
}

export default Footer