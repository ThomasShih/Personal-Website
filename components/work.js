import Navbar from "./Navbar"
import Recommendations from "./Recommendations"
import CompaniesWorked from "./CompaniesWorked"
import ContactCard from "./ContactCard"

function Work(){
  return(
    <div className="work">
      <Navbar/>
      <ContactCard/>
      <Recommendations/>
      <CompaniesWorked/>
    </div>
  )
}

export default Work