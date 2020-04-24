import companyList from "../javaScriptAssets/companyList"
import {enterButton,leaveButton} from "../utilities/buttonEffects"

function CompanyProfile(props){
  return(
    <div className="companyProfile">
        <a href={props.data.url} className="logoLink">
            <button id={props.data.id + "_icon"}
                    onMouseEnter={() => {enterButton(props.data.id + "_icon")}}
                    onMouseLeave={() => {leaveButton(props.data.id + "_icon")}}>
              <img className="logoLink" src={props.data.imageUrl} alt={props.data.name}></img>
            </button>
        </a>
        <h3 className="jobTitle">{props.data.jobTitle}</h3>
        <p className="desc">{props.data.desc}</p>
        <h4 className="length">{props.data.length}</h4>
    </div> )
}


function CompaniesWorked(){
  const companyComponents = companyList.map(company => <CompanyProfile  key     ={company.id}
                                                                        data    ={company}/>)
  return(
    <div className="main">
      <h1>Work Experience</h1>
      {companyComponents}
    </div>
  )
}

export default CompaniesWorked