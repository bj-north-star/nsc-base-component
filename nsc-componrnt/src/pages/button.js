/*
 * @Descripttion:
 * @version:
 * @Author: rxzhu
 * @Date: 2021-01-12 15:34:25
 * @LastEditors: rxzhu
 * @LastEditTime: 2021-01-13 16:58:05
 */
import React, { PureComponent } from "react";
import Button from "../components/base/Button";
import Upload from "../components/base/Upload";

export default class ButtonPage extends PureComponent {
  fileRef = React.createRef();
  state = {
    fileList: [],
  };
  onClick = () => {
    alert(2);
  };
  fileOnChange = () => {
    const file = this.fileRef.current.files[0];
    const { fileList } = this.state;
    fileList.push(file);
    this.setState({
      fileList: [...fileList],
    });
  };
  render() {
    const { fileList } = this.state;
    const props = {
      onChange: (e) => {
        console.log(e);
      },
    };
    return (
      <div>
        <Button onClick={this.onClick}>查询</Button>
        <Button onClick={this.onClick} type={"delete"}>
          删除
        </Button>
        {/* <Upload {...props}>
          <Button>Click to Upload</Button>
        </Upload> */}
        {/* <input
          type="file"
          ref={this.fileRef}
          onChange={this.fileOnChange}
        ></input>
        {fileList.map((item, index) => {
          return <div key={index}>{item.name}</div>;
        })} */}
        <Upload {...props}>
          <Button>上传测试</Button>
        </Upload>
      </div>
    );
  }
}
