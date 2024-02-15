import React from "react";
import Image from "next/image";
import classNames from "classnames";
import service from "../../assets/images/serviceImg.png";
import styles from "./ImgTextComponent.module.css";

const ImgTextComponent = ({ src, alt, text }) => {
  return (
    <div className={styles.imgCountDiv}>

<video  className={styles.img} 
        // style={imageStyles}
        loop autoPlay muted>
        <source src={src} type="video/mp4" />
        
       Your browser does not support the video tag. 
      </video>
     

      {/* <Image
        src={src}
        alt={alt}
        className={classNames(styles.img)}
      /> */}
      <p className={classNames(styles.text)}>
       {text}
      </p>
    </div>
  );
};

export default ImgTextComponent;
