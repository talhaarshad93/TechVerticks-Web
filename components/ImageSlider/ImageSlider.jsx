// ImageSlider.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './ImageSlider.module.css';

import Image from "next/image";


const ImageSlider = ({ images }) => {
  const settings = {
    dots: false,  // Disable dots navigation
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true, // Enable center mode
    centerPadding: '21%', // Adjust the padding based on your design
    focusOnSelect: true, // Click on the slide to navigate
     
    
    // Set vertical to true
  //    vertical: true, 
  // verticalSwiping: true,
  };

  return (
    <Slider {...settings} className={styles.slider}>
      {images.map((image, index) => (
        <div key={index} className={styles.slide}>
          <Image className={styles.image} src={image} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </Slider>
  );
};

export default ImageSlider;
