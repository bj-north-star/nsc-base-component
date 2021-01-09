import React, { Component } from "react";
import echarts from "echarts";

/**
参数说明：
value:进度值
flag:是否超出计划
color:饼图颜色(数组)
fontColor:中间字体颜色
 */
class PieChart extends Component {
  pieReactRef = React.createRef();
  componentDidMount() {
    const { onChartClick } = this.props;
    this.myChart = echarts.init(this.pieReactRef.current); //初始化echarts，通过ref属性获取dom
    window.addEventListener("resize", this.resize.bind(this));
    this.myChart.on("click", onChartClick);
    this.initChart();
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (JSON.stringify(this.props) === JSON.stringify(nextProps)) {
      return false;
    } else {
      return true;
    }
  }
  resize() {
    if (this.myChart && this.myChart.resize) {
      this.myChart.resize();
    }
  }
  componentDidUpdate() {
    this.initChart();
  }
  initChart() {
    const {
      textColor,
      label,
      color,
      data,
      bigSreen,
      showtooltip = true,
      legend = "right",
      defaultoption,
      tipTextColor,
      tipBackColor,
      labelSize,
      labelColor,
      radius = ["55%", "75%"],
      center = ["50%", "50%"],
    } = this.props;
    let vw = window.screen.width;
    let radio = vw / 1920;
    let legendData = [];
    let textStyleColor = "";
    let tipStyleColor = "";
    let labelFontSize = labelSize ? labelSize : 14;
    let labelStyleColor = "";
    let option = {};
    if (defaultoption) {
      option = defaultoption;
    } else {
      for (let i = 0; i < data.length; i++) {
        legendData.push(data[i].name);
      }
      if (textColor) {
        textStyleColor = textColor;
      } else {
        if (bigSreen) {
          textStyleColor = "#02D0E7";
        } else {
          textStyleColor = "#666666";
        }
      }
      if (labelColor) {
        labelStyleColor = labelColor;
      } else {
        if (bigSreen) {
          labelStyleColor = "#02D0E7";
        } else {
          labelStyleColor = "#666666";
        }
      }
      if (tipTextColor) {
        tipStyleColor = tipTextColor;
      } else {
        if (bigSreen) {
          tipStyleColor = "#02D0E7";
        } else {
          tipStyleColor = "#fff";
        }
      }
      option = {
        legend: {
          show: false,
        },
        grid: {
          bottom: 10 * radio,
          top: 10 * radio,
          left: 0 * radio,
          right: 0 * radio,
        },
        series: [
          {
            type: "pie",
            radius: radius,
            center: center,
            hoverAnimation: false,
            label: {
              normal: { show: false },
            },
            labelLine: {
              normal: {
                show: false,
              },
            },
            color: color,
            data: data,
          },
        ],
      };
      if (label) {
        option.series[0].label = {
          normal: {
            show: true,
            position: "center",
            formatter: function () {
              return label;
            },
            textStyle: {
              fontSize: labelFontSize * radio,
              color: labelStyleColor,
            },
          },
        };
      }
      if (showtooltip) {
        let tooltip = {
          trigger: "item",
          formatter: "{b}<br/> {c} ({d}%)",
          textStyle: {
            color: tipStyleColor,
            fontSize: 14 * radio,
          },
        };
        if (tipBackColor) {
          tooltip.backgroundColor = tipBackCorlor;
        }
        option.tooltip = tooltip;
      } else {
        option.tooltip = {
          show: false,
        };
      }
      if (legend) {
        let legendobj = {
          data: legendData,
          itemWidth: 10 * radio,
          itemHeight: 6 * radio,
          itemGap: 20 * radio,
          textStyle: {
            color: textStyleColor,
            fontSize: 14 * radio,
          },
        };
        if (legend == "right" || legend == "left") {
          legendobj.orient = "vertical";
        }
        if (legend == "right") {
          legendobj.right = 0;
          legendobj.top = "center";
        } else if (legend == "left") {
          legendobj.left = 0;
          legendobj.top = "center";
        } else if (legend == "top") {
          legendobj.top = 0;
        } else if (legend == "bottom") {
          legendobj.bottom = 0;
        }
        option.legend = legendobj;
      }
    }
    this.myChart.clear();
    this.myChart.setOption(option);
  }
  render() {
    return (
      <div
        style={{ height: "100%", width: "100%" }}
        ref={this.pieReactRef}
      ></div>
    );
  }
}

export default PieChart;
