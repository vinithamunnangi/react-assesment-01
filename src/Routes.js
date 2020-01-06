import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Home from "./Home";
import IssueDetail from "./IssueDetail";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={props => <Home {...props} />} />
        <Route exact path="/issue/:id">
          <IssueDetail />
        </Route>
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
}

export default Routes;
