import React from "react"

import Navbar from "./components/Navbar"

var companyList = [
    {
        name:"Bombardier Aerospace",
        imageUrl:"https://www.bombardier.com/content/dam/Websites/bombardiercom/system/Bombardier_Logo.svg",
        url:"http://www.bombardier.com/",
        jobTitle:"Business Analyst/Full Stack Developer",
        desc:"Front-End web development (jQuery,JavaScript) | Back-end data analysist (Python: Pandas, AWS S3) | Build, Testing, and Deployment (Azure DevOps)",
        length:"2019-2020",
    },{
        name:"ST Engineering iDirect",
        imageUrl:"https://www.idirect.net/wp-content/themes/idirect/icons/logo-color.svg",
        url:"https://www.idirect.net/",
        jobTitle:"Software Engineer",
        desc:"OSI Layer 2/3 bandwidth testing automation (Bash) | Feature Development and Bug-Fixing (C/C++: Socket)",
        length:"2018",
    },{
        name:"Carleton University",
        imageUrl:"https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/Carleton_University_logo.svg/330px-Carleton_University_logo.svg.png",
        url:"https://www.idirect.net/",
        jobTitle:"Mathematics Teaching Assistant",
        desc:"Perform Adminstrative Duties | Teach Differential Equations/Multivariable Calculus/Laplace and Fourier Transforms",
        length:"2018-2019",
    }
]

function CompanyProfile(props){
    return(
    <div className="companyProfile">
        <a href={props.url} className="logo">
            <img src={props.imageUrl} alt={props.name}></img>
        </a>
        <h3 className="jobTitle">{props.jobTitle}</h3>
        <p className="desc">{props.desc}</p>
        <h4 className="length">{props.length}</h4>
    </div>
)}

function Main(){
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

function WorkExperience(){
    return(
      <div className="layout">
        <Navbar/>
        <Main/>
      </div>
)}

export default WorkExperience