import React, { useState } from "react";
import Topheadings from "../TopHeadings/TopHeadings";
import SubHeading from "./IndustriesSubHeading/SubHeading";
import Education from "../../assets/images/Education.svg";
import Legal from "../../assets/images/Legal.svg";
import Health from "../../assets/images/Health.svg";
import Sports from "../../assets/images/sports.svg"
import Fitness from "../../assets/images/Fitness.svg";
import Learning from "../../assets/images/Learning.svg";
import style from "../Industries/IndustriesSubHeading/SubHeading.module.css";
import classNames from "classnames";
import Image from "next/image";
import { data } from "jquery";

// Example Data
const sectionsData = [
  {
    heading: "Education",
    text: " Revolutionizing education with captivating design and mobile app solutions, enhancing learning experiences through interactive content, personalized study plans, and seamless collaboration, empowering students and educators to thrive in today's digital age. ",
    image: Education,
    isClicked: false,
  },
  {
    heading: "Legal",
    text: " Reimagining the legal landscape through innovative web development and mobile app solutions, enabling efficient case management, secure document handling, and accessible legal services to empower clients and practitioners alike in navigating the complexities of the legal system ",
    image: Legal,
    isClicked: false,
  },
  {
    heading: "Health",
    text: "  Elevating the health industry's digital presence with cutting-edge web development and mobile app solutions, tailored to streamline patient care, facilitate remote consultations, and empower individuals in managing their well-being seamlessly ",
    image: Health,
    isClicked: false,
  },
  {
    heading: "Sports",
    text: " Transforming the sports industry landscape with dynamic web development and mobile app solutions, fostering fan engagement, athlete performance tracking, and seamless event management to elevate the sports experience for enthusiasts worldwide ",
    image: Sports,
    isClicked: false,
  },
  {
    heading: "Fitness",
    text: " Empowering fitness enthusiasts with intuitive web development and mobile app solutions, offering personalized workout routines, nutrition tracking, and community engagement to foster motivation and support in achieving health and wellness goals ",
    image: Fitness,
    isClicked: false,
  },
  {
    heading: "Learning",
    text: "  Creating cutting-edge mobile solutions for efficient content management, readable course material and secure online fee collection, Learning management systems,Communication interfaces include messaging, video conferencing, file sharing, gamification, knowledge base integration, and assessment engines. ",
    image: Learning,
    isClicked: false,
  },
];

const Industries = () => {
  const title = "INDUSTRIES WE SERVE";
  const heading = " Our Industry Expertise";
  const [industryData, setIndustryData] = useState(sectionsData);
  const [sideImage, setSideImage] = useState(null);

  const taskPress = (heading, type, image) => {
    setSideImage(image);
    let newArray = industryData?.map((val, i) => {
      if (val.heading == heading) {
        return { ...val, isClicked: type };
      } else {
        return { ...val, isClicked: false };
      }
    });
    // console.log("new array------", newArray);
    setIndustryData(newArray);
  };

  return (
    <div className={style.container}>
      <Topheadings className="" title={title} heading={heading} />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ width: "50%" }}>
          {industryData.map((data, index) => (
            <SubHeading
              key={index}
              data={data}
              width = "100%"
              handleClick={() =>
                taskPress(data?.heading, !data?.isClicked, data?.image)
              }
            />
          ))}
        </div>

        {sideImage && (
          <div style={{ width: "45%",transition:'2s ' }}>
            <Image
              src={sideImage}
              alt={"alt"}
              className={classNames(style.img)}
            />
          </div>
        )}
      </div>
     
    </div>
  );
};

export default Industries;
