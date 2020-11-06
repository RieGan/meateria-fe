import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "index.css";
import LandingPage from "layouts/LandingPage";

const hist = createBrowserHistory();
ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/" component={LandingPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
