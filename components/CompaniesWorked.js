import React from "react"
import companyList from "../assets/companyList"

class CompanyProfile extends React.Component{
  render(){
    return(
      <div className="companyProfile">
          <a href={this.props.url} className="logoLink">
              <img className="logo" src={this.props.imageUrl} alt={this.props.name}></img>
          </a>
          <h3 className="jobTitle">{this.props.jobTitle}</h3>
          <p className="desc">{this.props.desc}</p>
          <h4 className="length">{this.props.length}</h4>
      </div>
  )}
}

class CompaniesWorked extends React.Component{
  constructor(){super()
    this.companyComponents = companyList.map(company => <CompanyProfile    key     ={company.name}
                                                                            name    ={company.name}
                                                                            imageUrl={company.imageUrl}
                                                                            url     ={company.url}
                                                                            jobTitle={company.jobTitle}
                                                                            desc    ={company.desc}
                                                                            length  ={company.length}/>)
  }

  render(){
    return(
      <div className="main">
        {this.companyComponents}
      </div>
  )}
}

export default CompaniesWorked