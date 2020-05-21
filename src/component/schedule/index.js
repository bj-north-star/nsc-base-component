import React from "react";

// import ProgressBar from "../progress_bar/ProgressBar";
import ProgressBar from "@bj-nsc/progressbar";
import "@bj-nsc/progressbar/lib/main.css";
import styles from "./index.less";
import Pie from "../echarts";
// import Pie from "@bj-nsc/basechart";
import demoData from "./data";
import cls from "classnames";
const data = {
  startDay: 228,
  planEndDate: "2020-09-15",
  section_model: 1,
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
    this.setState({ activeNode: node });
  };

  getChartOptions(progressValue) {
    console.log("this.props.chartOptions", this.props.chartOptions);
    const cfgData = Object.assign({}, this.props.chartOptions, {
      data: {
        level1: progressValue,
        level2: 100 - progressValue,
      },
      label: progressValue,
    });
    console.log("cfgData", JSON.stringify(cfgData));
    return cfgData;
  }

  render() {
    const {
      startDay,
      planEndDate,
      progressValue,
      progress = [],
      section_model,
      progressbarOptions,
      progressItemClass,
      pieItemClass,
      activePieClass,
    } = this.props;

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

          <div>
            <ProgressBar
              value={progressValue || 0}
              label="工程总进度"
              options={{ labelOptions: { marginBottom: "0.5208vw" } }}
            />
          </div>

          <div className={styles["pie-box"]}>
            {progress.map((node) => (
              <div
                onClick={this.handlePieChange.bind(this, node)}
                key={node.id}
                className={cls(styles["schedule-pie-item"], {
                  [styles["schedule-pie-active"]]:
                    activeNode.nodeName === node.nodeName,
                  [pieItemClass]: pieItemClass,
                  [activePieClass]: activePieClass,
                })}
              >
                <span className={styles["pie-title"]}>{node.nodeName}</span>
                <div className={styles["pie-item"]}>
                  <Pie
                    type={"pie"}
                    cfgData={this.getChartOptions(node.progress)}
                  />
                </div>
                <span className={styles["text"]}>{node.planEndDate}</span>
              </div>
            ))}
          </div>

          {section_model == 1 && activeNode.children && (
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
};
