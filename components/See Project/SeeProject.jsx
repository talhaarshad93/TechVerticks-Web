import React from "react";
import Topheadings from "../TopHeadings/TopHeadings";
import style from "./SeeProject.module.css";
import classNames from "classnames";
import ImgandBtn from "../Recent Work Component/ImgandBtn";
import botiga from "../../assets/images/botiga.png";
import meta from "../../assets/images/meta.png";

const SeeProject = () => {
  let num = 10;
  return (
    <div className={style.main}>
      <div className={style.top}>
        <Topheadings
          title={"RECENT WORK"}
          heading={"Our cherished Case Studies"}
          width={"30vw"}
        />
        <button className={classNames(style.seeBtn, "")}>
          See all projects ({num})
        </button>
      </div>
      <div className={style.bottom}>
        <ImgandBtn
          imageUrl={botiga}
          imageHeight={90}
          imageWidth={100}
          btnTxt={"Botiga Mobile App"}
          width = {'47%'}
        />
        <ImgandBtn
          imageUrl={meta}
          imageHeight={90}
          imageWidth={100}
          width = {'47%'}
          btnTxt={"Meta Software Branding"}
        />
      </div>
    </div>
  );
};

export default SeeProject;
