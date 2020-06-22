## 背景

一个弹窗组件。由于很多弹窗基本风格都是写固定的，虽然大多都能满足要求，但难免遇到很多公司有自己的风格，和已有的组件看着一样，但是就有几个细节是不一样的，为了几个微小的差别需要重新封装一个组件。~~但又不给组件开发时间，美其名曰现成的能用，用了 ™ 又是 bug~~

## 组件介绍

这个只是一个弹窗，弹窗内容包括弹窗的样式都是自己定义，只是弹窗的骨架给写好了，专心定义弹窗内容和样式即可。

## 图片

![效果图](https://i.loli.net/2020/06/22/igOX2WklhUvmq4D.png)

## 安装

```bash
npm i react-dialog-container --save
```

## 示例

```js
import DialogContainer from "react-dialog-container";

<DialogContainer visible={true}>
  <div
    style={{
      backgroundColor: "white",
      width: "400px",
      height: "400px",
      margin: "auto",
      marginTop: "100px",
      borderRadius: "7px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "14px",
    }}
  >
    可以在这个div中自定义弹框的内容和样式
    <br />
    包括这个弹窗div
  </div>
</DialogContainer>;
```
