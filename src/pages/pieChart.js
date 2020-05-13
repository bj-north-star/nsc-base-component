import React from "react";
import Pie from "../component/echarts";

export default function PieChart() {
  return (
    <div style={{ width: 400, height: 400 }}>
      <Pie
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
      />
    </div>
  );
}
