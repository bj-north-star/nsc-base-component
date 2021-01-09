/*
 * @Description:
 * @Author: wuhan
 * @Date: 2020-02-14 13:50:38
 */
import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "./home";
import Detail from "./detail";
import PieChart from "../pages/pieChart";
import SchedulePage from "./schedule";
import ProgressBar from "../pages/progressBar";
import NscTabsPage from '../pages/tabs';
const BasicRoute = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/detail" component={Detail} />
      <Route exact path="/pieChart" component={PieChart} />
      <Route exact path="/schedule" component={SchedulePage} />
      <Route exact path="/progressbar" component={ProgressBar} />
      <Route exact path="/tabs" component={NscTabsPage} />
    </Switch>
  </HashRouter>
);

export default BasicRoute;
