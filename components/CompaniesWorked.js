import companyList from "../javaScriptAssets/companyList"
import HoverEffect from "./utilities/hoverEffect"

function CompanyProfile(props){
  return(
    <div className="companyProfile">
      <HoverEffect className="logoLink" hoverID={props.data.id + "_icon"}>
        <a href={props.data.url}>
          <img className="logoLink" src={props.data.imageUrl} alt={props.data.name}></img>
        </a>
      </HoverEffect>
      <h2 className="jobTitle">{props.data.jobTitle}</h2>
      <h3 className="desc">{props.data.desc}</h3>
      <h3 className="length">{props.data.length}</h3>
    </div> )
}


function CompaniesWorked(){
  const companyComponents = companyList.map(company => <CompanyProfile  key     ={company.id}
                                                                        data    ={company}/>)
  return(
    <div className="main">
      <div className="workExperienceHeader">Work Experience</div>
      {companyComponents}
    </div>
  )
}

export default CompaniesWorked