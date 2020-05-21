/*
 * @Description:
 * @Author: wuhan
 * @Date: 2020-05-21 15:42:02
 */
import React from "react";
// import ProgressBar from "../component/progress_bar/ProgressBar";
import ProgressBar from "@bj-nsc/progressbar";
export default function ProgressBarPage() {
  const labelOptions = {
    direction: "row",
    marginBottom: 10,
  };
  const valueOptions = {
    fontSize: 20,
    unit: "px",
    color: "red",
  };
  const options = {
    labelOptions,
    valueOptions,
    height: 40,
    showLabel: true,
    radius: "1vw",
  };
  return (
    <div style={{ width: 500 }}>
      <ProgressBar options={options} />
    </div>
  );
}
