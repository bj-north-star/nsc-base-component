简单的水平进度条

**## 安装和使用**

**npm 安装**

```
npm i @bj-nsc/progressbar
```

**yarn 安装**

```
yarn add @bj-nsc/progressbar
```

在代码里使用

```javascript
const totalProgressOptions = {
  width: 18.75,
  height: 1.5,
  unit: "vw",
};

<ProgressBar value={100} label={"总进度"} options={totalProgressOptions} />;
```

### Props

属性详细说明

- `value` 进度值
- `label` 标签名称
- `showLabel` 是否显示标签
- `width` 进度条宽度
- `height` 进度条高度
- `unit` 值单位 px|vw
- `radius` 圆角值
- `bgColor` 进度条背景
- `barColor` 进度条颜色
- `labelOptions` 标签配置 (对象类型)
- `valueOptions` 进度数值配置 (对象类型)
