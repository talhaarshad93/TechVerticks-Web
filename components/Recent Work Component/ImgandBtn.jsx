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
    // router.push("/CaseStudies");
    router.push({
      pathname: '/CaseStudies',
      query: { btnTxt }
    });
  };
  

  return (
    <div style={{ width: width, }}>
     <div className={styles.imgBox}>
       {/* <Image
        src={imageUrl}
        style={imageStyles}
        alt="Image"
        '/webgif.gif'
        className={ styles.img}
      /> */}
       <video  className={styles.img} 
        style={imageStyles}
        loop autoPlay muted >
        <source src={imageUrl} type="video/mp4" />
        
       Your browser does not support the video tag. 
      </video>
      <div className={styles.layer}>
        {/* <button onClick={particularProject}>See Details?</button> */}
        </div>
        </div>
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
