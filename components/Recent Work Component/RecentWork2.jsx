import React from 'react'
import style from "./RecentWork.module.css";
import ImgandBtn from './ImgandBtn';
import Topheadings from '../TopHeadings/TopHeadings';

let num = 10

const RecentWork2 = () => {
  return (
    <div id='recent2' className={style.recent2Main}>
        <div className={style.recent2}>
        <Topheadings title="RECENT WORKS"
        heading="Our Cherished Case Studies" width={"70%"}/>
        {/* <div className={style} >
        <div className={styles.weBuild}>RECENT WORKS</div>
        <div className={style.ourCherish}>Our Cherished Case Studies</div>

        </div> */}
        <button className={style.seeBtn}>
          See all projects ({num})
        </button>
      </div>
      <div className={style.recent2ImgDiv}>
        <ImgandBtn imageUrl ="/Potrait Video 1.mp4" btnTxt={'Muslim Me'} imageHeight={100} imageWidth={90} recent2Css/>
        <ImgandBtn imageUrl ="/Potrait Video 2.mp4" btnTxt={'Stryde '} imageHeight={100} imageWidth={90} recent2Css/>
      </div>

    </div>
  )
}

export default RecentWork2
