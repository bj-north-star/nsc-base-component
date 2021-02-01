/*
 * @Descripttion:
 * @version:
 * @Author: rxzhu
 * @Date: 2021-01-19 11:13:58
 * @LastEditors: rxzhu
 * @LastEditTime: 2021-01-20 19:27:39
 */
import React, { Component } from "react";
import styles from "./Self.less";
import cls from "classnames";
class Self extends Component {
  render() {
    const { active } = this.props;
    return (
      <div
        className={styles["radio-wrap"]}
        onClick={this.props.onClick.bind(this, this.props.value)}
      >
        <div className={styles["left"]}>
          <div
            className={cls(styles["circle"], {
              [styles["active"]]: active,
            })}
          >
            <div className={styles["fork"]}></div>
          </div>
          <div className={styles["label"]}>{this.props.label}</div>
        </div>
      </div>
    );
  }
}
export default Self;
