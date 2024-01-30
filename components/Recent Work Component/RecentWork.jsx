import React from 'react'
import ImgandBtn from './ImgandBtn'
import mobImg from "../../assets/images/mob.png"
import ltImg from "../../assets/images/l.t.png"
import kateImg from "../../assets/images/kate.png"
import styles from './../We Build/Count.module.css'
import classNames from "classnames";
import style from "./RecentWork.module.css";




const RecentWork = () => {
    let num = 10;
  return (
    <div className={style.main}>
      <div className={style.left}> 
            <ImgandBtn imageUrl ={mobImg}  imageHeight={100} imageWidth={100} btnTxt={'Botiga Mobile App'}/>
            <ImgandBtn imageUrl ={ltImg}  imageHeight={100} imageWidth={100} btnTxt={'Woo Space App'}/>
            {/* <ImgandBtn imageUrl = "../../assets/images/l.t.png" imageHeight={20} imageWidth={30}/> */}
      </div>
      <div className={style.right}>
        <div className=' ' >
        <div className={classNames(styles.weBuild, 'ml-')}>RECENT WORKS</div>
        <div className={classNames(style.ourCherish, '')}>Our Cherished Case Studies</div>

        </div>
      <ImgandBtn imageUrl ={kateImg}  imageHeight={90} imageWidth={100} btnTxt={'Meta Software Branding '}/>
<button className={classNames(style.seeBtn, '')} >See all projects ({num})</button>
      </div>
    </div>
  )
}

export default RecentWork
