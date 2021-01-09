/*
 * @Descripttion:
 * @version:
 * @Author: rxzhu
 * @Date: 2021-01-05 09:22:10
 * @LastEditors: rxzhu
 * @LastEditTime: 2021-01-05 18:04:16
 */
import React, { PureComponent } from "react";
import { Tabs, Dropdown, Menu } from "antd";

const { TabPane } = Tabs;

export default class NscTabs extends PureComponent {
  static NscTabPane = TabPane;
  menuOnClick(item) {
    alert(item);
  }
  getTitle = (name) => {
    const { contextMenuItem } = this.props;
    const menu = (
      <Menu>
        {contextMenuItem.map((item, index) => {
          return (
            <Menu.Item key={index} onClick={this.menuOnClick.bind(this, item)}>
              {item.text}
            </Menu.Item>
          );
        })}
      </Menu>
    );
    const title = (
      <Dropdown overlay={menu} trigger={["contextMenu"]}>
        <span>{name}</span>
      </Dropdown>
    );
    return title;
  };
  render() {
    const { contextMenuItem, children, ...params } = this.props;
    return (
      <Tabs {...params}>
        {children.map((item) => {
          const { tab, children, ...params } = item.props;
          return (
            <TabPane tab={this.getTitle(tab)} key={item.key} {...params}>
              {children}
            </TabPane>
          );
        })}
      </Tabs>
    );
  }
}
