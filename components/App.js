import Landing from "./Landing"
import Navbar from "./Navbar"
import Projects from "./Projects"
import Work from "./Work"
import {Switch, Route} from "react-router-dom"

const NotLanding = () => (
  <>
    <Navbar/>
    <Switch>
      <Route exact path="/work">
        <Work/>
      </Route>
      <Route exact path="/projects">
        <div className="layout">
        <Projects/>
        </div>
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