/*
 * @Descripttion:
 * @version:
 * @Author: rxzhu
 * @Date: 2021-01-13 09:41:48
 * @LastEditors: rxzhu
 * @LastEditTime: 2021-01-13 17:57:20
 */
import React, { PureComponent } from "react";
import { Progress } from "antd";

export default class Nsc_Progress extends PureComponent {
  render() {
    return <Progress {...this.props} />;
  }
}
