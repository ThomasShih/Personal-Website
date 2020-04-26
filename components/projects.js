import Navbar from "./Navbar"
import checkCDNexist from "./utilities/checkCDN"
import ProjectList from "./Project"
function Projects(){
  React.useEffect(checkCDNexist); //make sure all required libaries are imported (I know its a bit redundant to check to see if react exists)
  return(
      <div className="layout">
        <Navbar/>
        <ProjectList/>
      </div>
  )
}

ReactDOM.render(<Projects/>,document.getElementById("body"))