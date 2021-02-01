/*
 * @Descripttion:上传文件组件
 * @version:
 * @Author: rxzhu
 * @Date: 2021-01-13 10:31:41
 * @LastEditors: rxzhu
 * @LastEditTime: 2021-01-28 17:17:49
 */
import React, { PureComponent } from "react";
import OSS from "@bj-nsc/upload";
import file from "@bj-nsc/file";
import Nsc_Progress from "../../Progress";
import Nsc_Message from "../../Message";
import Iconfont from "../../Iconfont";
import styles from "./index.less";
import cls from "classnames";
import PropTypes from "prop-types";

/**
 * @name:上传组件
 * @param {
 * onChange:上传文件修改事件;
 * aotoUpload:是否自动上传至文件服务器，默认true;
 * accept允许上传的文件类型;
 * maxSize:允许上传文件大小;
 * url:上传文件地址;
 * busiName、serviceName：上传文件参数;
 * uploadLine:是否显示上传进度条
 * }
 * @return {file}
 */

const { download, remove, preview } = file;
export default class Nsc_Upload extends PureComponent {
  state = { fileList: [] };

  onDelete = (item, index) => {
    const { onChange } = this.props;
    const { fileList } = this.state;
    //需要调删除函数进行删除
    if (fileList.res) {
      remove({
        params: {
          ids: [item.res.data.id],
        },
      }).then((res) => {
        console.log("remove", res);
      });
    }
    fileList.splice(index, 1);
    this.setState(
      {
        fileList: [...fileList],
      },
      () => {
        onChange(this.state);
      }
    );
  };
  download = (item) => {
    if (item.error) {
      return;
    }
    preview({
      fileId: item.res.data.id,
    });
  };
  onUpload = () => {
    const {
      accept,
      serviceName,
      busiName,
      aotoUpload = true,
      onChange,
      maxSize,
      url = "/api/file/v1/files/upload",
      uploadLine = true,
    } = this.props;
    const input = document.createElement("input");
    const _this = this;
    input.type = "file";
    input.accept = accept;
    input.click();
    input.onchange = function () {
      const { fileList } = _this.state;
      let file = input.files[0];
      let arr = file.name.split(".");
      let filetype = arr[arr.length - 1];
      let newAccept = "";
      if (accept) {
        if (accept.indexOf("image/gif") > -1) {
          newAccept = ".gif";
        } else if (accept.indexOf("image/jpeg") > -1) {
          newAccept = ".pjpeg, .jpeg, .jpg, .pjp";
        } else if (accept.indexOf("image/png") > -1) {
          newAccept = ".png";
        } else if (accept.indexOf("image/*") > -1) {
          newAccept =
            ".tiff, .jfif, .svg, .svgz, .bmp, .svgz, .webp, .ico, .xbm, .dib, .avif, .gif,.pjpeg, .jpeg, .jpg, .pjp , .png";
        }
        if (
          accept.indexOf(filetype) == -1 &&
          newAccept.indexOf(filetype) == -1
        ) {
          Nsc_Message.error("上传文件类型错误！", 100);
          return false;
        }
      }

      if (maxSize) {
        if (file.size / 1024 / 1024 >= maxSize) {
          Nsc_Message.error(`请上传小于或等于${maxSize}M的文件！`);
          return false;
        }
      }
      let obj = {
        file: file,
        progress: 0,
        status: "uploadiong",
      };
      let index = fileList.length;
      if (aotoUpload) {
        const client = new OSS();
        const config = {
          serviceName: serviceName, //服务名
          busiName: busiName, // 业务名
          url: url, // 文件上传接口地址
          headers: {
            Authorization: localStorage.getItem("token"),
          },
          timeout: 0, // 上传超时设置
          progress: function (value) {
            obj.progress = value;
            obj.status = "uploading";
            fileList[index] = obj;
            _this.setState(
              {
                fileList: [...fileList],
              },
              () => {
                onChange(_this.state);
              }
            );
          }, // 上传进度回调
        };
        client
          .multipartUpload("file", file, config)
          .then((res) => {
            // 上传成功
            obj.value = 100;
            obj.res = res;
            obj.status = "down";
            fileList[index] = obj;
            _this.setState(
              {
                fileList: [...fileList],
              },
              () => {
                onChange(_this.state);
              }
            );
            Nsc_Message.success("上传成功");
          })
          .catch((error) => {
            // 上传失败
            Nsc_Message.error("上传失败");
            obj.status = "error";
            fileList[index] = obj;
            _this.setState(
              {
                fileList: [...fileList],
              },
              () => {
                onChange(_this.state);
              }
            );
          });
      } else {
        obj.status = "down";
        fileList[index] = obj;
        _this.setState(
          {
            fileList: [...fileList],
          },
          () => {
            onChange(_this.state);
          }
        );
      }
    };
  };
  render() {
    const { fileList } = this.state;
    const { uploadLine = false } = this.props;
    return (
      <div>
        <div onClick={this.onUpload}>{this.props.children}</div>
        {uploadLine &&
          fileList.map((item, index) => {
            return (
              <div key={index} className={styles["uploaditem"]}>
                <div
                  className={cls(styles["text"], {
                    [styles["text_error"]]: item.error,
                  })}
                  onClick={this.download.bind(this, item)}
                >
                  {item.file.name}
                  {/*上传错误或者进度为100显示删除*/}
                  {uploadLine && item.status == "down" && (
                    <span
                      className={styles["filedelete"]}
                      onClick={this.onDelete.bind(this, item, index)}
                    >
                      <Iconfont type={"iconshanchu1"} />
                    </span>
                  )}
                </div>
                {/* 上传错误不显示进度条或者进度==100不显示进度条*/}
                {uploadLine && item.status == "uploading" && (
                  <Nsc_Progress percent={item.progress} strokeWidth={2} />
                )}
              </div>
            );
          })}
      </div>
    );
  }
}

Nsc_Upload.propTypes = {
  accept: PropTypes.string,
  maxSize: PropTypes.number,
};
