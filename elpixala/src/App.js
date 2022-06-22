import React, { useEffect } from "react";
import Team from "./Components/Team";
import Landing from "./Components/Landing";
import About from "./Components/About";
import Preloader from "./Components/Preloader.js";
import sal from "sal.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
  useHistory,
} from "react-router-dom";
import "../node_modules/sal.js/dist/sal.css";
import "./App.css";
import ContactUs from "./Components/ContactUs";
import Career from "./Components/Career";

export default function App() {
  // smooth scrolling
  useEffect(() => {
    sal();
  });


  return (
      <Router>
        <div className="App" lang="en">
          <Preloader />
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/team" exact component={Team} />
            <Route path="/about" exact component={About} />
            <Route path="/contact" exact component={ContactUs} />
            <Route path="/career" exact component={Career} />
          </Switch>
        </div>
      </Router>
  );
}
