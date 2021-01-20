/*
 * @Descripttion: 全局按钮组件
 * @version:
 * @Author: rxzhu
 * @Date: 2020-12-22 09:50:16
 * @LastEditors: rxzhu
 * @LastEditTime: 2021-01-15 10:43:20
 */

import React, { PureComponent } from "react";
import styles from "./index.less";
import Iconfont from "../Iconfont";
import { Button } from "antd";
import cls from "classnames";

export default class NscButton extends PureComponent {
  render() {
    const { type = "default", icon, children, ...params } = this.props;
    const classes = type;
    return (
      <Button className={cls(styles["button_base"], styles[type])} {...params}>
        {icon && <Iconfont type={icon} />}
        {children}
      </Button>
    );
  }
}
