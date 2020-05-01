import Landing from "./Landing"
import Projects from "./projects"
import Work from "./Work"
import {Switch, Route} from "react-router-dom"

function App(){
  return(
          <>
            <Switch>
              <Route exact path="/">
                <Landing/>
              </Route>
              <Route exact path="/work">
                <Work/>
              </Route>
              <Route exact path="/projects">
                <Projects/>
              </Route>
            </Switch>
          </>
        )
}

export default App