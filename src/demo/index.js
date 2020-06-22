import React from "react";
import ReactDOM from "react-dom";
import DialogContainer from "../index";

function Main() {
  return (
    <section>
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
      </DialogContainer>
    </section>
  );
}

ReactDOM.render(<Main />, document.getElementById("root"));
