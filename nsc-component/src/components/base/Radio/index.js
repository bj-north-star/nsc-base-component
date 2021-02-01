/*
 * @Descripttion: 单选按钮
 * @version:
 * @Author: rxzhu
 * @Date: 2021-01-15 10:44:53
 * @LastEditors: rxzhu
 * @LastEditTime: 2021-01-18 11:26:59
 */
import React, { PureComponent } from "react";
import RadioGroup from "./RadioGrop";
import { Radio } from "antd";
import "./index.less";

export default class Nsc_Radio extends PureComponent {
  static Group = RadioGroup;
  static Radio = Radio;
  static Button = Radio.Button;
  render() {
    return <>{this.props.children}</>;
  }
}
