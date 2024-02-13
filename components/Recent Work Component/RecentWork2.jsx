import React from 'react'
import style from "./RecentWork.module.css";
import ImgandBtn from './ImgandBtn';
import Topheadings from '../TopHeadings/TopHeadings';
import styles from './../We Build/Count.module.css'
import botiga from '../../assets/images/botiga.png'
import meta from '../../assets/images/meta.png'

let num = 10

const RecentWork2 = () => {
  return (
    <div className={style.recent2Main}>
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
        <ImgandBtn imageUrl ={botiga} btnTxt={'Botiga Mobile App'} imageHeight={100} imageWidth={90} recent2Css/>
        <ImgandBtn imageUrl ={meta} btnTxt={'Meta Software Branding '} imageHeight={100} imageWidth={90} recent2Css/>
      </div>

    </div>
  )
}

export default RecentWork2
