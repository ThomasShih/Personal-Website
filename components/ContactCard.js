import React from "react"
import IconLink from "./IconLink"
import iconLinkList from "../assets/contactIcons"

const resumeSrc = "./assets/resume.pdf"

class ResumeDownload extends React.Component{
  render(){
    return(
      <a className="resume" href={resumeSrc} download>
        <i className="fa fa-download fa-2x"> Download Resume</i> 
      </a>
  )}
}

class ContactCard extends React.Component{
  constructor(){super()
    this.iconLinks = iconLinkList.map(icon => <IconLink  key={icon.alt}
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