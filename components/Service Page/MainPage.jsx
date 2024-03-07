// YourComponent.js
import React from "react";
import styles from "./MainPage.module.css";
import sliderImg from "../../assets/images/SliderImg1.png";
import ImageSlider from "../ImageSlider/ImageSlider";
import ServiceDetails from "../ServiceDetails/ServiceDetails";
import sports from "../../assets/images/mob.png";
import sportsNew from "../../assets/images/mob.png";
import MB1 from "../../assets/images/serviceImg.png";
import MB2 from "../../assets/images/web.png";
import MB3 from "../../assets/images/design.png";
import MB4 from "../../assets/images/future.png";
import MB5 from "../../assets/images/solution.png";
import MB6 from "../../assets/images/digital.png";
import Testimonials from "../Testimonials/Testimonials";
import SeeProject from "../See Project/SeeProject";
import HaveIdea from "../Have Idea/HaveIdea";
import Section from "../Case Study/Section Com/Section";
import Crafting from "../Solution/Crafting/Crafting";

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
    heading: "Design And Creativity",
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

const MainPage = () => {
  const images = [
    sliderImg,
    sliderImg,
    sliderImg,
    // Add more image paths as needed
  ];

  return (
    <div className={styles.container}>
      <ImageSlider images={images} />

      {/* Render ServiceDetails for each data set */}
      {sectionsDataArray.map((newData, index) => (
        <ServiceDetails key={index} newData={newData} />
      ))}
      <HaveIdea/>
      <SeeProject/>
      <Testimonials />
      <Section/>
      <Crafting/>
    </div>
  );
};

export default MainPage;
