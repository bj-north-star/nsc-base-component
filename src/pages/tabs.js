/*
 * @Descripttion:
 * @version:
 * @Author: rxzhu
 * @Date: 2021-01-04 18:01:31
 * @LastEditors: rxzhu
 * @LastEditTime: 2021-01-05 17:55:32
 */
import React from "react";
import NscTabs from "../component/tab";
import Button from "../component/button";
import { Tabs } from "antd";

export default class NscTabsPage extends React.Component {
  contextMenu = () => {
    alert(1);
  };
  onChange = (activeKey) => {
    alert(activeKey);
  };
  render() {
    const { TabPane } = Tabs;
    const { NscTabPane } = NscTabs;
    const menu = [
      { text: "1st menu item" },
      { text: "2st menu item" },
      { text: "2st menu item" },
    ];
    return (
      <NscTabs
        contextMenuItem={menu}
        type={"card"}
        onChange={this.onChange}
        contextMenu={this.contextMenu}
      >
        <NscTabPane tab={"111"} key={111}>
          <Button>测试</Button>
        </NscTabPane>
        <NscTabPane tab={"222"} key={222}>
          <div>测试22</div>
        </NscTabPane>
      </NscTabs>
    );
  }
}
