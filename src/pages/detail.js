/*
 * @Description:
 * @Author: wuhan
 * @Date: 2020-02-14 15:41:01
 */
import React from "react";
import { Link } from "react-router-dom";
export default class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>这是详情页</h1>
        <Link to="/">回首页</Link>
      </div>
    );
  }
}
