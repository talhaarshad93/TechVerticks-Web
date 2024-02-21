// ImageSlider.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './ImageSlider.module.css';


import Image from "next/image";


const ImageSlider = ({ images,settings,CaseStudiesCss }) => {
 

  return (
    <div className={styles.main}
    style={{
      ...(CaseStudiesCss && {marginTop: "12vw"})}}>

    <Slider {...settings} className={styles.slider}>
      {images.map((image, index) => (
        <div key={index} className={styles.slide}>
          <Image className={styles.image} src={image} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </Slider>
      </div>
  );
};

export default ImageSlider;
