import Landing from "./landing/Landing.jsx"
import Footer from "./footer/Footer.jsx"
import Navbar from "./navbar/Navbar.jsx"
import Projects from "./projects/projects.jsx"
import Work from "./work/work.jsx"
import {Switch, Route} from "react-router-dom"

const App = () => (
  <>
    <Navbar/>
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
    <Footer/>
  </>
)

export default App