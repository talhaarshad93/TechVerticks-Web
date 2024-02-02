import React from "react";
import Image from "next/image";
import rightArrow from "../../assets/images/Vector.png";
import styles from "./RecentWork.module.css";
import classNames from "classnames";

const ImgandBtn = ({ imageUrl, imageHeight, imageWidth, btnTxt, width }) => {
  const imageStyles = {
    width: `${imageWidth}%`,
    height: `${imageHeight}%`,
  };

  return (
    <div  style={{width:width}}>
      <Image
        src={imageUrl}
        // layout="responsive"
        // width={1000}
        // height={1000}
        style={imageStyles}
        alt="Image"
        className={classNames(styles.img)}
      />
      <button className={styles.btnDiv1} style = {imageStyles}>
        <div className={styles.btnDiv}  >
          <div className={styles.btnTxt}>{btnTxt}</div>
          <Image
            src={rightArrow}
            alt=""
            className={styles.rightArrow}
          />
        </div>
      </button>
    </div>
  );
};

export default ImgandBtn;
