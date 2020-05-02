import Landing from "./Landing"
import Projects from "./projects"
import Work from "./Work"
import {Switch, Route} from "react-router-dom"


//Import the stylesheet
// import "../css/projects.css"

function App(){
  return(
          <>
            <Switch>
              <Route exact path="/">
                <div className="landingStyleSheet">
                  <Landing/>
                </div>
              </Route>
              <Route exact path="/work">
                <div className="workStyleSheet">
                  <Work/>
                </div>
              </Route>
              <Route exact path="/projects">
                <div className="projectsStyleSheet">
                  <Projects/>
                </div>
              </Route>
            </Switch>
          </>
        )
}

export default App