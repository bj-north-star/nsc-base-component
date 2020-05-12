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
  state = {
    activeNode: this.props.progress[0],
  };

  handlePieChange = (node) => {
    this.setState({ activeNode: node });
  };

  render() {
    const node1 = {
      id: "1197511956072765630",
      executionId: null,
      planStartDate: "2019-09-30",
      planEndDate: "2020-05-30",
      nodeName: "土建",
      nodeCode: "xmjdbd-01",
      parentNodeCode: "1616C017002H06",
      progress: 39.0,
      progressPostId: "1254701712711618561",
      submitTime: "2020-04-27",
      auditStatus: 1,
    };
    const node2 = {
      id: "1197511956072765631",
      executionId: null,
      planStartDate: "2019-09-31",
      planEndDate: "2020-05-31",
      nodeName: "土建",
      nodeCode: "xmjdbd-02",
      parentNodeCode: "1616C017002H08",
      progress: 76.0,
      progressPostId: "1254701712711618561",
      submitTime: "2020-05-17",
      auditStatus: 1,
    };

    const progress1 = {
      id: "1197511956072765665",
      executionId: null,
      planStartDate: "2019-10-10",
      planEndDate: "2020-01-01",
      nodeName: "地下室混凝土结构",
      nodeCode: "xmjdbd_407--002",
      parentNodeCode: "xmjdbd_348--004",
      progress: 54.0,
      progressPostId: "1254701715253366785",
      submitTime: "2020-04-27",
      auditStatus: 1,
      children: null,
      towerIDs: [],
      completion: 54.0,
      parentKey: "xmjdbd_348--004",
      key: "xmjdbd_407--002",
    };

    const progress2 = {
      id: "1197511956072765666",
      executionId: null,
      planStartDate: "2019-10-10",
      planEndDate: "2019-12-31",
      nodeName: "设备基础",
      nodeCode: "xmjdbd_408--003",
      parentNodeCode: "xmjdbd_348--004",
      progress: 60.0,
      progressPostId: "1254701715668602882",
      submitTime: "2020-04-27",
      auditStatus: 1,
      children: null,
      towerIDs: [],
      completion: 60.0,
      parentKey: "xmjdbd_348--004",
      key: "xmjdbd_408--003",
    };
    const progressData = [progress1, progress2];

    const {
      startDay,
      planEndDate,
      progressValue,
      progress,
      section_model,
    } = this.props;
    const activeNode = this.state.activeNode;
    return (
      <div>
        <div className={styles["schedule-box"]}>
          <div className={styles["kg-block"]}>
            <div className={styles["kg-info"]}>
              <span>
                已开工: <span className={styles["kg-num"]}>{startDay}</span>天
              </span>
            </div>
            <div className={styles["kg-info"]}>
              <span>预计竣工时间：</span>
              <span className={styles["kg-num"]}>{planEndDate}</span>
            </div>
          </div>

          <div className={styles["total-progress"]}>
            <ProgressBar value={progressValue} label="工程总进度" />
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
                      data: { level1: 36, level2: 64 },
                      color: ["#2BD50F", "#FED723"],
                      label: 35,
                      labelunit: "%",
                      isloop: true,
                      showtooltip: true,
                      legendposition: "bottom",
                      legend: [
                        { name: "", key: "level1" },
                        { name: "", key: "level2" },
                      ],
                    }}
                  />
                </div>
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
