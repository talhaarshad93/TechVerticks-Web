import React from "react";
import ImgandBtn from "./ImgandBtn";
import styles from "./../We Build/Count.module.css";
import classNames from "classnames";
import style from "./RecentWork.module.css";

const RecentWork = () => {
  let num = 10;
  return (
    <div id="recentWork" className={style.main}>
      <div className={style.left}>
        <ImgandBtn
          imageUrl="/AppCrops.mp4"
          imageHeight={100}
          imageWidth={100}
          btnTxt={"App Crops"}
        />

        <ImgandBtn
          imageUrl="/Potrait Video 2.mp4"
          imageHeight={100}
          imageWidth={100}
          btnTxt={"Muslim Me"}
        />
        {/* <ImgandBtn imageUrl = "../../assets/images/l.t.png" imageHeight={20} imageWidth={30}/> */}
      </div>
      <div className={style.right}>
        <div className=" ">
          <div className={classNames(styles.weBuild, "ml-")}>RECENT WORKS</div>
          <div className={classNames(style.ourCherish, "")}>
            Our Cherished Case Studies
          </div>
        </div>
        <ImgandBtn
          imageUrl="/Potrait Video 1.mp4"
          imageHeight={90}
          imageWidth={100}
          btnTxt={"The Stryde "}
        />
        <button className={classNames(style.seeBtn, "")}>
          See all projects ({num})
        </button>
      </div>
    </div>
  );
};

export default RecentWork;
