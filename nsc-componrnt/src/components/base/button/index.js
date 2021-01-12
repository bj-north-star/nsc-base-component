/*
 * @Descripttion: 全局按钮组件
 * @version:
 * @Author: rxzhu
 * @Date: 2020-12-22 09:50:16
 * @LastEditors: rxzhu
 * @LastEditTime: 2021-01-12 17:16:31
 */

import React, { PureComponent } from "react";
import styles from "./index.less";
import Iconfont from "../Iconfont";
import { Button } from "antd";

class BaseButton extends PureComponent {
  render() {
    const { icon, children, ...params } = this.props.param;
    return (
      <Button className={styles["button_base"]} {...params}>
        {icon && <Iconfont type={icon} />}
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
    const { icon = "iconshanchu1", children, ...params } = this.props.param;
    return (
      <Button className={styles["button_delete"]} {...params}>
        {icon && <Iconfont type={icon} />}
        {children}
      </Button>
    );
  }
}

export default class NscButton extends PureComponent {
  render() {
    const { type, ...param } = this.props;
    if (type == "delete") {
      return <DeleteButton param={param} />;
    } else {
      return <BaseButton param={param} />;
    }
  }
}
