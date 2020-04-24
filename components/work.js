import Navbar from "./Navbar"
import Recommendations from "./Recommendations"
import CompaniesWorked from "./CompaniesWorked"
import ContactCard from "./ContactCard"
import checkCDNexist from "../utilities/checkCDN"

function WorkExperience(){
  checkCDNexist();
  return(
    <div className="layout">
      <Navbar/>
      <ContactCard/>
      <Recommendations/>
      <CompaniesWorked/>
    </div>
  )
}

ReactDOM.render(<WorkExperience/>,document.getElementById("body"))