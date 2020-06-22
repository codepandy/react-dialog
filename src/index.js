import React, { useEffect, useState } from "react";
import styles from "./index.less";

export default function DialogContainer({ visible, children }) {
  const [documentHeight, setDocumentHeight] = useState();
  useEffect(() => {
    setDocumentHeight(Math.max(document.body.scrollHeight, document.documentElement.scrollHeight));
    window.addEventListener("resize", () => {
      setDocumentHeight(
        Math.max(document.body.scrollHeight, document.documentElement.scrollHeight),
      );
    });
    window.addEventListener("scroll", () => {
      setDocumentHeight(
        Math.max(document.body.scrollHeight, document.documentElement.scrollHeight),
      );
    });
  }, []);
  return (
    <div
      className={styles.dialogmarkContainer93sdf23}
      style={{ visibility: visible ? "visible" : "hidden", height: `${documentHeight}px` }}
    >
      {children}
    </div>
  );
}
