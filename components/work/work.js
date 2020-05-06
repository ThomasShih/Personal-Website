import Recommendations from "./Recommendations"
import CompaniesWorked from "./CompaniesWorked"
import "./work.css"
function Work(){
  document.title = "Work"
  const [toggle,setToggle] = React.useState(false)
  React.useEffect(() => {setToggle(true)},[])
  return(
    <div className="work">
      <div className={"firstSection"}>
        <CompaniesWorked toggle={toggle}/>
      </div>
      <div className={"secondSection"}>
        <Recommendations toggle={toggle} id={"Recommendations"}/>
      </div>
    </div>
  )
}

export default Work