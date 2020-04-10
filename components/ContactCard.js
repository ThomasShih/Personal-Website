import IconLink from "./IconLink"
import iconLinkList from "../assets/contactIcons"
import {enterButton,leaveButton} from "../utilities/buttonEffects"
const resumeSrc = "../assets/resume.pdf"

class ResumeDownload extends React.Component{
  render(){
    return(
      <a className="resume" href={resumeSrc} download>
        <button id="resumeDownload"
                onMouseEnter={() => {enterButton("resumeDownload")}}
                onMouseLeave={() => {leaveButton("resumeDownload")}}>
          <i className="fa fa-download fa-2x"> Download Resume</i>
        </button>
      </a>
  )}
}

class ContactCard extends React.Component{
  constructor(){super()
    this.iconLinks = iconLinkList.map(icon => <IconLink   key={icon.id}
                                                          id={icon.id}
                                                          alt={icon.alt}
                                                          logoUrl={icon.logoUrl}
                                                          url={icon.url}/>)
  }
  render(){
    return(
      <div className="contactCard">
        <ResumeDownload/>
        {this.iconLinks}
      </div>
  )}
}

export default ContactCard