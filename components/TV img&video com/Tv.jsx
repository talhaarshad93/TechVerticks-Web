import React, { useEffect, useRef } from "react";
import style from "./Tv.module.css";
import Image from "next/image";
// import videosrc from '../../assets/images/tvReel.mp4'

//

const Tv = ({ img,video }) => {
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
        <source src={video} type="video/mp4" />
        
       Your browser does not support the video tag. 
      </video>
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
