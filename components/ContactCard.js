import React from "react"

import IconLink from "./IconLink"
import iconLinkList from "../assets/contactIcons"
import {enterButton,leaveButton} from "../utilities/buttonEffects"
const resumeSrc = "../assets/resume.pdf"

function ResumeDownload(){
  return(
    <a className="resume" href={resumeSrc} download>
      <button id="resumeDownload"
              onMouseEnter={() => {enterButton("resumeDownload")}}
              onMouseLeave={() => {leaveButton("resumeDownload")}}>
        <i className="fa fa-download fa-2x"> Download Resume</i>
      </button>
    </a>
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