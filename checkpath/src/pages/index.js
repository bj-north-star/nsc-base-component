import React from "react";
import MyComponent from "../components";
import styles from "./index.less";
export default function Index() {
  const data = [
    {
      sort: 1,
      towerName: "P16",
      longitude: 113.293245,
      latitude: 27.424557,
    },
    {
      sort: 3,
      towerName: "P17",
      longitude: 112.300269,
      latitude: 25.424374,
    },
    {
      sort: 2,
      towerName: "P18",
      longitude: 112.828213,
      latitude: 22.468469,
    },
  ];
  return (
    <div className={styles["box"]}>
      <MyComponent data={data} />
    </div>
  );
}
