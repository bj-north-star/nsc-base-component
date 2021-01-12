/*
 * @Descripttion:
 * @version:
 * @Author: rxzhu
 * @Date: 2021-01-12 15:34:25
 * @LastEditors: rxzhu
 * @LastEditTime: 2021-01-12 17:56:21
 */
import React, { PureComponent } from "react";
import Button from "../components/base/Button";
import { Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";

export default class ButtonPage extends PureComponent {
  onClick = () => {
    alert(2);
  };
  render() {
    const props = {
      onChange(info) {
        if (info.file.status !== "uploading") {
          console.log(info.file, info.fileList);
        }
        if (info.file.status === "done") {
          message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === "error") {
          message.error(`${info.file.name} file upload failed.`);
        }
      },
    };
    return (
      <div>
        <Button onClick={this.onClick}>查询</Button>
        {/* <Upload {...props}>
          <Button>Click to Upload</Button>
        </Upload> */}
        <input type="file"></input>
      </div>
    );
  }
}
