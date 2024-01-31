import Heading from '@/components/Heading Component/Heading'
import GetInTouch from '@/components/GetinTouch/GetinTouch/GetinTouch'
import ImageSlider from '@/components/ImageSlider/ImageSlider'
import React from 'react'
import sliderImg from "./../assets/images/sliderImage.png";
import HaveIdea from '@/components/Have Idea/HaveIdea';
import Testimonials from '@/components/Testimonials/Testimonials';


const SpanHeading ="GENERATE YOUR VISION"
const bigHeading ="Elevate experiences and activate growth"
const description ="From bold new ideas to innovative platforms and branding solutions, we’ve got you covered. Our team works closely with you to strategize the next move and build custom solutions that unlock your full potential."


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
const ServicePage = () => {
  return (
    <div>
      <Heading SpanHeading={SpanHeading} bigHeading = {bigHeading} description={description} ServicePage_Css/>  
      <ImageSlider images={images} settings={xAxis}/>
      <HaveIdea/>
      <Testimonials/>
      <GetInTouch/>
      
    </div>
  )
}

export default ServicePage
