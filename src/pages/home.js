/*
 * @Description:
 * @Author: wuhan
 * @Date: 2020-02-14 13:49:49
 */
import React from "react";
import { Link } from "react-router-dom";
import Nsc_Echarts from "../component/echarts/index";
export default class Home extends React.Component {
  render() {
    const riskDataByDate = [
      { time: "2020-05-06", level1: 10, level2: 8, level3: 5, level4: 1 },
      { time: "2020-05-07", level1: 9, level2: 7, level3: 4, level4: 1 },
      { time: "2020-05-08", level1: 8, level2: 4, level3: 3, level4: 2 },
      { time: "2020-05-09", level1: 11, level2: 5, level3: 2, level4: 1 },
      { time: "2020-05-10", level1: 12, level2: 7, level3: 1, level4: 3 },
      { time: "2020-05-11", level1: 8, level2: 6, level3: 2, level4: 0 },
      { time: "2020-05-12", level1: 7, level2: 8, level3: 0, level4: 0 },
    ];
    return (
      <div style={{ width: "100%", height: "100%" }}>
        <div style={{ width: 400, height: 400 }}>
          <Nsc_Echarts
            type={"line"}
            cfgData={{
              data: riskDataByDate,
              color: ["#2BD50F", "#A0FD1B", "#FDDA1B", "#FD601B"],
              labelKey: "time",
              legend: [
                { name: "1级", key: "level1", type: "line" },
                { name: "2级", key: "level2", type: "line" },
                { name: "3级", key: "level3", type: "line" },
                { name: "4级", key: "level4", type: "line" },
              ],
              // lineColor: "rgba(255,255,255,0.6)",
              // textColor: "rgba(255,255,255,0.6)",
              legendPosition: "topcenter",
            }}
          />
        </div>
      </div>
    );
  }
}
