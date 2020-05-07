import companyList from "../../javaScriptAssets/companyList"
import {PopAnimation} from "../utilities/pop"
import CompanyProfile from "./CompanyProfile.jsx"

const Component = window.styled.div`
  background-color: var(--component-bg-color);
  border-radius: 1.7em;
  box-shadow: var(--boxShadow);

  h1{
    text-align: center;
    padding:.5em;
    border-bottom: 1px solid var(--main-bg-color);
  }
`;

function CompaniesWorked({id,toggle}){
  const companyComponents = companyList.map(company => <CompanyProfile  key={company.id} data={company}/>)
  return(
    <PopAnimation in={toggle} className={"CompaniesWorked"}>
      <Component>
        <h1>Work Experience</h1>
        {companyComponents}
      </Component>
    </PopAnimation>
  )
}

export default CompaniesWorked