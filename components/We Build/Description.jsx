import React from "react";
import styles from "./Count.module.css";

import classNames from "classnames";
import ImgTextComponent from "../Img and Text Component/ImgTextComponent";
import { useRouter } from "next/router";



const Description = ({heading,description,weBuildCSS}) => {
  const router = useRouter();
  // const data = [
  //   { heading: "Mobile Application Development", image: MB1 },
  //   { heading: "Website Development", image: MB2 },
  // ];
  // const image = MB1
  return (
    <div className="right ml-   offset- col-8  mt-1 ">
      <div className={styles.aMotion}
      style={{...(weBuildCSS && {fontSize:"4vw",width:"55vw", lineHeight:"5vw",marginTop:"4.5vw"})}}>
       {heading}
      </div>
      <p className={weBuildCSS ? styles.paragraph1 : styles.paragraph}>
        {description}
        
      </p>
      <div className={classNames(styles.learnBtn,)}>
        <button onClick={()=>{router.push('/About')}} className={styles.btn}>Learn More About Our Approach</button>
      </div>
      {/* {data.map(item => (<ImgTextComponent src={item.image} />))     } */}
    </div>
  );
};

export default Description;
