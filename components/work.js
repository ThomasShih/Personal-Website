import React from "react"
import ReactDOM from "react-dom"

import Navbar from "./Navbar"
import Recommendations from "./Recommendations"
import CompaniesWorked from "./CompaniesWorked"
import ContactCard from "./ContactCard"

function WorkExperience(){
    return(
      <div className="layout">
        <Navbar/>
        <ContactCard/>
        <Recommendations/>
        <CompaniesWorked/>
      </div>
)}

ReactDOM.render(<WorkExperience/>,document.getElementById("body"))