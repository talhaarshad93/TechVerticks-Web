import React from "react";
import Image from "next/image";
import classNames from "classnames";
import service from "../../assets/images/serviceImg.png";
import styles from "./ImgTextComponent.module.css";

const ImgTextComponent = ({ src, alt, talha }) => {
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
        We activate brands across global touchpoints, from campaigns to events
        and beyond.
      </p>
    </div>
  );
};

export default ImgTextComponent;
