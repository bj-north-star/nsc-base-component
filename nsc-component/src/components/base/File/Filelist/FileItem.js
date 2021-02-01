/*
 * @Descripttion:
 * @version:
 * @Author: rxzhu
 * @Date: 2021-01-28 15:42:50
 * @LastEditors: rxzhu
 * @LastEditTime: 2021-01-29 16:47:38
 */
import React, { PureComponent } from "react";
import styles from "./item.less";
import cls from "classnames";
import Iconfont from "../../Iconfont";
import file from "@bj-nsc/file";
import { Checkbox } from "antd";
import Nsc_Progress from "../../Progress";

const { download, remove, preview } = file;
export default class FileItem extends PureComponent {
  download() {}
  onDelete() {
    const { item, index, onDelete } = this.props;
    //需要调删除函数进行删除
    if (item.status != "error") {
      remove({
        params: {
          ids: [item.res.data.id],
        },
      }).then((res) => {
        console.log("remove", res);
      });
    }
    onDelete(index);
  }
  onChange(value) {
    console.log(value);
    this.props.onCheck(value);
  }
  renderListItem() {
    const { item } = this.props;
    return (
      <>
        <div
          className={cls(styles["listItem"], {
            [styles["text_error"]]: item.status == "error",
          })}
        >
          <div className={styles["checkbox"]}>
            <Checkbox onChange={this.onChange}></Checkbox>
          </div>
          <div
            className={styles["text"]}
            onClick={this.download.bind(this, item)}
          >
            {item.file.name}
          </div>
          {item.status != "uploading" && (
            <div>
              <span
                className={styles["itemicon"]}
                onClick={this.onDelete.bind(this, item)}
              >
                <Iconfont type={"iconshanchu1"} />
              </span>
              <span
                className={styles["itemicon"]}
                onClick={this.download.bind(this, item)}
              >
                <Iconfont type={"icon0-19"} />
              </span>
            </div>
          )}
        </div>
        {item.status == "uploading" && (
          <Nsc_Progress percent={item.progress} strokeWidth={2} />
        )}
      </>
    );
  }
  renderListFlatItem() {
    const { item } = this.props;
    return (
      <>
        <div
          className={cls(styles["listFlatItem"], {
            [styles["text_error"]]: item.status == "error",
          })}
        >
          <div className={styles["checkbox"]}>
            <Checkbox onChange={this.onChange}></Checkbox>
          </div>

          <div
            className={styles["text"]}
            onClick={this.download.bind(this, item)}
          >
            {item.file.name}
          </div>
          {item.status != "uploading" && (
            <div>
              <span
                className={styles["itemicon"]}
                onClick={this.onDelete.bind(this, item)}
              >
                <Iconfont type={"iconshanchu1"} />
              </span>
              <span
                className={styles["itemicon"]}
                onClick={this.download.bind(this, item)}
              >
                <Iconfont type={"icon0-19"} />
              </span>
            </div>
          )}
        </div>
        {item.status == "uploading" && (
          <Nsc_Progress percent={item.progress} strokeWidth={2} />
        )}
      </>
    );
  }
  renderFlatItem() {
    return <div></div>;
  }

  render() {
    const { type = "list", item } = this.props;
    if (type == "list") {
      return this.renderListItem();
    } else if (type == "listFlat") {
      return this.renderListFlatItem();
    } else if (type == "flat") {
      return this.renderFlatItem();
    }
  }
}
