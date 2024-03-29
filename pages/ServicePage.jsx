import Heading from "@/components/Heading Component/Heading";
import GetInTouch from "@/components/GetinTouch/GetinTouch/GetinTouch";
import ImageSlider from "@/components/ImageSlider/ImageSlider";
import React from "react";
import SliderImg1 from "../assets/images/SliderImg1.png";
import SliderImg2 from "../assets/images/SliderImg2.png";
import SliderImg3 from "../assets/images/SliderImg3.png";
import SliderImg4 from "../assets/images/SliderImg4.png";
import SliderImg5 from "../assets/images/SliderImg5.png";
import SliderImg6 from "../assets/images/SliderImg6.png";
import SliderImg7 from "../assets/images/SliderImg7.png";
import SliderImg8 from "../assets/images/SliderImg8.png";
import HaveIdea from "@/components/Have Idea/HaveIdea";
import Testimonials from "@/components/Testimonials/Testimonials";
import ServiceDetails from "../components/ServiceDetails/ServiceDetails";
import sports from "../assets/images/mob.png";
import sportsNew from "../assets/images/mob.png";
// import mobGif2 from "/AppCrops.mp4"

// import MB1 from ;
// import MB2 from ;
// import MB3 from ;
// import MB4 from ;
// import MB5 from ;
// import MB6 from ;
import Topheadings from "@/components/TopHeadings/TopHeadings";
import RecentWork2 from "@/components/Recent Work Component/RecentWork2";

const sectionsDataArray = [
  {
    heading: "Mobile Application Development",
    image: "/MAD.mp4",
    listData: [
      {
        heading: "IOS Development",
        text: "iOS Development services include consulting, product strategy, UI/UX development, testing & technical delivery ",
        image: sports,
        isClicked: false,
      },
      {
        heading: "Android App Development",
        text: "Android App features include back-end system, API development, app security, development consultations, user experience & interface design",
        image: sportsNew,
        isClicked: false,
      },
      {
        heading: "React Native Development",
        text: "Our React Native app development delivers cross-platform solutions with speed and efficiency",
        image: sports,
        isClicked: false,
      },
      {
        heading: "Hybrid App Development",
        text: "Provide a seamless and impeccable user experience across Android and iOS mobile platforms, ensure fast data display and hassle-free data streaming",
        image: sports,
        isClicked: false,
      },
    ],
  },
  {
    heading: "Website Development",
    image: "/WebDev.mp4",
    listData: [
      {
        heading: "PHP Development",
        text: "Our PHP development unleashes the potential of dynamic web solutions, tailored to meet your unique business needs",
        image: sports,
        isClicked: false,
      },
      {
        heading: "Custom CMS Development",
        text: "Customized design and layout to update the content on your own without any hassle that includes WordPress, Drupal, Magento & Joomla",
        image: sportsNew,
        isClicked: false,
      },
      {
        heading: "E-COM Web Development",
        text: "Providing a complete suite of an e-commerce website that starts with research, product personalization, purchases & sales growth",
        image: sports,
        isClicked: false,
      },
    ],
  },
  {
    heading: <> Design &  <br />Creativity</>,
    image: '/UIDesign.mp4',
    listData: [
      {
        heading: "UI/UX Design",
        text: "Our UI/UX design focuses on user-centric design principles and create interfaces that elevate brands and delight users.",
        image: sports,
        isClicked: false,
      },
      {
        heading: "App Design",
        text: "Elevate user experiences with our expert app design services, blending aesthetic appeal with intuitive functionality to create captivating digital solutions.",
        image: sportsNew,
        isClicked: false,
      },
      
      {
        heading: "Logo & Brouchure Design",
        text: "Crafting diversified logos such as Iconic, Typography, Illustrative &  Animated logo design",
        image: sports,
        isClicked: false,
      },
      {
        heading: "Social Media Design",
        text: "Elevate your social media presence with captivating post designs tailored to engage and resonate with your audience",
        image: sports,
        isClicked: false,
      },
    ],
  },
  // {
  //   heading: "Future technology",
  //   image: "/future.mp4",
  //   listData: [
  //     {
  //       heading: "IOT Development",
  //       text: "  Creating cutting-edge mobile solutions for efficient content management, readable course material and secure online fee collection, Learning management systems,Communication interfaces include messaging, video conferencing, file sharing, gamification, knowledge base integration, and assessment engines. ",
  //       image: sports,
  //       isClicked: false,
  //     },
  //     {
  //       heading: "VR App Development",
  //       text: "  Creating cutting-edge mobile solutions for efficient content management, readable course material and secure online fee collection, Learning management systems,Communication interfaces include messaging, video conferencing, file sharing, gamification, knowledge base integration, and assessment engines. ",
  //       image: sportsNew,
  //       isClicked: false,
  //     },
  //   ],
  // },
  // {
  //   heading: "Solutions",
  //   image: "/solution.mp4",
  //   listData: [
  //     {
  //       heading: "On-Demand App Solutions",
  //       text: "  Creating cutting-edge mobile solutions for efficient content management, readable course material and secure online fee collection, Learning management systems,Communication interfaces include messaging, video conferencing, file sharing, gamification, knowledge base integration, and assessment engines. ",
  //       image: sports,
  //       isClicked: false,
  //     },
  //     {
  //       heading: "Enterprise Solutions",
  //       text: "  Creating cutting-edge mobile solutions for efficient content management, readable course material and secure online fee collection, Learning management systems,Communication interfaces include messaging, video conferencing, file sharing, gamification, knowledge base integration, and assessment engines. ",
  //       image: sportsNew,
  //       isClicked: false,
  //     },
  //     {
  //       heading: "Custom App Development",
  //       text: "  Creating cutting-edge mobile solutions for efficient content management, readable course material and secure online fee collection, Learning management systems,Communication interfaces include messaging, video conferencing, file sharing, gamification, knowledge base integration, and assessment engines. ",
  //       image: sports,
  //       isClicked: false,
  //     },
  //     {
  //       heading: "Enterprise Portal Development",
  //       text: "  Creating cutting-edge mobile solutions for efficient content management, readable course material and secure online fee collection, Learning management systems,Communication interfaces include messaging, video conferencing, file sharing, gamification, knowledge base integration, and assessment engines. ",
  //       image: sports,
  //       isClicked: false,
  //     },
  //     {
  //       heading: "Consulting",
  //       text: "  Creating cutting-edge mobile solutions for efficient content management, readable course material and secure online fee collection, Learning management systems,Communication interfaces include messaging, video conferencing, file sharing, gamification, knowledge base integration, and assessment engines. ",
  //       image: sports,
  //       isClicked: false,
  //     },
  //   ],
  // },
  {
    heading: <>Digital <br/>Marketing</>,
    image: "/Marketing.mp4",
    listData: [
      {
        heading: "Social Media Marketing",
        text: "Create a prominent online presence, customer engagement, brand awareness & increased retention ratio",
        image: sports,
        isClicked: false,
      },
      {
        heading: " Pay Per Click (PPC)",
        text: "Plan entire budget and campaigns that reap the benefits of improved brand visibility & higher traffic with reduced costs",
        image: sportsNew,
        isClicked: false,
      },
      {
        heading: "Search Engine Optimization",
        text: "Choose the right medium to showcase your products or services on an online platform to increase your web visibility, leads & retention ratio",
        image: sports,
        isClicked: false,
      },
      {
        heading: "Content Writing",
        text: "Strategic and a customized marketing approach that focuses on creating consistent & valuable content for a clearly defined audience ",
        image: sports,
        isClicked: false,
      },
    ],
  },
];

const SpanHeading = "GENERATE YOUR VISION";
const bigHeading = "Web Development, and Design Solutions for the Modern Digital Era!";
const description =
  "At TechVerticks, we specialize in offering comprehensive services in mobile app development, web development, and design. Our team of experts is dedicated to unlocking innovation and transforming businesses for the modern digital era.";
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
const ServicePage = () => {
  return (
    <div>
      <Heading
        SpanHeading={SpanHeading}
        bigHeading="We Serve Our Services!"
        heading2="In Mobile Apps, Web Development, and Design Solutions for the Modern Digital Era!"
        description={description}
        ServicePage_Css
        customStyles={{
          // width: "90vw",
          fontSize: "4vw",
          lineHeight: "4vw",

        }}
        scroll = "#recent2"
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
