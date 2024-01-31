import ImageSlider from '@/components/ImageSlider/ImageSlider'
import Topheadings from '@/components/TopHeadings/TopHeadings'
import React from 'react'
import sliderImg from "./../assets/images/sliderImage.png";
import style from './allPages.module.css'


const yAxis = {
  dots: false,
    // Disable dots navigation
  infinite: true,
  speed: 500,
  // slidesToShow: 1,
  slidesToScroll: 1,
  // centerMode: true, 
  centerPadding: '0%', 
  // Adjust the padding based on your design
  vertical: true, 
verticalSwiping: true,

  // focusOnSelect: true,
   // Click on the slide to navigate
   
  
  // Set vertical to true
};
const images = [
  sliderImg,
  sliderImg,
  sliderImg,
  // Add more image paths as needed
];

const ServicePagesDetails = () => {

  return (
    <div className=''>
      <div className={style.verticalMainDiv}>
        <Topheadings heading ='Custom App Development Services & Solutions'
        paragraph='Tailored mobile app development that captivates your target audience, enhances customer acquisition, and transforms your business into a well-known brand'/>
        <ImageSlider images={images} settings={yAxis}/>
      </div>
    </div>
  )
}

export default ServicePagesDetails
