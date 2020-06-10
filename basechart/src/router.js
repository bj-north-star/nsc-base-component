/*
 * @Descripttion:
 * @version:
 * @Author: rxzhu
 * @Date: 2020-06-10 14:38:50
 * @LastEditors: rxzhu
 * @LastEditTime: 2020-06-10 14:54:45
 */

import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import MyComponent from "./pages";
import Line from "./pages/line";
const BasicRoute = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={MyComponent} />
    </Switch>
    <Switch>
      <Route exact path="/line" component={Line} />
    </Switch>
  </HashRouter>
);

export default BasicRoute;
