import React, { PureComponent } from "react";
import styles from "./Test.less";
class Test extends PureComponent {
  render() {
    return <div className={styles["background"]}>测试组件</div>;
  }
}

export default Test;
