import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import MyPage from "./pages";
const BasicRoute = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={MyPage} />
    </Switch>
  </HashRouter>
);

export default BasicRoute;
