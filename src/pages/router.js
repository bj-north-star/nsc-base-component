/*
 * @Description:
 * @Author: wuhan
 * @Date: 2020-02-14 13:50:38
 */
import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "./home";
import Detail from "./detail";
const BasicRoute = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/detail" component={Detail} />
    </Switch>
  </HashRouter>
);

export default BasicRoute;
