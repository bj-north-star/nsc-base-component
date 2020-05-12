import React, { PureComponent } from "react";
import echarts from "echarts";

class BarLineChart extends PureComponent {
  barlineReactRef = React.createRef();
  componentDidMount() {
    if (!this.myChart) {
      const { onChartClick } = this.props;
      this.myChart = echarts.init(this.barlineReactRef.current); //初始化echarts，通过ref属性获取dom
      window.addEventListener("resize", this.resize.bind(this));
      this.myChart.on("click", onChartClick);
      this.initChart();
    }
  }

  resize() {
    if (this.myChart && this.myChart.resize) {
      this.myChart.resize();
    }
  }

  componentWillUnmount() {
    this.myChart.dispose();
    this.myChart = null;
    window.removeEventListener("resize", this.resize.bind(this));
  }

  //   shouldComponentUpdate(nextProps, nextState) {
  //     const data = nextProps.data;
  //     if (JSON.stringify(this.props) === JSON.stringify(nextProps)) {
  //       return false;
  //     } else {
  //       return true;
  //     }
  //   }
  componentDidUpdate() {
    this.initChart();
  }
  initChart() {
    const {
      data,
      color,
      isXY,
      defaultoption,
      bigSreen,
      lineColor,
      textColor,
      tipTextColor,
      tipBackColor,
      showDifferent
    } = this.props;
    let vw = window.screen.width;
    let radio = vw / 1920;
    let legend = [];
    let series = [];
    let baseBarWidth = 10 * radio;
    let lineStyleColor = "";
    let textStyleColor = "";
    let tipStyleColor = "";
    if (lineColor) {
      lineStyleColor = lineColor;
    } else {
      if (bigSreen) {
        lineStyleColor = "#02D0E7";
      } else {
        lineStyleColor = "#666666";
      }
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
    if (tipTextColor) {
      tipStyleColor = tipTextColor;
    } else {
      if (bigSreen) {
        tipStyleColor = "#02D0E7";
      } else {
        tipStyleColor = "#fff";
      }
    }

    let option = {};
    if (defaultoption) {
      option = defaultoption;
    } else {
      if (data) {
        const ydata = data.yData;
        for (let i = 0; i < ydata.length; i++) {
          legend.push(ydata[i].name);
          let stack = "";
          let barWidth = baseBarWidth;
          if (ydata[i].stack) {
            stack = ydata[i].stackIndex;
          }
          if (ydata[i].barWidth) {
            barWidth = ydata[i].barWidth * radio;
          }
          let serie = {
            name: ydata[i].name,
            type: ydata[i].type,
            barGap: 0,
            barWidth: barWidth,
            stack: stack,
            data: ydata[i].data,
          };
          series.push(serie);
        }
        if (series.length == 0) {
          if (showDifferent) {
            let itemStyle = {
              normal: {
                color: function (params) {
                  var colorList = color;
                  return colorList[params.dataIndex];
                },
              },
            };
            series[0].itemStyle = itemStyle;
          }
        }
        option = {
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "shadow",
            },
            textStyle: {
              color: textStyleColor,
              fontSize: 14 * radio,
            },
          },
          legend: {
            data: legend,
            right: 20 * radio,
            top: 10 * radio,
            itemWidth: 10 * radio,
            itemHeight: 6 * radio,
            itemGap: 20 * radio,
            textStyle: {
              color: textStyleColor,
              fontSize: 14 * radio,
            },
          },
          grid: {
            top: 40 * radio,
            left: 50 * radio,
            right: 40 * radio,
            bottom: 65 * radio,
          },
          xAxis: [
            {
              type: "category",
              data: data.xData,
              axisLine: {
                lineStyle: {
                  color: lineStyleColor,
                  width: 1 * radio,
                },
              },
              axisLabel: {
                // interval: 0,
                // formatter: function(value) {
                //   //x轴的文字改为竖版显示
                //   var str = value.split('');
                //   return str.join('\n');
                // },
                textStyle: {
                  fontSize: 12 * radio,
                  color: textStyleColor,
                },
              },
            },
          ],
          yAxis: [
            {
              type: "value",
              axisLine: {
                lineStyle: {
                  color: lineStyleColor,
                  width: 1 * radio,
                },
              },
              axisLabel: {
                textStyle: {
                  fontSize: 12 * radio,
                  color: lineStyleColor,
                },
              },
              splitLine: {
                show: true,
                lineStyle: {
                  color: lineStyleColor,
                  width: 1 * radio,
                },
              },
            },
          ],
          series: series,
        };
        if (color) {
          option.color = color;
        } else {
          option.color = ["#2BD50F", "#1663B4", "#FED723"];
        }
        if (tipBackColor) {
          option.tooltip.backgroundColor = tipBackCorlor;
        }
        if (isXY) {
          let yxAxis = option.xAxis;
          let xyAxis = option.yAxis;
          option.yAxis = yxAxis;
          option.xAxis = xyAxis;
          option.grid = {
            top: 40 * radio,
            left: 80 * radio,
            right: 30 * radio,
            bottom: 40 * radio,
          };
        }
      }
    }
    this.myChart.clear();
    this.myChart.setOption(option);
  }
  render() {
    return (
      <div
        style={{ width: "100%", height: "100%" }}
        ref={this.barlineReactRef}
      ></div>
    );
  }
}

export default BarLineChart;
