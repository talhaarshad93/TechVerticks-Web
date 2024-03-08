import GetInTouch from "@/components/GetinTouch/GetinTouch/GetinTouch";
import HaveIdea from "@/components/Have Idea/HaveIdea";
import Heading from "@/components/Heading Component/Heading";
import SliderImg1 from "../assets/images/SliderImg1.png";
import SliderImg2 from "../assets/images/SliderImg2.png";
import SliderImg3 from "../assets/images/SliderImg3.png";
import SliderImg4 from "../assets/images/SliderImg4.png";
import SliderImg5 from "../assets/images/SliderImg5.png";
import SliderImg6 from "../assets/images/SliderImg6.png";
import SliderImg7 from "../assets/images/SliderImg7.png";
import SliderImg8 from "../assets/images/SliderImg8.png";
import React from "react";
import Crafting from "@/components/Solution/Crafting/Crafting";
import Industries from "@/components/Industries/Industries";
import OverPartner from "@/components/OverPartnerComp/OverPartner";
import Testimonials from "@/components/Testimonials/Testimonials";
import RecentWork2 from "@/components/Recent Work Component/RecentWork2";
import ImageSlider from "@/components/ImageSlider/ImageSlider";
const xAxis = {
  dots: false, // Disable dots navigation
  // infinite: true,
  speed: 8000,
  autoplay: true,
  arrows: false,
  autoplaySpeed: 10,
  cssEase: 'linear',
  slidesToShow: 1,
  slidesToScroll: 8,
  centerMode: true,
  // Enable center mode
  centerPadding: "21%", // Adjust the padding based on your design
  // focusOnSelect: true,
};
const images = [
  SliderImg1,
  SliderImg2,
  SliderImg3,
  SliderImg4,
  SliderImg5,
  SliderImg6,
  SliderImg7,
  SliderImg8,
  // Add more image paths as needed
];

const SpanHeading = "Our Solutions";
const bigHeading = "Innovative Solutions..!!";
const description =
  "We are dedicated to delivering transformative software and app development solutions that evolve and adapt to meet the unique requirements of our clients, propelling their digital evolution and catalyzing profound transformations.";

const Solutions = () => {
  return (
    <div>
      <Heading
        SpanHeading={SpanHeading}
        heading2={<>That catalyze <br />transformation</>}
        bigHeading={bigHeading}
        description={description}
        SolutionPage_Css
        scroll="#crafting"
      />
      <ImageSlider images={images} settings={xAxis} />
      <Crafting />
      <Industries />
      <OverPartner />
      <HaveIdea />
      <RecentWork2 />
      <Testimonials />
      <GetInTouch />
    </div>
  );
};

export default Solutions;
