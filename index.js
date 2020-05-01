import checkCDNexist from "./components/utilities/checkCDN"
import {BrowserRouter as Router} from "react-router-dom"

import App from "./components/App.js"
const Index = () => {
  checkCDNexist()
  return(
    <Router>
      <App/>
    </Router>
  )
}

ReactDOM.render(<Index/>,document.getElementById("body"))