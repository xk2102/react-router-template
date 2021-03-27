import "./styles.css";
import NavBar from "./components/NavBar.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Section1 from "./components/Section1.js";
import Section2 from "./components/Section2.js";
import Section3 from "./components/Section3.js";
import Section4 from "./components/Section4.js";
import NoMatch from "./components/NoMatch.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
  Redirect
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <NavBar />

        <Switch>
          <Route exact path="/" render={() => <Section1 />} />
          <Route path="/Section2" render={() => <Section2 />} />
          <Route path="/Section3" render={() => <Section3 />} />
          <Route path="/Section4" render={() => <Section4 />} />
          <Route path="*">
            <NoMatch />
            <Redirect from="/noMatch" to="/" />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
