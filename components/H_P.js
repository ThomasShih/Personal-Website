import Navbar from "./Navbar"
import checkCDNexist from "../utilities/checkCDN"
import ProjectList from "../components/Project"

checkCDNexist();

class HobbiesAndProjects extends React.Component{
  constructor(){super()};
  render(){
    return(
        <div className="layout">
          <Navbar/>
          <ProjectList/>
        </div>
  )};
}

ReactDOM.render(<HobbiesAndProjects/>,document.getElementById("body"))