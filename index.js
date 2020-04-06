const { anime } = window;

import React from "react"
import ReactDOM from "react-dom"

import WorkExperience from "./work"

$(document).ready(function(){
  ReactDOM.render(<WorkExperience/>,document.getElementById("body"))
});