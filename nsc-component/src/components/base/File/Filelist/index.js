/*
 * @Descripttion: 文件列表
 * @version:
 * @Author: rxzhu
 * @Date: 2021-01-27 08:50:04
 * @LastEditors: rxzhu
 * @LastEditTime: 2021-01-29 16:32:56
 */
import React, { PureComponent } from "react";
import Iconfont from "../../Iconfont";
import styles from "./index.less";
import NSC_Radio from "../../Radio";
import cls from "classnames";
import { Popover } from "antd";
import Nsc_Upload from "../Upload";
import Nsc_FileItem from "./FileItem";

/**
 * @param {
 * isUpload:是否显示上传按钮,默认为false,
 * type:展示类型，有list列表展示，listFlat，flat平铺展示，
 * title:显示标题
 * fileList:文件数组
 * url:获取文件路径
 * }
 */

export default class Nsc_FileList extends PureComponent {
  state = {
    active: "list",
    visible: false,
    fileList: [],
    checkValue: [],
  };
  //关闭弹框
  hide = () => {
    this.setState({
      visible: false,
    });
  };
  //上传文件回调方法
  onChange(e) {
    this.setState({
      fileList: e.fileList,
    });
  }

  handleVisibleChange = (visible) => {
    this.setState({ visible });
  };
  //切换显示方式回调
  onGroupChange(value) {
    console.log("value", value);
    this.setState(
      {
        active: value,
      },
      () => {
        console.log("state", this.state);
      }
    );
  }
  //删除文件回调
  onDelete(index) {
    const { fileList } = this.state;
    fileList.splice(index, 1);
    this.setState({
      fileList: [...fileList],
    });
  }
  //选中文件回调
  onCheck() {}
  render() {
    const { isUpload = true, types = "list,listFlat,flat" } = this.props;
    const { active, fileList } = this.state;
    return (
      <Popover
        content={
          <Content
            isUpload={isUpload}
            type={active}
            fileList={fileList}
            onChange={this.onChange.bind(this)}
            onDelete={this.onDelete.bind(this)}
            onCheck={this.onCheck.bind(this)}
          />
        }
        title={
          <Title
            types={types}
            onChange={this.onGroupChange.bind(this)}
            active={this.state.active}
            onClose={this.hide.bind(this)}
          />
        }
        trigger="click"
        visible={this.state.visible}
        onVisibleChange={this.handleVisibleChange}
        placement={"bottomLeft"}
        autoAdjustOverflow
      >
        <div className={styles["file"]}>
          <Iconfont type={"iconfujian"} />
        </div>
      </Popover>
    );
  }
}

class Content extends PureComponent {
  render() {
    const { isUpload = true, type, fileList = [] } = this.props;
    console.log("Content", this.props);
    const props = {
      serviceName: "eic-home-web",
      busiName: "hometest",
      onChange: (e) => {
        this.props.onChange(e);
      },
    };
    return (
      <div>
        <Nsc_Upload {...props}>
          <div className={styles["upload"]}>
            <Iconfont type={"icon0-37"} className={styles["icon"]} />
            上传文件
          </div>
        </Nsc_Upload>
        <div className={styles["list-box"]}>
          {fileList.map((item, index) => {
            return (
              <Nsc_FileItem
                type={type}
                item={item}
                key={index}
                index={index}
                onDelete={this.props.onDelete}
                onCheck={this.props.onCheck}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

class ListRadio extends PureComponent {
  render() {
    const { value, active } = this.props;
    return (
      <div
        className={styles["tools"]}
        onClick={this.props.onClick.bind(this, value)}
      >
        <span
          className={cls(styles["span"], {
            [styles["active"]]: active,
          })}
        >
          <Iconfont type={this.props.type} />
        </span>
      </div>
    );
  }
}

class Title extends PureComponent {
  render() {
    const { types, onChange, onClose } = this.props;
    const type = types.split(",");
    const typeObj = {
      list: "iconliebiaolist46",
      listFlat: "iconliebiao",
      flat: "iconliebiao1",
    };
    return (
      <div className={styles["list-header"]}>
        <div className={styles["list-title"]}>文件列表</div>
        <div className={styles["list-tool"]}>
          <span className={styles["span"]} onClick={this.props.hide}>
            <Iconfont type={"icon0-19"} />
          </span>
          <NSC_Radio.Group
            onChange={onChange}
            customize={true}
            value={this.props.active}
          >
            {type.map((item) => {
              return <ListRadio value={item} type={typeObj[item]} key={item} />;
            })}
          </NSC_Radio.Group>
          <span className={styles["span"]} onClick={onClose}>
            <Iconfont type={"iconguanbi"} />
          </span>
        </div>
      </div>
    );
  }
}
