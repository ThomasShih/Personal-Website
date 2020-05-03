import Landing from "./landing/Landing"
import Navbar from "./common/Navbar"
import Projects from "./projects/projects"
import Work from "./work/Work"
import {Switch, Route} from "react-router-dom"

const NotLanding = () => (
  <>
    <Navbar/>
    <Switch>
      <Route exact path="/work">
        <Work/>
      </Route>
      <Route exact path="/projects">
        <Projects/>
      </Route>
    </Switch>
  </>
)

const App = () => (
  <Switch>
    <Route exact path="/">
      <Landing/>
    </Route>
    <Route path="*">
      <NotLanding/>
    </Route>
  </Switch>
)

export default App