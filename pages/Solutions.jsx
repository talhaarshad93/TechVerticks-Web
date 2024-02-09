import GetInTouch from "@/components/GetinTouch/GetinTouch/GetinTouch";
import HaveIdea from "@/components/Have Idea/HaveIdea";
import Heading from "@/components/Heading Component/Heading";
import ImageSlider from "@/components/ImageSlider/ImageSlider";
import sliderImg from "./../assets/images/IntroImage.png";

import React from "react";
import Crafting from "@/components/Solution/Crafting/Crafting";
import Industries from "@/components/Industries/Industries";
import OverPartner from "@/components/OverPartnerComp/OverPartner";
import Testimonials from "@/components/Testimonials/Testimonials";
import RecentWork2 from "@/components/Recent Work Component/RecentWork2";
const xAxis = {
  dots: false, // Disable dots navigation
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  // Enable center mode
  centerPadding: "21%", // Adjust the padding based on your design
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

const SpanHeading = "Our Solutions";
const bigHeading = "Innovative solutions that catalyze transformation";
const description =
  "We are dedicated to delivering transformative software and app development solutions that evolve and adapt to meet the unique requirements of our clients, propelling their digital evolution and catalyzing profound transformations.";

const Solutions = () => {
  return (
    <div>
      <Heading
        SpanHeading={SpanHeading}
        bigHeading={bigHeading}
        description={description}
        SolutionPage_Css
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
