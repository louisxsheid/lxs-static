import "./styles/App.scss";
import AboutMe from "./pages/AboutMe/AboutMe";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Projects from "./pages/Projects/Projects";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={AboutMe} />
        <Route path="/projects" exact component={Projects} />
        {/* <Route path="/til" exact component={TIL} /> */}
      </Switch>
    </Router>
  );
};

export default App;
