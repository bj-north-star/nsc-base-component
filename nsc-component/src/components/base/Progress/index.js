/*
 * @Descripttion:
 * @version:
 * @Author: rxzhu
 * @Date: 2021-01-13 09:41:48
 * @LastEditors: rxzhu
 * @LastEditTime: 2021-01-14 15:19:45
 */
import React, { PureComponent } from "react";
import { Progress } from "antd";
import "./index.less";

export default class Nsc_Progress extends PureComponent {
  render() {
    return <Progress {...this.props} />;
  }
}
