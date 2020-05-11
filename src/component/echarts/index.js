import React, { PureComponent } from "react";
import BarLineChar from "./BarLineChart";
import { convertBarLineChart } from "./function";

class Nsc_Echarts extends PureComponent {
  render() {
    const { type, cfgData, color, option, onChartClick, bigSreen } = this.props;
    if (type == "bar" || type == "line") {
      if (!option) {
        let { data, labelKey, lenged, isXY, lineColor, textColor } = cfgData;
        data = convertBarLineChart(data, labelKey, lenged);
        return (
          <BarLineChar
            data={data}
            color={color}
            isXY={isXY}
            onChartClick={onChartClick}
            bigSreen={bigSreen}
            lineColor={lineColor}
            textColor={textColor}
          />
        );
      } else {
        return (
          <BarLineChar defaultoption={option} onChartClick={onChartClick} />
        );
      }
    } else {
      return null;
    }
  }
}

export default Nsc_Echarts;
