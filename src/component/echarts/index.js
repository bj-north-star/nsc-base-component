import React, { PureComponent } from "react";
import BarLineChar from "./BarLineChart";
import PieChart from "./PieChart";
import { convertBarLineChart, converPieChart } from "./function";

class Pie extends PureComponent {
  render() {
    const {
      type,
      cfgData,
      option,
      onChartClick,
      bigSreen,
      convertData = true,
    } = this.props;
    if (type == "bar" || type == "line") {
      if (!option) {
        let {
          data,
          labelKey,
          legend,
          isXY,
          lineColor,
          textColor,
          color,
          showDifferent,
          tipTextColor,
          tipBackColor,
        } = cfgData;
        if (convertData) {
          data = convertBarLineChart(data, labelKey, legend);
        }
        return (
          <BarLineChar
            data={data}
            color={color}
            isXY={isXY}
            onChartClick={onChartClick}
            bigSreen={bigSreen}
            lineColor={lineColor}
            textColor={textColor}
            showDifferent={showDifferent}
            tipBackColor={tipBackColor}
            tipTextColor={tipTextColor}
          />
        );
      } else {
        return (
          <BarLineChar defaultoption={option} onChartClick={onChartClick} />
        );
      }
    } else if (type == "pie") {
      if (!option) {
        let {
          data,
          legend,
          textColor,
          legendposition,
          label,
          labelunit,
          color,
          showtooltip,
          tipBackColor,
          tipTextColor,
          isloop,
        } = cfgData;
        if (convertData) {
          data = converPieChart(data, legend);
        }
        return (
          <PieChart
            data={data}
            legend={legendposition}
            textColor={textColor}
            label={label}
            labelunit={labelunit}
            color={color}
            showtooltip={showtooltip}
            isloop={isloop}
            onChartClick={onChartClick}
            tipBackColor={tipBackColor}
            tipTextColor={tipTextColor}
          />
        );
      } else {
        return <PieChart defaultoption={option} onChartClick={onChartClick} />;
      }
    } else {
      return null;
    }
  }
}

export default Pie;
