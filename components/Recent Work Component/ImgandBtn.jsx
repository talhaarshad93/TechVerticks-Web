import React from "react";
import Image from "next/image";
import rightArrow from "../../assets/images/Vector.png";
import styles from "./RecentWork.module.css";
import classNames from "classnames";
import { useRouter } from "next/router";

const ImgandBtn = ({ imageUrl, imageHeight, imageWidth, btnTxt, width ,recent2Css}) => {
  const imageStyles = {
    width: `${imageWidth}%`,
    height: `${imageHeight}%`,
  };
  const router = useRouter();
  const particularProject = () => {
    // Navigate to the contact page when the button is clicked
    router.push("/CaseStudies");
  };

  return (
    <div style={{ width: width }}>
     <div className={styles.imgBox}> <Image
        src={imageUrl}
        // layout="responsive"
        // width={1000}
        // height={1000}
        style={imageStyles}
        alt="Image"
        className={ styles.img}
      />
      <div className={styles.layer}>
        <button onClick={particularProject}>See Details?</button></div></div>
      {btnTxt && (
        <button
          className={styles.btnDiv1}
          style={imageStyles}
          onClick={particularProject}
        >
          <div className={styles.btnDiv}>
            <div className={styles.btnTxt}>{btnTxt}</div>
            <Image src={rightArrow} alt="" className={styles.rightArrow} />
          </div>
        </button>
      )}
    </div>
  );
};

export default ImgandBtn;
