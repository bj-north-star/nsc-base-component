import React from "react";
import ProgressBar from "@bj-nsc/progressbar";
import "@bj-nsc/progressbar/lib/main.css";
import styles from "./index.less";
import Pie from "@bj-nsc/basechart";
import demoData from "./data";
import cls from "classnames";
const data = {
  startDay: 228,
  planEndDate: "2020-09-15",
  section_model: 1,
  label: "标段总进度",
  progressValue: 36,
  progress: demoData.data.sectionProgressVos[0].progress[0].children,
};

export default class Schedule extends React.PureComponent {
  constructor(props) {
    super(props);
    const { progress = [] } = props;
    this.state = {
      activeNode: progress[0] || {},
    };
  }

  handlePieChange = (node) => {
    if (this.props.type === "line") return;
    this.setState({ activeNode: node });
  };

  getChartOptions(progressValue) {
    const cfgData = Object.assign({}, this.props.chartOptions, {
      data: {
        level1: progressValue,
        level2: 100 - progressValue,
      },
      label: progressValue + "%",
    });
    return cfgData;
  }

  render() {
    const {
      startDay,
      planEndDate,
      label,
      progressValue,
      progress = [],
      section_model,
      progressbarOptions,
      progressItemClass,
      pieItemClass,
      activePieClass,
      totalProgressOptions,
      type,
      lineLength,
      tower,
    } = this.props;
    console.log("this.props", this.props);
    const activeNode = this.state.activeNode;
    return (
      <div>
        <div className={styles["schedule-box"]}>
          <div className={styles["kg-block"]}>
            <div className={styles["kg-info"]}>
              <span>
                已开工:{" "}
                <span className={styles["kg-num"]}>{startDay || 0}</span>天
              </span>
            </div>
            <div className={styles["kg-info"]}>
              <span>预计竣工时间：</span>
              <span className={styles["kg-num"]}>{planEndDate || null}</span>
            </div>
          </div>
          {type === "line" && (
            <div className={styles["kg-block"]}>
              <div className={styles["kg-info"]}>
                <span>
                  线路长度:
                  <span className={styles["kg-num"]}>{lineLength}</span>km
                </span>
              </div>
              <div className={styles["kg-info"]}>
                <span>杆塔：</span>
                <span className={styles["kg-num"]}>{tower}</span>基
              </div>
            </div>
          )}
          <div className={styles["progress-bar-block"]}>
            <ProgressBar
              value={progressValue || 0}
              label={label}
              options={totalProgressOptions}
            />
          </div>

          <div className={styles["pie-box"]}>
            {progress.map((node) => {
              const progValue = node.progressValue || node.progress || 0;

              return (
                <div
                  onClick={this.handlePieChange.bind(this, node)}
                  key={node.nodeCode || node.id}
                  className={cls(styles["schedule-pie-item"], {
                    [styles["schedule-pie-active"]]:
                      type !== "line" && activeNode.nodeName === node.nodeName,
                    [pieItemClass]: pieItemClass,
                    [activePieClass]: activePieClass,
                  })}
                >
                  <span className={styles["pie-title"]} title={node.nodeName}>
                    {node.nodeName}
                  </span>
                  <div className={styles["pie-item"]}>
                    <Pie
                      type={"pie"}
                      cfgData={this.getChartOptions(
                        progValue === 0 ? 0 : progValue
                      )}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {type !== "line" && section_model == 1 && activeNode.children && (
            <div className={styles["node-progress"]}>
              {activeNode.children.map((item) => (
                <div
                  className={cls(styles["progress-item"], {
                    [progressItemClass]: progressItemClass,
                  })}
                  key={item.id}
                >
                  <ProgressBar
                    value={item.progress}
                    label={`${item.nodeName} (计划时间: ${item.planEndDate})`}
                    options={progressbarOptions}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
}

Schedule.defaultProps = {
  ...data,
  type: "line", // 工程类型，线路或变电
  lineLength: 0, // 线路长度
  tower: 0, // 杆塔数量
  chartOptions: {
    labelUnit: "%",
    isLoop: true,
    legendPosition: "bottom",
    legend: [
      { name: "", key: "level1" },
      { name: "", key: "level2" },
    ],
    color: ["#02D0E7", "#065C80"],
    textColor: "#b8bcc1",
  },
  progressbarOptions: {
    width: 18.75,
    height: 1,
    unit: "vw",
    bgColor: "#04415D",
    barColor: "#02D0E7",
    labelOptions: {
      fontSize: 0.8333,
      unit: "vw",
      color: "#B8BBC1",
      marginBottom: "0.5208vw",
    },
    valueOptions: {
      fontSize: 0.8333,
      unit: "vw",
      color: "#B8BBC1",
    },
  },
  progressItemClass: "",
  totalProgressOptions: {
    width: 18.75,
    height: 1.5,
    unit: "vw",
    bgColor: "#04415D",
    barColor: "#02D0E7",
    labelOptions: {
      fontSize: 0.8333,
      unit: "vw",
      color: "#B8BBC1",
      marginBottom: "0.5208vw",
    },
    valueOptions: {
      fontSize: 0.8333,
      unit: "vw",
      color: "#B8BBC1",
    },
  },
};
