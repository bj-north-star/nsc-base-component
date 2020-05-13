# @bj-nsc/progressbar

简单进度条，用来显示工程进度

## 安装和使用

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
import ProgressBar from "@bj-nsc/progressbar";

<ProgressBar
  value={90}
  label="工程总进度"
  options={{ height: 8, labelOptions: { marginBottom: 10 } }}
/>;
```

## Props

下面这些属性都是可选的:

- `value` 进度条的值
- `label` 进度条的标签名称
- `options` 进度条配置选项

options 包含下面这些选项

- `width` 进度条的宽度
- `height` 进度条的高度
- `unit` 单位（默认 px）
- `bgColor` 进度条背景色
- `barColor` 进度条颜色
- `labelOptions` 标签名称配置 包含`fontSize`、`unit`、`color`
- `valueOptions` 进度值配置 包含`fontSize`、 `unit`、`color`

所有合法的 css 属性都支持配置，如`marginTop`、`paddingLeft`等。
