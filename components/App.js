import Landing from "./landing/Landing"
import Navbar from "./navbar/Navbar"
import Footer from "./footer/Footer"
import Projects from "./projects/projects"
import Work from "./work/Work"
import {Switch, Route} from "react-router-dom"

import "./stylesheet.css"

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
      <Navbar/>
      <Landing/>
      <Footer/>
    </Route>
    <Route path="*">
      <NotLanding/>
    </Route>
  </Switch>
)

export default App