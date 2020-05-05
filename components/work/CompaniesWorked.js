import companyList from "../../javaScriptAssets/companyList"
import HoverEffect from "../utilities/hoverEffect"
import {PopAnimation} from "../utilities/pop"

function CompanyProfile(props){
  const descLi = props.data.desc.map((item,index) => <li key={index}>{item}</li>)
  return(
    <div className="companyProfile">
      <HoverEffect className="logoLink" hoverID={props.data.id + "_icon"}>
        <a href={props.data.url}>
          <img className="logoLink" src={props.data.imageUrl} alt={props.data.name}></img>
        </a>
      </HoverEffect>
      <h2 className="jobTitle">{props.data.jobTitle}</h2>
      <ul className="desc">{descLi}</ul>
      <h3 className="length">{props.data.length}</h3>
    </div> )
}


function CompaniesWorked({id,toggle}){
  const companyComponents = companyList.map(company => <CompanyProfile  key     ={company.id}
                                                                        data    ={company}/>)
  return(
    <PopAnimation in={toggle} style={{gridArea:"companiesWorked"}}>
      <div id={id}>
        <h1 className="workExperienceHeader">Work Experience</h1>
        {companyComponents}
      </div>
    </PopAnimation>
  )
}

export default CompaniesWorked