import GetInTouch from '@/components/GetinTouch/GetinTouch/GetinTouch'
import ImageSlider from '@/components/ImageSlider/ImageSlider'
import React from 'react'
import sliderImg from "./../assets/images/sliderImage.png";
import HaveIdea from '@/components/Have Idea/HaveIdea';
import Testimonials from '@/components/Testimonials/Testimonials';





const xAxis = {
  dots: false,  // Disable dots navigation
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true, 
  // Enable center mode
  centerPadding: '21%', // Adjust the padding based on your design
  // focusOnSelect: true,
   // Click on the slide to navigate
   
  
  // Set vertical to true
//    vertical: true, 
// verticalSwiping: true,
};
const images = [
  sliderImg,
  sliderImg,
  sliderImg,
  // Add more image paths as needed
];
const Service = () => {
  
  return (
    <div className=''>
      <ImageSlider images={images} settings={xAxis}/>
      <HaveIdea/>
      <Testimonials/>
      <GetInTouch/>
      
    </div>
  )
}

export default Service
