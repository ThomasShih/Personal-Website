import Navbar from "./Navbar"
import Recommendations from "./Recommendations"
import CompaniesWorked from "./CompaniesWorked"
import ContactCard from "./ContactCard"

//Import the stylesheet
import "../css/work.css"
import "../css/navbar.css"

function Work(){
  return(
    <div className="layout">
      <Navbar/>
      <ContactCard/>
      <Recommendations/>
      <CompaniesWorked/>
    </div>
  )
}

export default Work