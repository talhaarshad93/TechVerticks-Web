import React from 'react';
import style from './RecentWork3.module.css';
import Topheadings from '../TopHeadings/TopHeadings';
import ImgandBtn from './ImgandBtn';
import SPD_img1 from '../../assets/images/SPD_img1.png'
import SPD_img2 from '../../assets/images/SPD_img2.png'
const RecentWork3 = () => {
    let num = '08'
  return (
    <div className={style.main}>
          <div className={style.leftDive}>
    <ImgandBtn imageUrl ="/SCENE_07.mp4" btnTxt={' Botiga Mobile App'} imageHeight={300} imageWidth={100}/>
  
    <button className={style.seeBtn}>
      See All Projects({num})
    </button>
  </div>
        <div className={style.RightDiv}>
            <div className={style.headingDiv}>
    <Topheadings title="RECENT WORKS"
    heading="Our Andriod App Case Studies" width={"80%"}/>
    </div>

    <ImgandBtn imageUrl ="/Geelink.mp4" btnTxt={'Meta Mobile App'} imageHeight={300} imageWidth={100}/>

    {/* <div className={style} >
    <div className={styles.weBuild}>RECENT WORKS</div>
    <div className={style.ourCherish}>Our Cherished Case Studies</div>
    
</div> */}
    
</div>


</div>
  );
}

export default RecentWork3;
