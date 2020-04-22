import React, { Component } from "react";

import IndexContainer from "./indexContainer";

import {
  BrowserRouter as Router,
  Route,
  withRouter,
  Switch
} from "react-router-dom";

class AppContainer extends Component {
  render() {
    return (
      <Router>
        <div>
          {/*  Bind the `URL path` to the `Component` you want to construct / mount / render. */}
          <Switch>
            <Route path="/" exact component={IndexContainer} />
            <Route path="/login" exact component={LoginContainer} />
            <Route path="/singup" exact component={SingupConatiner} />
            <Route path="/dashboard" exact component={DashboardContainer} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default withRouter(AppContainer);
