import { useState, useEffect } from 'react';
import Image from 'next/image';
import style from './ImageLayout.module.css';
import ImageLayout1 from '../../assets/images/ImageLayout1.png';
import ImageLayout2 from '../../assets/images/ImageLayout4.png';
import ImageLayout3 from '../../assets/images/ImageLayout2.png';
import ImageLayout4 from '../../assets/images/ImageLayout3.png';
import ImageLayout5 from '../../assets/images/ImageLayout5.png';
import ImageLayout6 from '../../assets/images/ImageLayout6.png';

const imageListDivOne = [
  {
    id: "01",
    img: ImageLayout1,
    isLarge: true,
  },
  {
    id: "02",
    img: ImageLayout2,
    isLarge: false,
  },
  {
    id: "03",
    img: ImageLayout3,
    isLarge: false,
  },
];

const imageListDivTwo = [
  {
    id: "04",
    img: ImageLayout4,
    isLarge: false,
  },
  {
    id: "05",
    img: ImageLayout5,
    isLarge: true,
  },
  {
    id: "06",
    img: ImageLayout6,
    isLarge: false,
  },
];

const ImageComp = ({ imageArray }) => {
  return imageArray?.map((item) => (
    <div key={item?.id} className={item?.isLarge ? style.box1 : style.box2}>
      <Image className={style.img} src={item?.img} alt="img" />
    </div>
  ));
};

export default function ImageLayout() {
  return (
    <div className={style.mainDiv}>
      <div className={style.SubDiv1}>
        <ImageComp imageArray={imageListDivOne} />
      </div>
      <div className={style.SubDiv2}>
        <ImageComp imageArray={imageListDivTwo} />
      </div>
    </div>
  );
}
