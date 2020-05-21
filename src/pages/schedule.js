/*
 * @Description:
 * @Author: wuhan
 * @Date: 2020-05-12 09:34:21
 */
import React from "react";
import Schedule from "../component/schedule";

export default function SchedulePage() {
  return (
    <div>
      <div
        style={{
          width: 500,
          padding: "0 20px",
          background: "rgba(22, 99, 180, 0.9)",
        }}
      >
        <Schedule />
      </div>
    </div>
  );
}
