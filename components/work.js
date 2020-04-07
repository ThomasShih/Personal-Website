import React from "react"
import ReactDOM from "react-dom"

import Navbar from "./Navbar"
import LinkedIn from "./LinkedIn"
import CompaniesWorked from "./CompaniesWorked"

function WorkExperience(){
    return(
      <div className="layout">
        <Navbar/>
        <LinkedIn/>
        <CompaniesWorked/>
      </div>
)}

$(document).ready(function(){
  ReactDOM.render(<WorkExperience/>,document.getElementById("body"))
});