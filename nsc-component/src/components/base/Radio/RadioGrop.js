/*
 * @Descripttion:
 * @version:
 * @Author: rxzhu
 * @Date: 2021-01-15 15:14:31
 * @LastEditors: rxzhu
 * @LastEditTime: 2021-01-28 09:27:58
 */
import React, { Component } from "react";
import { Radio } from "antd";

export default class RadioGroup extends Component {
  handleActiveChange(value) {
    this.props.onChange(value);
  }

  render() {
    const { children, customize = false } = this.props;
    if (customize) {
      return children.map((child, index) => {
        let isActive = this.props.value === child.props.value ? true : false;
        return React.cloneElement(child, {
          label: child.props.children,
          value: child.props.value,
          active: isActive,
          onClick: this.handleActiveChange.bind(this, child.props.value),
          key: index,
        });
      });
    } else {
      return <Radio.Group {...this.props} />;
    }
  }
}
