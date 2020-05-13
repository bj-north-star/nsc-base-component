# @bj-nsc/schedule

工程进度表，可以查看工程开工竣工时间，总进度和子节点进度等信息

## 安装和使用

**npm 安装**

```
npm i @bj-nsc/schedule
```

**yarn 安装**

```
yarn add @bj-nsc/schedule
```

在代码里使用

```javascript
import Schedule from "@bj-nsc/schedule";
import "@bj-nsc/schedule/lib/main.css";

<Schedule
  startDay={100}
  planEndDate="2020-12-12"
  progressValue={80}
  progress={[]}
  section_model={1}
/>;
```

## Props

属性详细说明:

- `startDay` 总工程已开工多长时间
- `planEndDate` 总工程计划竣工时间
- `progressValue` 工程总进度
- `section_model` 1 代表工程模式；2 代表标段模式，工程模式下才显示子节点
- `progress` 工程节点数据
