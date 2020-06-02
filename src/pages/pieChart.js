/*
 * @Descripttion:
 * @version:
 * @Author: rxzhu
 * @Date: 2020-05-13 18:21:23
 * @LastEditors: rxzhu
 * @LastEditTime: 2020-06-02 19:22:22
 */

import React from "react";
import Pie from "../component/echarts";

export default function PieChart() {
  return (
    <div style={{ width: 400, height: 400 }}>
      <Pie
        type={"pie"}
        cfgData={{
          data: [
            { name: "风险等级1", value: 10 },
            { name: "风险等级2", value: 20 },
            { name: "风险等级3", value: 5 },
          ],
          color: ["#2BD50F", "#FD601B", "#1663B4"],
          // textColor: "rgba(255,255,255,0.6)",
          radius: ["40%", "60%"],
          showtooltip: true,
          legendPosition: false,
        }}
        convertData={false}
      />
    </div>
  );
}
