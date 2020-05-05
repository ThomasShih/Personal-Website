import Recommendations from "./Recommendations"
import CompaniesWorked from "./CompaniesWorked"
import ContactCard from "./ContactCard"

function Work(){
  document.title = "🔨 Work"
  const [toggle,setToggle] = React.useState(false)
  React.useEffect(() => {setToggle(true)},[])
  return(
    <div className="work">
      <ContactCard     toggle={toggle} id={"ContactCard"}    />
      <Recommendations toggle={toggle} id={"Recommendations"}/>
      <CompaniesWorked toggle={toggle} id={"CompaniesWorked"}/>
    </div>
  )
}

export default Work