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
    return (
      <div style={{ width: "100%", height: "100%" }}>
        {/* <h1>这是首页</h1>

        <Link to="/detail">去详情页</Link> */}
        <div style={{ width: 400, height: 400 }}>
          <Nsc_Echarts
            type={"pie"}
            cfgData={{
              data: { level1: 34, level2: 64, level3: 100 },
              color: ["#2BD50F", "#FED723", "#EF3452"],
              label: 35,
              labelunit: "%",
              isloop: true,
              showtooltip: true,
              legendposition: "bottom",
              legend: [
                { name: "风险等级1", key: "level1" },
                { name: "风险等级2", key: "level2" },
                { name: "风险等级3", key: "level3" },
              ],
            }}

            // convertData={false}
          />
          {/* <Nsc_Echarts
            type={"bar"}
            cfgData={{
              data: [
                {
                  shortName: "特高压办",
                  count: 2,
                },
                {
                  shortName: "张家界公司",
                  count: 26,
                },
                {
                  shortName: "湘西公司",
                  count: 17,
                },
                {
                  shortName: "邵阳公司",
                  count: 36,
                },
                {
                  shortName: "怀化公司",
                  count: 58,
                },
                {
                  shortName: "永州公司",
                  count: 35,
                },
                {
                  shortName: "郴州公司",
                  count: 23,
                },
                {
                  shortName: "益阳公司",
                  count: 34,
                },
                {
                  shortName: "娄底公司",
                  count: 11,
                },
                {
                  shortName: "常德公司",
                  count: 39,
                },
                {
                  shortName: "岳阳公司",
                  count: 52,
                },
                {
                  shortName: "衡阳公司",
                  count: 30,
                },
                {
                  shortName: "湘潭公司",
                  count: 40,
                },
                {
                  shortName: "株洲公司",
                  count: 19,
                },
                {
                  shortName: "长沙公司",
                  count: 67,
                },
                {
                  shortName: "建设公司",
                  count: 104,
                },
              ],
              labelKey: "shortName",
              lenged: [
                {
                  name: "工程数",
                  key: "count",
                  type: "bar",
                },
              ],
              isXY: true,
               color={["#2BD50F", "#FED723"]}
            }}
           
          /> */}
        </div>
      </div>
    );
  }
}
