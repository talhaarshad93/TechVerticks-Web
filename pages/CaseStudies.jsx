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
import CaseStudiesDetails from "../components/ServicePageDetails/CaseStudiesDetails";
import GetInTouch from "@/components/GetinTouch/GetinTouch/GetinTouch";
import Tv from "@/components/TV img&video com/Tv";
import Swift from "../assets/images/Swift.png";
import Ionic from "../assets/images/Ionic.png";
import IOS from "../assets/images/IOS.png";
import Andriod from "../assets/images/Android.png";
import React_Native from "../assets/images/React_Native.png";
import Katlin from "../assets/images/Katlin.png";
// import Flutter from "../../assets/images/Flutter.png";
import Flutter from "../assets/images/Flutter.png";
import ObjectiveC from "../assets/images/ObjectiveC.png";
import { useRouter } from "next/router";

const SpanHeading = "OUR WORKS";
const bigHeading = "We offer the diversity of skills";
const description =
  "Tech Verticks offers full-cycle design & development services to clients in digitizing their business idea into a successful launch.";

let para = (
  <>
  {"It is a long established fact that a reader will be distracted by the "}
  readable content of a page when looking at its layout. The point of using
  {" Lorem Ipsum is that it has a more-or-less normal distribution of letters, as"}
  opposed to using {'Content here, content here'}, making it look like readable
  English.
  <br />
  <br />
  {" Many desktop publishing packages and web page editors now use Lorem"}
  Ipsum as their default model text, and a search for {'lorem ipsum'} will
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
let result = "Results and Impact";
let challenge = "Project Challenges";

const xAxis = {
  dots: false, // Disable dots navigation
  // infinite: true,
  speed: 10000,
  autoplay: true,
  arrows: false,
  autoplaySpeed: 0,
  cssEase: 'linear',
  slidesToShow: 1,
  slidesToScroll: 4,
  centerMode: true,
  // Enable center mode
  centerPadding: "21%", // Adjust the padding based on your design
  // focusOnSelect: true,
 
};
const images = [
  sliderImg,
  sliderImg,
  sliderImg,
  // Add more image paths as needed
];
const ImageData = [
  {
    id: 1,
    image: Swift,
    alt: "Swift",
  },
  {
    id: 2,
    image: Ionic,
    alt: "Ionic",
  },
  {
    id: 3,
    image: IOS,
    alt: "iOS",
  },
  {
    id: 4,
    image: Andriod,
    alt: "Andriod",
  },
  {
    id: 5,
    image: React_Native,
    alt: "React Native",
  },
  {
    id: 6,
    image: Katlin,
    alt: "Kotlin",
  },
  {
    id: 7,
    image: Flutter,
    alt: "Flutter",
  },
  {
    id: 8,
    image: ObjectiveC,
    alt: "Objective-c",
  },
];

const CaseStudies = () => {
  const router = useRouter()
  const { btnTxt } = router?.query;

  console.log('cehdksajkdjaskjjdksakdhsakjda',btnTxt)

  return (
    <div>
      <CaseStudiesDetails btnTxt={btnTxt}/>
      <Tv video= '/CaseStudies.mp4'/>
      <Section heading={goal}  para={para} image={goalImg} />
      <Section heading={target}  para={para} image={targetImg} targetCom />
      <HaveIdea />
      <Section heading={challenge}  para={para} image={challengeImg} />
      <TechnologyWeUse image={ImageData} heading = 'Technologies We Use'/>
      <ImageSlider images={images} settings={xAxis} CaseStudiesCss  />
      <Section heading={result}  para={para} image={resultImg} targetCom />
      <GetInTouch/>

      {/* <Section images = {challengeImg} challenge = {challenge} para={para}/> */}
    </div>
  );
};

export default CaseStudies;
