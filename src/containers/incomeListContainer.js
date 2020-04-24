import React, { Component } from "react";

import IncomeListComponen from "../components/lists/incomeListComponent";
import IncomeDAO from "../models/incomeDAO";

export default class IncomeListContainer extends Component {
  constructor(props) {
    super(props);

    const dao = new IncomeDAO();
    const trees = dao.getList();
    this.state = {
      trees: trees
    };
  }

  render() {
    const { trees } = this.state;
    return <IncomeListComponen trees={trees} />;
  }
}
