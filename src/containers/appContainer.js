import React, { Component } from "react";

//containers
import IndexContainer from "./indexContainer";
import RegisterConatiner from "./registerContainer";
import LoginContainer from "./loginContainer";
import DashboardContainer from "./dashboardContainer";
//import IncomeListContainer from "./incomeListContainer";

//router
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
            <Route path="/register" exact component={RegisterConatiner} />
            <Route path="/login" exact component={LoginContainer} />
            <Route path="/dashboard" exact component={DashboardContainer} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default withRouter(AppContainer);
