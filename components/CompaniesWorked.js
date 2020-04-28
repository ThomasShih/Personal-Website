import companyList from "../javaScriptAssets/companyList"
import HoverEffect from "./utilities/hoverEffect"

function CompanyProfile(props){
  const descLi = props.data.desc.map((item,index) => <li key={index}>{item}</li>)
  console.log(props.data.imageUrl)
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


function CompaniesWorked(){
  const companyComponents = companyList.map(company => <CompanyProfile  key     ={company.id}
                                                                        data    ={company}/>)
  return(
    <div className="main">
      <h1 className="workExperienceHeader">Work Experience</h1>
      {companyComponents}
    </div>
  )
}

export default CompaniesWorked