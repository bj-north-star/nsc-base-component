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
          legendPosition,
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
            legend={legendPosition}
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
          legendPosition,
          label,
          labelUnit,
          color,
          showtooltip,
          tipBackColor,
          tipTextColor,
          isLoop,
          labelSize,
          labelColor,
        } = cfgData;
        if (convertData) {
          data = converPieChart(data, legend);
        }
        return (
          <PieChart
            data={data}
            legend={legendPosition}
            textColor={textColor}
            label={label}
            labelUnit={labelUnit}
            color={color}
            showtooltip={showtooltip}
            isLoop={isLoop}
            onChartClick={onChartClick}
            tipBackColor={tipBackColor}
            tipTextColor={tipTextColor}
            labelSize={labelSize}
            labelColor={labelColor}
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
