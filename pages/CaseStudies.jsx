import Section from "@/components/Case Study/Section Com/Section";
import HaveIdea from "@/components/Have Idea/HaveIdea";
import Heading from "@/components/Heading Component/Heading";
import React from "react";
import goalImg from "../assets/images/project.png";
import targetImg from "../assets/images/target.png";
import challengeImg from "../assets/images/challenge.png";
import resultImg from "../assets/images/result.png";
import TechnologyWeUse from "@/components/SPD_Technology/TechnologyWeUse";
import ImageSlider from "@/components/ImageSlider/ImageSlider";
import sliderImg from '../assets/images/technology.png'
import WhyChoose from "@/components/SPD-WhyChoose/WhyChoose";

const SpanHeading = "OUR WORKS";
const bigHeading = "We offer the diversity of skills";
const description =
  "Tech Verticks offers full-cycle design & development services to clients in digitizing their business idea into a successful launch.";

let para = (
  <>
  {"It is a long established fact that a reader will be distracted by the "}
  readable content of a page when looking at its layout. The point of using
  {" Lorem Ipsum is that it has a more-or-less normal distribution of letters, as"}
  opposed to using 'Content here, content here', making it look like readable
  English.
  <br />
  <br />
  {" Many desktop publishing packages and web page editors now use Lorem"}
  Ipsum as their default model text, and a search for 'lorem ipsum' will
  uncover many web sites still in their infancy. Various versions have evolved
  over the years, sometimes by accident, sometimes on purpose (injected humour
  and the like).
  <br />
  <br />
  <br />
</>
)
//   <>
//     "It is a long established fact that a reader will be distracted by the
//     readable content of a page when looking at its layout. The point of using
//     Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
//     opposed to using 'Content here, content here', making it look like readable
//     English.
//     <br />
//     <br /> Many desktop publishing packages and web page editors now use Lorem
//     Ipsum as their default model text, and a search for 'lorem ipsum' will
//     uncover many web sites still in their infancy. Various versions have evolved
//     over the years, sometimes by accident, sometimes on purpose (injected humour
//     and the like).";
//   </>
// );
// const images = [goalImg, targetImg,resultImg];

let goal = "Project Goal";
let target = "Target Audience";
let challenge = "Project Challenges";

const xAxis = {
  dots: false, 
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
 
  centerPadding: "21%",
 
};
const images = [
  sliderImg,
  sliderImg,
  sliderImg,
  // Add more image paths as needed
];

const CaseStudies = () => {
  return (
    <div>
      <WhyChoose/>
      <Heading
        SpanHeading={SpanHeading}
        bigHeading={bigHeading}
        description={description}
        CaseStudies_Css
      />
      <Section heading={goal}  para={para} image={goalImg} />
      <Section heading={target}  para={para} image={targetImg} targetCom />
      <HaveIdea />
      <Section heading={challenge}  para={para} image={challengeImg} />
      <TechnologyWeUse heading = 'Technologies We Use'/>
      <ImageSlider images={images} settings={xAxis} />
     

      {/* <Section images = {challengeImg} challenge = {challenge} para={para}/> */}
    </div>
  );
};

export default CaseStudies;
