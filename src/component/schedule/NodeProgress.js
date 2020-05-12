/*
 * @Description:
 * @Author: wuhan
 * @Date: 2019-12-11 20:59:07
 */
import React, { Component } from "react";
import styles from "./NodeProgress.less";
import ProgressBar from "../progress_bar/ProgressBar";

class NodeProgress extends Component {
  render() {
    const { procedure, time, value, flag } = this.props;
    let plantime = "";
    let left;
    let color = "#007EFE",
      textcolor = "";
    if (time) {
      plantime = "计划结束：(" + time + ")";
      left = <div className={styles["plantime"]}>{plantime}</div>;
    }
    if (!flag) {
      color = "red";
    }
    return (
      <div className={styles["progress"]}>
        <div className={styles["left"]}>
          <div className={styles["procedure"]}>{procedure}</div>
          {left}
        </div>
        <div className={styles["right"]}>
          <ProgressBar value={value} />
        </div>
      </div>
    );
  }
}

export default NodeProgress;
