import ImgandBtn from "@/components/Recent Work Component/ImgandBtn";
import Topheadings from "@/components/TopHeadings/TopHeadings";
import React from "react";
import style from "./Section.module.css";


const Section = ({heading,target,para,image, targetCom}) => {
  
  return (
    <>
        {/* className={customStyle? style1.customStyle1: haveIdea? style1.letsBuild: sectionCss? style1.sectionHeading: style1.heading} */}

    <div className={targetCom? style.targetCss : style.main}>
        <div className={style.textDiv}>
      <Topheadings heading={heading} paragraph={para} sectionCss />
      </div>
      <div className={style.imgDiv} >
      <ImgandBtn imageUrl={image} imageWidth= {100} imageHeight= {100} />
      </div>
    </div>
   
    </>
  );
};

export default Section;
