const { anime } = window;

import React from "react"
import ReactDOM from "react-dom"

import Landing from "./Landing"

$(document).ready(function(){
  ReactDOM.render(<Landing />,document.getElementById("body"))
});