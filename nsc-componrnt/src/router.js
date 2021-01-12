/*
 * @Descripttion: 
 * @version: 
 * @Author: rxzhu
 * @Date: 2021-01-12 14:52:01
 * @LastEditors: rxzhu
 * @LastEditTime: 2021-01-12 16:57:01
 */
import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import MyPage from "./pages";
import ButtonPage from "./pages/button";
const BasicRoute = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={MyPage} />
      <Route exact path="/button" component={ButtonPage} />
    </Switch>
  </HashRouter>
);

export default BasicRoute;
