import React from "react"
import companyList from "../assets/companyList"

function CompanyProfile(props){
  return(
    <div className="companyProfile">
        <a href={props.url} className="logoLink">
            <img className="logo" src={props.imageUrl} alt={props.name}></img>
        </a>
        <h3 className="jobTitle">{props.jobTitle}</h3>
        <p className="desc">{props.desc}</p>
        <h4 className="length">{props.length}</h4>
    </div>
)}

function CompaniesWorked(){
    const companyComponents = companyList.map(company => <CompanyProfile    key     ={company.name}
                                                                            name    ={company.name}
                                                                            imageUrl={company.imageUrl}
                                                                            url     ={company.url}
                                                                            jobTitle={company.jobTitle}
                                                                            desc    ={company.desc}
                                                                            length  ={company.length}/>)
    return(
    <div className="main">
      {companyComponents}
    </div>
)}

export default CompaniesWorked