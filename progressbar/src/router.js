import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import ProgressBar from "./components";
const BasicRoute = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={ProgressBar} />
    </Switch>
  </HashRouter>
);

export default BasicRoute;
