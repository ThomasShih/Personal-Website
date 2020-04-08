import React from "react"
import IconLink from "./IconLink"

const iconLinkList = [
                        {
                          logoUrl:"https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg",
                          url:"https://www.linkedin.com/in/thomas-shih/",
                          alt:"LinkedIn"
                        },
                        {
                          logoUrl:"https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
                          url:"https://github.com/ThomasShih",
                          alt:"GitHub"
                        }
                      ]

const resumeSrc = "./assets/resume.pdf"

function Resume(){
  return(
    <a className="resume" href={resumeSrc} download>
      <i className="fa fa-download fa-2x"> Download Resume</i> 
    </a>
)}

function ContactCard(){
  const iconLinks = iconLinkList.map(icon => <IconLink  key={icon.alt}
                                                        alt={icon.alt}
                                                        logoUrl={icon.logoUrl}
                                                        url={icon.url}/>)
  return(
    <div className="contactCard">
      <Resume/>
      {iconLinks}
    </div>
)}

export default ContactCard