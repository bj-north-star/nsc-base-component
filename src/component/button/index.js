/*
 * @Descripttion: 全局按钮组件
 * @version:
 * @Author: rxzhu
 * @Date: 2020-12-22 09:50:16
 * @LastEditors: rxzhu
 * @LastEditTime: 2021-01-05 10:05:19
 */

import React, { PureComponent } from "react";
import styles from "./index.less";
// import Iconfont from "../Iconfont";
import { Button } from "antd";

class BaseButton extends PureComponent {
  buttonOnClick = () => {
    this.props.onClick();
  };
  render() {
    const { icon, children } = this.props.param;
    let params = { ...this.props.param };
    return (
      <Button className={styles["button_base"]} {...params}>
        {/* <Iconfont type={icon} />  */}
        {children}
      </Button>
    );
  }
}

class DeleteButton extends PureComponent {
  buttonOnClick = () => {
    this.props.onClick();
  };
  render() {
    const { icon = "iconshanchu1", children } = this.props.param;
    let params = { ...this.props.param };
    return (
      <Button className={styles["button_delete"]} {...params}>
        {/* <Iconfont type={icon} />  */}
        {children}
      </Button>
    );
  }
}

export default class NscButton extends PureComponent {
  render() {
    const { type } = this.props;
    let param = { ...this.props };
    if (type == "delete") {
      return <DeleteButton param={param} />;
    } else {
      return <BaseButton param={param} />;
    }
  }
}
