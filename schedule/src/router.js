import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import MyComponent from "./components";
const BasicRoute = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={MyComponent} />
    </Switch>
  </HashRouter>
);

export default BasicRoute;
