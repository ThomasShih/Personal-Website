import Landing from "./Landing"
import Navbar from "./Navbar"
import Projects from "./Projects"
import Work from "./Work"
import {Switch, Route} from "react-router-dom"


//Import the stylesheet
// import "../css/projects.css"

function App(){
  return(
          <>
            <Switch>
              <Route exact path="/">
                  <Landing/>
              </Route>
              <Route exact path="/work">
                  <Navbar/>
                  <Work/>
              </Route>
              <Route exact path="/projects">
                <div className="layout">
                  <Navbar/>
                  <Projects/>
                </div>
              </Route>
            </Switch>
          </>
        )
}

export default App