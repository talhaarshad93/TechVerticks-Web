import Heading from "@/components/Heading Component/Heading";
import GetInTouch from "@/components/GetinTouch/GetinTouch/GetinTouch";
import ImageSlider from "@/components/ImageSlider/ImageSlider";
import React from "react";
import sliderImg from "./../assets/images/sliderImage.png";
import HaveIdea from "@/components/Have Idea/HaveIdea";
import Testimonials from "@/components/Testimonials/Testimonials";
import ServiceDetails from "../components/ServiceDetails/ServiceDetails";
import sports from "../assets/images/sports.png";
import sportsNew from "../assets/images/mob.png";
import MB1 from "../assets/Our Services GIF folder/mobile.gif";
import MB2 from "../assets/Our Services GIF folder/web.gif";
import MB3 from "../assets/Our Services GIF folder/design.gif";
import MB4 from "../assets/Our Services GIF folder/future.gif";
import MB5 from "../assets/Our Services GIF folder/solution.gif";
import MB6 from "../assets/Our Services GIF folder/digital.gif";
import Topheadings from "@/components/TopHeadings/TopHeadings";
import RecentWork2 from "@/components/Recent Work Component/RecentWork2";

const sectionsDataArray = [
  {
    heading: "Mobile Application Development",
    image: MB1,
    listData: [
      {
        heading: "IOS Development",
        text: "  Creating cutting-edge mobile solutions for efficient content management, readable course material and secure online fee collection, Learning management systems,Communication interfaces include messaging, video conferencing, file sharing, gamification, knowledge base integration, and assessment engines. ",
        image: sports,
        isClicked: false,
      },
      {
        heading: "Android App Development",
        text: "  Creating cutting-edge mobile solutions for efficient content management, readable course material and secure online fee collection, Learning management systems,Communication interfaces include messaging, video conferencing, file sharing, gamification, knowledge base integration, and assessment engines. ",
        image: sportsNew,
        isClicked: false,
      },
      {
        heading: "React Native App Development",
        text: "  Creating cutting-edge mobile solutions for efficient content management, readable course material and secure online fee collection, Learning management systems,Communication interfaces include messaging, video conferencing, file sharing, gamification, knowledge base integration, and assessment engines. ",
        image: sports,
        isClicked: false,
      },
      {
        heading: "Hybrid App Development",
        text: "  Creating cutting-edge mobile solutions for efficient content management, readable course material and secure online fee collection, Learning management systems,Communication interfaces include messaging, video conferencing, file sharing, gamification, knowledge base integration, and assessment engines. ",
        image: sports,
        isClicked: false,
      },
    ],
  },
  {
    heading: "Website Development",
    image: MB2,
    listData: [
      {
        heading: "PHP Development",
        text: "  Creating cutting-edge mobile solutions for efficient content management, readable course material and secure online fee collection, Learning management systems,Communication interfaces include messaging, video conferencing, file sharing, gamification, knowledge base integration, and assessment engines. ",
        image: sports,
        isClicked: false,
      },
      {
        heading: "Custom CMS Development",
        text: "  Creating cutting-edge mobile solutions for efficient content management, readable course material and secure online fee collection, Learning management systems,Communication interfaces include messaging, video conferencing, file sharing, gamification, knowledge base integration, and assessment engines. ",
        image: sportsNew,
        isClicked: false,
      },
      {
        heading: "Ecommerce Website Development",
        text: "  Creating cutting-edge mobile solutions for efficient content management, readable course material and secure online fee collection, Learning management systems,Communication interfaces include messaging, video conferencing, file sharing, gamification, knowledge base integration, and assessment engines. ",
        image: sports,
        isClicked: false,
      },
    ],
  },
  {
    heading: "Design & Creativity",
    image: MB3,
    listData: [
      {
        heading: "UI/UX Design",
        text: "  Creating cutting-edge mobile solutions for efficient content management, readable course material and secure online fee collection, Learning management systems,Communication interfaces include messaging, video conferencing, file sharing, gamification, knowledge base integration, and assessment engines. ",
        image: sports,
        isClicked: false,
      },
      {
        heading: "App Design",
        text: "  Creating cutting-edge mobile solutions for efficient content management, readable course material and secure online fee collection, Learning management systems,Communication interfaces include messaging, video conferencing, file sharing, gamification, knowledge base integration, and assessment engines. ",
        image: sportsNew,
        isClicked: false,
      },
      {
        heading: "Mobile App Prototyping",
        text: "  Creating cutting-edge mobile solutions for efficient content management, readable course material and secure online fee collection, Learning management systems,Communication interfaces include messaging, video conferencing, file sharing, gamification, knowledge base integration, and assessment engines. ",
        image: sports,
        isClicked: false,
      },
      {
        heading: "Logo & Brouchure Design",
        text: "  Creating cutting-edge mobile solutions for efficient content management, readable course material and secure online fee collection, Learning management systems,Communication interfaces include messaging, video conferencing, file sharing, gamification, knowledge base integration, and assessment engines. ",
        image: sports,
        isClicked: false,
      },
      {
        heading: "Social Media Design",
        text: "  Creating cutting-edge mobile solutions for efficient content management, readable course material and secure online fee collection, Learning management systems,Communication interfaces include messaging, video conferencing, file sharing, gamification, knowledge base integration, and assessment engines. ",
        image: sports,
        isClicked: false,
      },
    ],
  },
  {
    heading: "Future technology",
    image: MB4,
    listData: [
      {
        heading: "IOT Development",
        text: "  Creating cutting-edge mobile solutions for efficient content management, readable course material and secure online fee collection, Learning management systems,Communication interfaces include messaging, video conferencing, file sharing, gamification, knowledge base integration, and assessment engines. ",
        image: sports,
        isClicked: false,
      },
      {
        heading: "VR App Development",
        text: "  Creating cutting-edge mobile solutions for efficient content management, readable course material and secure online fee collection, Learning management systems,Communication interfaces include messaging, video conferencing, file sharing, gamification, knowledge base integration, and assessment engines. ",
        image: sportsNew,
        isClicked: false,
      },
    ],
  },
  {
    heading: "Solutions",
    image: MB5,
    listData: [
      {
        heading: "On-Demand App Solutions",
        text: "  Creating cutting-edge mobile solutions for efficient content management, readable course material and secure online fee collection, Learning management systems,Communication interfaces include messaging, video conferencing, file sharing, gamification, knowledge base integration, and assessment engines. ",
        image: sports,
        isClicked: false,
      },
      {
        heading: "Enterprise Solutions",
        text: "  Creating cutting-edge mobile solutions for efficient content management, readable course material and secure online fee collection, Learning management systems,Communication interfaces include messaging, video conferencing, file sharing, gamification, knowledge base integration, and assessment engines. ",
        image: sportsNew,
        isClicked: false,
      },
      {
        heading: "Custom App Development",
        text: "  Creating cutting-edge mobile solutions for efficient content management, readable course material and secure online fee collection, Learning management systems,Communication interfaces include messaging, video conferencing, file sharing, gamification, knowledge base integration, and assessment engines. ",
        image: sports,
        isClicked: false,
      },
      {
        heading: "Enterprise Portal Development",
        text: "  Creating cutting-edge mobile solutions for efficient content management, readable course material and secure online fee collection, Learning management systems,Communication interfaces include messaging, video conferencing, file sharing, gamification, knowledge base integration, and assessment engines. ",
        image: sports,
        isClicked: false,
      },
      {
        heading: "Consulting",
        text: "  Creating cutting-edge mobile solutions for efficient content management, readable course material and secure online fee collection, Learning management systems,Communication interfaces include messaging, video conferencing, file sharing, gamification, knowledge base integration, and assessment engines. ",
        image: sports,
        isClicked: false,
      },
    ],
  },
  {
    heading: "Digital Marketing",
    image: MB6,
    listData: [
      {
        heading: "Social Media Marketing",
        text: "  Creating cutting-edge mobile solutions for efficient content management, readable course material and secure online fee collection, Learning management systems,Communication interfaces include messaging, video conferencing, file sharing, gamification, knowledge base integration, and assessment engines. ",
        image: sports,
        isClicked: false,
      },
      {
        heading: " Pay Per Click (PPC)",
        text: "  Creating cutting-edge mobile solutions for efficient content management, readable course material and secure online fee collection, Learning management systems,Communication interfaces include messaging, video conferencing, file sharing, gamification, knowledge base integration, and assessment engines. ",
        image: sportsNew,
        isClicked: false,
      },
      {
        heading: "Search Engine Optimization",
        text: "  Creating cutting-edge mobile solutions for efficient content management, readable course material and secure online fee collection, Learning management systems,Communication interfaces include messaging, video conferencing, file sharing, gamification, knowledge base integration, and assessment engines. ",
        image: sports,
        isClicked: false,
      },
      {
        heading: "Content Writing",
        text: "  Creating cutting-edge mobile solutions for efficient content management, readable course material and secure online fee collection, Learning management systems,Communication interfaces include messaging, video conferencing, file sharing, gamification, knowledge base integration, and assessment engines. ",
        image: sports,
        isClicked: false,
      },
    ],
  },
];

const SpanHeading = "GENERATE YOUR VISION";
const bigHeading = "Elevate experiences and activate growth";
const description =
  "From bold new ideas to innovative platforms and branding solutions, we’ve got you covered. Our team works closely with you to strategize the next move and build custom solutions that unlock your full potential.";
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
const ServicePage = () => {
  return (
    <div>
      <Heading
        SpanHeading={SpanHeading}
        bigHeading={bigHeading}
        description={description}
        ServicePage_Css
      />
      <ImageSlider images={images} settings={xAxis} />
      {sectionsDataArray.map((newData, index) => (
        <ServiceDetails key={index} newData={newData} />
      ))}
      <HaveIdea />
    <RecentWork2/>
      <Testimonials />
      <GetInTouch />
    </div>
  );
};

export default ServicePage;
