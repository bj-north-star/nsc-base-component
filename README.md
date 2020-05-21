# @bj-nsc/basechart

工程进度表，可以查看工程开工竣工时间，总进度和子节点进度等信息

## 安装和使用

**npm 安装**

```
npm i "@bj-nsc/basechart
```

**yarn 安装**

```
yarn add "@bj-nsc/basechart
```

在代码里使用

```javascript
import Chart from "@bj-nsc/basechart";

<Chart type={"bar"} cfgData={{ data: [{}], color: [] }} />;
```

## Props

属性详细说明:

- `type` 图标类型（bar,line,pie）
- `cfgData` 作图参数
- `option` echart 图表所用 option(传 option 时，type、option、onChartClick 三个属性值有效，其他属性值无效)
- `onChartClick`图表点击函数
- `bigSreen` 是否为大屏样式，默认为 flase
- `convertData` 是否需要对数据进行转换，默认为 true

  - cfgData 对象属性说明(柱线图)：

    - `data` 数据
    - `labelKey` 坐标轴值对应的 key(需要进行数据转换的时候传)
    - `legend` 系列对象(需要进行数据转换的时候传)
    - `isXY` 是否 XY 轴互换，默认为 false
    - `color` 图形颜色数组
    - `showDifferent` 针对 1 个系列的柱图是否不同柱子显示不同颜色，默认 false
    - `legendPosition` 系列显示位置（top,bottom）,默认为 top
    - `lineColor` 坐标轴颜色
    - `textColor` 字体颜色
    - `tipTextColor` 提示字体颜色
    - `tipBackColor` 提示框字体颜色

    data 格式说明

    - 数据需要转换的 data 格式

      ```
      data=[{label:周一,count:1,count1:3},{label:周二,count:3,count1:3},{label:周三,count:4,count1:2}],

      labelKey='label'
      legend=[{name:'数据系列1',type:'bar',key:'count'},{name:'数据系列1',type:'bar',key:'count2'}]
      ```

      legend 说明

      - `name` 系列名称
      - `type` 系列类型（line,bar）
      - `key` 对应 data 数据对象的 key
      - `stack` 是否堆叠 （默认 false）
      - `stackIndex` 堆叠值（stack 为 true 有效）
      - `width` 柱子宽度或者线的宽度

    - 不需要数据转换的 data 格式

          ```
          data={xData:['周一','周二','周三'],yData:[{name:'系列1',data:[1,2,4],type:'bar'},{name:'系列2',data:[3,2,2],type:'bar'}]}
          ```

  - cfgData 对象属性说明(饼图)：

    - `data` 数据
    - `legend` 系列对象(需要进行数据转换的时候传)
    - `color` 图形颜色数组
    - `legendPosition` 系列显示位置（top,bottom,right,left,不传不显示,默认不显示）
    - `lineColor` 坐标轴颜色
    - `textColor` 字体颜色
    - `tipTextColor` 提示字体颜色
    - `tipBackColor` 提示框字体颜色
    - `showtooltip` 是否显示提示
    - `isLoop` 是否为圆环（默认为 false）
    - `label` 图形中心显示的标签
    - `labelSize` 标签字体大小
    - `labelColor` 标签字体颜色

    data 格式说明

    - 需要做数据格式转换

    ```
     data= { level1: 34, level2: 64, level3: 100 }
     legend=[
              { name: "等级1", key: "level1" },
              { name: "等级2", key: "level2" },
              { name: "等级3", key: "level3" },
            ]
    ```

    - 不需要做数据格式转换

    ```
    data=[ { name: "等级1", value:1 },
            { name: "等级2", value: 2},
            { name: "等级3", value: 3 }]
    ```

* option 数据格式参考 echarts 官方配置
