import Navbar from "./Navbar"
import checkCDNexist from "../utilities/checkCDN"
checkCDNexist();

class HobbiesAndProjects extends React.Component{
  constructor(){super()};
  render(){
    return(
        <div className="layout">
          <Navbar/>
          <h1> This page is currently in construction! Check back soon! </h1>
        </div>
  )};
}

ReactDOM.render(<HobbiesAndProjects/>,document.getElementById("body"))