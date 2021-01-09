import React from "react";
import MyComponent from "../components";
import styles from "./index.less";
export default function Index() {
  return (
    <div className={styles["box"]}>
      <MyComponent />
    </div>
  );
}
