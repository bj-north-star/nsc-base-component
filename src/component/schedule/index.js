import React from "react";
import styles from "./index.less";
import ProgressBar from "../progress_bar/ProgressBar";
import Pie from "../echarts";
import demoData from "./data";
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

  render() {
    const {
      startDay,
      planEndDate,
      progressValue,
      progress = [],
      section_model,
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

          <div className={styles["total-progress"]}>
            <ProgressBar
              value={progressValue || 0}
              label="工程总进度"
              options={{ labelOptions: { marginBottom: 10 } }}
            />
          </div>

          <div className={styles["pie-box"]}>
            {progress.map((node) => (
              <div
                onClick={this.handlePieChange.bind(this, node)}
                key={node.id}
                className={
                  activeNode.nodeName === node.nodeName ? styles["active"] : ""
                }
              >
                <span className={styles["pie-title"]}>{node.nodeName}</span>
                <div>
                  <Pie
                    type={"pie"}
                    cfgData={{
                      data: {
                        level1: node.progress,
                        level2: 100 - node.progress,
                      },
                      color: ["#02D0E7", "#065C80"],
                      label: node.progress,
                      labelunit: "%",
                      isloop: true,
                      legendposition: "bottom",
                      textColor: "#b8bcc1",
                      legend: [
                        { name: "", key: "level1" },
                        { name: "", key: "level2" },
                      ],
                    }}
                  />
                </div>
                <span className={styles["text"]}>{node.planEndDate}</span>
              </div>
            ))}
          </div>

          {section_model == 1 && activeNode.children && (
            <div className={styles["node-progress"]}>
              {activeNode.children.map((item) => (
                <div className={styles["progress-item"]} key={item.id}>
                  <ProgressBar
                    value={item.progress}
                    label={`${item.nodeName} (计划时间: ${item.planEndDate})`}
                    options={{
                      height: 8,
                    }}
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

Schedule.defaultProps = data;
