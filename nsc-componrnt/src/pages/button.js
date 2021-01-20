/*
 * @Descripttion:
 * @version:
 * @Author: rxzhu
 * @Date: 2021-01-12 15:34:25
 * @LastEditors: rxzhu
 * @LastEditTime: 2021-01-20 19:28:31
 */
import React, { PureComponent } from "react";
import Button from "../components/base/Button";
import Upload from "../components/base/Upload";
import Radio from "../components/base/Radio";
import Self from "./Self";
export default class ButtonPage extends PureComponent {
  state = {
    active: 1,
  };
  onGroupChange(value) {
    console.log("value", value);
  }
  onGroupChange2(value) {
    console.log("value", value);
    this.setState({
      active: value,
    });
  }
  render() {
    const props = {
      serviceName: "eic-home-web",
      busiName: "hometest",
      // accept: "image/*",
      aotoUpload: false,
      onChange: (e) => {
        alert("onchange");
        console.log(e);
      },
    };
    return (
      <div>
        <Button onClick={this.onClick} disabled>
          查询
        </Button>
        <Button onClick={this.onClick}>删除</Button>
        <Upload {...props}>
          <Button>上传测试</Button>
        </Upload>
        <Radio.Group onChange={this.onGroupChange.bind(this)}>
          <Radio.Button value={1}>1</Radio.Button>
          <Radio.Button value={2}>2</Radio.Button>
        </Radio.Group>
        <Radio.Group
          onChange={this.onGroupChange2.bind(this)}
          customize={true}
          active={this.state.active}
        >
          <Self value={1}>使用余额支付</Self>
          <Self value={2}>使用微信支付</Self>
        </Radio.Group>
      </div>
    );
  }
}
