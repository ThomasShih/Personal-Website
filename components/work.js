import Recommendations from "./Recommendations"
import CompaniesWorked from "./CompaniesWorked"
import ContactCard from "./ContactCard"

function Work(){
  document.title = "🔨 Work"
  return(
    <div className="work">
      <ContactCard     id={"ContactCard"}    />
      <Recommendations id={"Recommendations"}/>
      <CompaniesWorked id={"CompaniesWorked"}/>
    </div>
  )
}

export default Work