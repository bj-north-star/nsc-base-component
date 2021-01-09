/*
 * @Descripttion: 
 * @version: 
 * @Author: rxzhu
 * @Date: 2020-06-10 14:38:50
 * @LastEditors: rxzhu
 * @LastEditTime: 2020-06-10 14:52:28
 */ 
import React from "react";
import Pie from "../components";
export default function Index() {
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
          center: ["40%", "50%"],
          showtooltip: true,
          // legendPosition: false,
        }}
        convertData={false}
      />
    </div>
  );
}
