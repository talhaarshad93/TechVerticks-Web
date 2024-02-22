import React, { useEffect, useRef } from "react";
import style from "./Tv.module.css";
import Image from "next/image";
// import videosrc from '../../assets/images/tvReel.mp4'
const Tv = ({ img }) => {


  return (
    <div className={style.main}>
      {img && <Image className={style.imgTv} src={img} alt="img" />}
      {/* <iframe
        className={style.video1}
        src="https://www.youtube.com/embed/2wI_SjklTYQ?si=mZFZDvCAotQo1GGU"
        title="YouTube video player"
        frameborder="3s"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>  */}

      <video  className={style.video1} loop autoPlay muted>
        <source src="/tvReel.mp4" type="video/mp4" />
        
       Your browser does not support the video tag. 
      </video>
      {/* <iframe src="https://player.vimeo.com/video/912954027" className={style.video1} frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe> */}
      {/* <iframe
  src="https://player.vimeo.com/video/912954027?autoplay=1&controls=0&loop=1"
  className={style.video1}
  frameborder="1"
  allow="autoplay"
  allowfullscreen
></iframe> */}


      {/* <ReactPlayer
        width="500px"
        height="400px"
        url={'https://vimeo.com/912954027?share=copy'}
        controls=
        muted={true}
        loop
 
        // light is usefull incase of dark mode
        light={false}
      /> */}
      {/* <source src={'https://vimeo.com/912954027?share=copy'} type="video/mp4" /> */}
    </div>
  );
};

export default Tv;
