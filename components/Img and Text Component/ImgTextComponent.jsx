import React from "react";
import Image from "next/image";
import classNames from "classnames";
import service from "../../assets/images/serviceImg.png";
import styles from "./ImgTextComponent.module.css";

const ImgTextComponent = ({ src, alt, text }) => {
  return (
    <div className={styles.imgCountDiv}>
      <Image
        src={src}
        alt={alt}
        className={classNames(styles.img)}
        // style={{width:200}}
        // className={classNames(styles,"p-")}
      />
      <p className={classNames(styles.text)}>
       {text}
      </p>
    </div>
  );
};

export default ImgTextComponent;
