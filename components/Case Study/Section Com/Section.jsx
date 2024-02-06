import ImgandBtn from "@/components/Recent Work Component/ImgandBtn";
import Topheadings from "@/components/TopHeadings/TopHeadings";
import React from "react";
import style from "./Section.module.css";
import project from "../../../assets/images/project.png";
import target from "../../../assets/images/target.png";

const Section = () => {
    let para =
    <>
    "It is a long established fact that a reader will be  distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.<br/><br/> Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).";
    </>

  let heading = "Project Goal";
  return (
    <>
    <div className={style.main}>
        <div className={style.textDiv}>
      <Topheadings heading={heading} paragraph={para} sectionCss />
      </div>
      <div className={style.imgDiv1} >
      <ImgandBtn imageUrl={project} imageWidth= {100} imageHeight= {100} />
      </div>
    </div>
    <div className={style.main }>
        
      <div className={style.imgDiv2} >
      <ImgandBtn imageUrl={target} 
      imageWidth= {100} imageHeight= {100} />
      </div>
      <div className={style.textDiv}>
      <Topheadings heading={heading} paragraph={para} sectionCss />
      </div>
    </div>
    </>
  );
};

export default Section;
