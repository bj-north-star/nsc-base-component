import React from "react";
import styles from "./index.less";

export default class CheckPath extends React.Component {
  map = null;
  componentDidMount() {
    window.onBMapLoadCallback = () => {
      this.initMap();
    };
    this.loadBaiduMap();
  }

  componentWillUnmount() {
    window.onBMapLoadCallback = undefined;
  }

  initMap() {
    const { data } = this.props;
    if (!Array.isArray(data)) {
      throw Error("data不是一个数组");
    }

    if (data.length === 0) {
      return;
    }

    // 百度地图API功能
    this.map = new BMap.Map("checkpath", { minZoom: 5 });
    const map = this.map;
    const { longitude, latitude } = data[0];
    map.centerAndZoom(new BMap.Point(longitude, latitude), 8);
    map.enableScrollWheelZoom();

    const symbol = new BMap.Symbol(BMap_Symbol_SHAPE_CIRCLE, {
      strokeWeight: "6",
      strokeColor: "#fff",
      fillOpacity: 1,
    });

    const points = [];
    data.forEach(({ longitude, latitude, towerName }) => {
      const point = new BMap.Point(longitude, latitude);
      points.push(point);
      const marker = new BMap.Marker(point, {
        icon: symbol,
        title: towerName,
      });
      map.addOverlay(marker);
    });

    const polyline = new BMap.Polyline(points, {
      strokeWeight: "8", //折线的宽度，以像素为单位
      strokeOpacity: 0.8, //折线的透明度，取值范围0 - 1
      strokeColor: "#18a45b",
    }); //创建折线

    map.addOverlay(polyline); //增加折线
    this.initCustomControl(map);
  }

  // 自定义控件
  initCustomControl() {
    const map = this.map;
    const _this = this;
    // 定义一个控件类,即function
    function ZoomControl() {
      // 默认停靠位置和偏移量
      this.defaultAnchor = BMAP_ANCHOR_TOP_RIGHT;
      this.defaultOffset = new BMap.Size(10, 10);
    }

    // 通过JavaScript的prototype属性继承于BMap.Control
    ZoomControl.prototype = new BMap.Control();

    // 自定义控件必须实现自己的initialize方法,并且将控件的DOM元素返回
    // 在本方法中创建个div元素作为控件的容器,并将其添加到地图容器中
    ZoomControl.prototype.initialize = function (map) {
      // 创建一个DOM元素
      const div = document.createElement("div");
      // 添加文字说明
      div.appendChild(document.createTextNode("重新定位"));
      // 设置样式
      div.style.cursor = "pointer";
      div.style.border = "1px solid #ccc";
      div.style.backgroundColor = "#fff";
      div.style.fontSize = "14px";
      div.style.padding = "5px 10px";
      // 绑定事件,点击一次放大两级
      div.onclick = function (e) {
        const { longitude, latitude } = _this.props.data[0];
        const firstPoint = new BMap.Point(longitude, latitude);
        map.panTo(firstPoint);
      };
      // 添加DOM元素到地图中
      map.getContainer().appendChild(div);
      // 将DOM元素返回
      return div;
    };
    // 创建控件
    const myZoomCtrl = new ZoomControl();
    // 添加到地图当中
    map.addControl(myZoomCtrl);
  }

  loadBaiduMap() {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src =
        "//api.map.baidu.com/api?v=2.0&ak=Wd0yf00A6pMxTzrlnEomLeau7OG4sVCh&callback=onBMapLoadCallback";
      document.querySelector("head").appendChild(script);
    });
  }

  render() {
    return <div id="checkpath" className={styles["map"]}></div>;
  }
}
