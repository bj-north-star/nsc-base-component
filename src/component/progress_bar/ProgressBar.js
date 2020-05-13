/*
 * @Description:
 * @Author: wuhan
 * @Date: 2019-12-11 20:59:07
 */
import React, { Component } from "react";
import styles from "./ProgressBar.less";

class ProgressBar extends Component {
  render() {
    const { value, label, options, defaultOptions } = this.props;
    const componentOptions = Object.assign({}, defaultOptions, options);
    const {
      bgColor,
      barColor,
      width,
      height,
      unit,
      labelOptions,
      valueOptions,
    } = componentOptions;
    const { fontSize, color } = labelOptions;
    const valueFontSize = valueOptions.fontSize;
    const valueFontUnit = valueOptions.unit;
    const valueColor = valueOptions.color;

    const labelStyle = {
      ...labelOptions,
      fontSize: `${fontSize}${labelOptions.unit || "px"}`,
      color,
    };

    const valueStyle = {
      ...valueOptions,
      fontSize: `${valueFontSize}${valueFontUnit || "px"}`,
      color: valueColor,
    };

    return (
      <div className={styles["progress-bar-box"]}>
        <div
          className={styles["progress-label"]}
          style={labelStyle}
          title={label}
        >
          {label}
        </div>
        <div className={styles["total"]}>
          <div
            className={styles["bar_back"]}
            style={{
              backgroundColor: bgColor,
              width: `${width}${unit}`,
              height: `${height}${unit}`,
              borderColor: bgColor,
            }}
          >
            <div
              className={styles["progress_bar"]}
              style={{ width: value + "%", backgroundColor: barColor }}
            ></div>
          </div>
          <div className={styles["text"]} style={valueStyle}>{`${value}%`}</div>
        </div>
      </div>
    );
  }
}

ProgressBar.defaultProps = {
  value: 0,
  label: "工程总进度",
  defaultOptions: {
    width: 360,
    height: 24,
    unit: "px",
    bgColor: "#04415D",
    barColor: "#02D0E7",
    labelOptions: {
      fontSize: 16,
      unit: "px",
      color: "#B8BBC1",
    },
    valueOptions: {
      fontSize: 16,
      unit: "px",
      color: "#B8BBC1",
    },
  },
};

export default ProgressBar;
