const isArray = Array.isArray;

export const convertBarLineChart = (data, labelKey, legend) => {
  let BarChartData = {};
  let chartdata = data;
  let xData = [];
  let yData = [];
  if (isArray(chartdata)) {
    for (let i = 0; i < legend.length; i++) {
      let tempObj = {};
      tempObj.name = legend[i].name;
      let keyname = legend[i].key;
      let serisedata = [];
      for (let j = 0; j < chartdata.length; j++) {
        if (xData.indexOf(chartdata[j][labelKey]) == -1) {
          xData.push(chartdata[j][labelKey]);
        }
        serisedata.push(chartdata[j][keyname]);
      }
      tempObj.data = serisedata;
      tempObj.type = legend[i].type;
      tempObj.stack = legend[i].stack;
      tempObj.stackIndex = legend[i].stackIndex;
      tempObj.barWidth = legend[i].barWidth;
      yData.push(tempObj);
    }
  }

  BarChartData.xData = xData;
  BarChartData.yData = yData;
  return BarChartData;
};

export const converPieChart = (data, legend) => {
  let PieChartData = [];
  for (let i = 0; i < legend.length; i++) {
    let keyname = legend[i].key;
    let temp = {};
    temp.name = legend[i].name;
    temp.value = data[keyname];
    PieChartData.push(temp);
  }
  return PieChartData;
};
