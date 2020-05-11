const isArray = Array.isArray;

export const convertBarLineChart = (data, labelKey, lenged) => {
  let BarChartData = {};
  let chartdata = data;
  let xData = [];
  let yData = [];
  if (isArray(chartdata)) {
    for (let i = 0; i < lenged.length; i++) {
      let tempObj = {};
      tempObj.name = lenged[i].name;
      let keyname = lenged[i].key;
      let serisedata = [];
      for (let j = 0; j < chartdata.length; j++) {
        if (xData.indexOf(chartdata[j][labelKey]) == -1) {
          xData.push(chartdata[j][labelKey]);
        }
        serisedata.push(chartdata[j][keyname]);
      }
      tempObj.data = serisedata;
      tempObj.type = lenged[i].type;
      tempObj.stack = lenged[i].stack;
      tempObj.stackIndex = lenged[i].stackIndex;
      tempObj.barWidth = lenged[i].barWidth;
      yData.push(tempObj);
    }
  }

  BarChartData.xData = xData;
  BarChartData.yData = yData;
  return BarChartData;
};
