### 组件介绍

检测杆塔路径是否正确

### 安装

```javascript
npm install @bj-nsc/checkpath -S
```

### 使用

```javascript
import CheckPath from "@bj-nsc/checkpath";

const data = [
    {
      sort: 1,
      towerName: "P16",
      longitude: 113.293245,
      latitude: 27.424557,
    },
    {
      sort: 2,
      towerName: "P17",
      longitude: 112.300269,
      latitude: 25.424374,
    }
  ]

<CheckPath data={data} />
```

#### 参数

- data `Array<object>`
  - object
    - towerName 杆塔名称
    - longitude 经度
    - latitude 纬度
    - sort 序号
- level `string | number` 百度地图初始缩放等级, 值 1-19 之间，默认 8
