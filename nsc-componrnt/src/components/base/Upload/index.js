/*
 * @Descripttion:上传文件组件
 * @version:
 * @Author: rxzhu
 * @Date: 2021-01-13 10:31:41
 * @LastEditors: rxzhu
 * @LastEditTime: 2021-01-13 17:59:19
 */
import React, { PureComponent } from "react";
import OSS from "@bj-nsc/upload";
import { Progress } from "antd";
import Nsc_Progress from "../Progress";
import Iconfont from "../Iconfont";
import styles from "./index.less";

/**
 * @name:
 * @param {onChange:上传文件修改事件;
 * aotoUpload:是否自动上传至文件服务器，默认true;
 * accept允许上传的文件类型;
 * maxSize:允许上传文件大小;
 * url:上传文件地址;
 * busiName、serviceName：上传文件参数;
 * }
 * @return {file}
 */
export default class Nsc_Upload extends PureComponent {
  state = { fileList: [] };
  onDelete = (item, index) => {
    const { fileList } = this.state;
    alert(1);
    console.log("deleteItem", item);
    fileList.splice(index, 1);
    this.setState({
      fileList: [...fileList],
    });
  };
  onUpload = () => {
    const input = document.createElement("input");
    const { accept } = this.props;
    const _this = this;
    input.type = "file";
    input.click();
    input.accept = accept ? accept : null;
    input.onchange = function () {
      const { fileList } = _this.state;
      let file = input.files[0];
      const client = new OSS();
      let obj = {
        file: file,
        progress: 50,
        res: null,
        // error: "error",
      };

      let index = fileList.length;
      fileList[index] = obj;
      _this.setState({
        fileList: [...fileList],
      });
      // 所有这些配置都是可选的
      const config = {
        serviceName: "eic-home-web", //服务名
        busiName: "hometest", // 业务名
        url: "/api/file/v1/files/upload", // 文件上传接口地址
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuZWVkQmluZERldmljZSI6ZmFsc2UsInNpZ25pblR5cGUiOiIyMDEiLCJwcm92aWRlciI6ImplcnJ5Y2hpciIsImlzY191c2VyX2lkIjoiQUNBQTczQzMxNkZGMTM5REUwNTAxMUFDMDIwMDU1MkYiLCJ1c2VyX2lkIjoiMTE4NDQ0NzYyMzkzMzY0NDgwMiIsInVzZXJfbmFtZSI6IjEzNzE2MDM2MzYyIiwic2NvcGUiOlsiYWxsIl0sIm5hbWUiOiLpqazlsI_kuLAiLCJtb2JpbGUiOm51bGwsImV4cCI6MTYxMDcwNDk2MiwianRpIjoiODczNzE2NDItNzU4MC00NzdhLTk1NTItNTUyZWJhMjM5NWU4IiwiY2xpZW50X2lkIjoiYmpuc2NfY2RwX3dlYiJ9.ETw7dP9KF1fT6e1mlhak03fl9sF3vzl9U5JJz1yhy2I",
        },
        timeout: 0, // 上传超时设置
        progress: function (value) {
          obj.progress = value;
          fileList[index] = obj;
          _this.setState({
            fileList: [...fileList],
          });
        }, // 上传进度回调
      };
      // client
      //   .multipartUpload("file", file, config)
      //   .then((res) => {
      //     // 上传成功
      //     obj.value = 100;
      //     obj.res = res;
      //     fileList[index] = obj;
      //     _this.setState({
      //       fileList: [...fileList],
      //     });
      //   })
      //   .catch((error) => {
      //     // 上传失败
      //     obj.error = error;
      //     fileList[index] = obj;
      //     _this.setState({
      //       fileList: [...fileList],
      //     });
      //   });
    };
  };
  render() {
    const { fileList } = this.state;
    return (
      <div>
        <div onClick={this.onUpload}>{this.props.children}</div>
        {fileList.map((item, index) => {
          return (
            <div key={index} className={styles["uploaditem"]}>
              <div>
                {item.file.name}
                {/*上传错误或者进度为100显示删除*/}
                {(item.error || item.progress == 100) && (
                  <span
                    className={styles["filedelete"]}
                    onClick={this.onDelete.bind(this, item, index)}
                  >
                    <Iconfont type={"iconshanchu1"} />
                  </span>
                )}
              </div>
              {/* 上传错误不显示进度条或者进度==100不显示进度条*/}
              {((item.progress > 0 && item.progress != 100) || item.error) && (
                <Nsc_Progress percent={item.progress} strokeWidth={2} />
              )}
            </div>
          );
        })}
      </div>
    );
  }
}
