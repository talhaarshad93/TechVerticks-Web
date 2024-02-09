import React from 'react'
import style from './Tv.module.css'
import Image from "next/image";

const Tv = ({img}) => {
  return (
    <div className={style.main}>
     { img && <Image className={style.imgTv} src={img} alt='img' />}
      <iframe
        className={style.video1}
        src="https://www.youtube.com/embed/2wI_SjklTYQ?si=mZFZDvCAotQo1GGU"
        title="YouTube video player"
        frameborder="3s"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe> 
    </div>
  )
}

export default Tv
