import React, { useEffect } from "react";
import Team from "./Components/Team";
import Landing from "./Components/Landing";
import sal from "sal.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../node_modules/sal.js/dist/sal.css";
import "./App.css";

export default function App() {
  // smooth scrolling
  useEffect(() => {
    sal();
  });

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/team" exact component={Team} />
        </Switch>
      </div>
    </Router>
  );
}
