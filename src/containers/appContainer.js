import React, { Component } from "react";

//containers
import MainPageContainer from "./mainpageContainer";
import RegisterConatiner from "./registerContainer";
import LoginContainer from "./loginContainer";
import DashboardContainer from "./dashboardContainer";
import IncomeListContainer from "./incomeListContainer";
import CreateIncomeContainer from "./createIncomeContainer";

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
            <Route path="/" exact component={MainPageContainer} />
            <Route path="/register" exact component={RegisterConatiner} />
            <Route path="/login" exact component={LoginContainer} />
            <Route path="/dashboard" exact component={DashboardContainer} />
            <Route path="/Income-list" exact component={IncomeListContainer} />
            <Route
              path="/cretate-Income"
              exact
              component={CreateIncomeContainer}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default withRouter(AppContainer);
