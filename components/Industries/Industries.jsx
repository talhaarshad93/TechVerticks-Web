import React, { useState } from "react";
import Topheadings from "../TopHeadings/TopHeadings";
import SubHeading from "./IndustriesSubHeading/SubHeading";
import sports from "../../assets/images/sports.png";
import sportsNew from "../../assets/images/mob.png";
import style from "../Industries/IndustriesSubHeading/SubHeading.module.css";
import classNames from "classnames";
import Image from "next/image";
import { data } from "jquery";

// Example Data
const sectionsData = [
  {
    heading: "Education",
    text: "  Creating cutting-edge mobile solutions for efficient content management, readable course material and secure online fee collection, Learning management systems,Communication interfaces include messaging, video conferencing, file sharing, gamification, knowledge base integration, and assessment engines. ",
    image: sports,
    isClicked: false,
  },
  {
    heading: "Legal",
    text: "  Creating cutting-edge mobile solutions for efficient content management, readable course material and secure online fee collection, Learning management systems,Communication interfaces include messaging, video conferencing, file sharing, gamification, knowledge base integration, and assessment engines. ",
    image: sportsNew,
    isClicked: false,
  },
  {
    heading: "Health",
    text: "  Creating cutting-edge mobile solutions for efficient content management, readable course material and secure online fee collection, Learning management systems,Communication interfaces include messaging, video conferencing, file sharing, gamification, knowledge base integration, and assessment engines. ",
    image: sports,
    isClicked: false,
  },
  {
    heading: "Sports",
    text: "  Creating cutting-edge mobile solutions for efficient content management, readable course material and secure online fee collection, Learning management systems,Communication interfaces include messaging, video conferencing, file sharing, gamification, knowledge base integration, and assessment engines. ",
    image: sports,
    isClicked: false,
  },
  {
    heading: "Fitness",
    text: "  Creating cutting-edge mobile solutions for efficient content management, readable course material and secure online fee collection, Learning management systems,Communication interfaces include messaging, video conferencing, file sharing, gamification, knowledge base integration, and assessment engines. ",
    image: sports,
    isClicked: false,
  },
  {
    heading: "Learning",
    text: "  Creating cutting-edge mobile solutions for efficient content management, readable course material and secure online fee collection, Learning management systems,Communication interfaces include messaging, video conferencing, file sharing, gamification, knowledge base integration, and assessment engines. ",
    image: sports,
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
      <Topheadings className= "" title={title} heading={heading} />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{  width: "50%" }}>
          {industryData.map((data, index) => (
            <SubHeading
              key={index}
              data={data}
              handleClick={() =>
                taskPress(data?.heading, !data?.isClicked, data?.image)
              }
            />
          ))}
        </div>

        {sideImage && (
          <div style={{  width: "45%" }}>
            <Image
              src={sideImage}
              alt={"alt"}
              className={classNames(style.img, "col-")}
            />
          </div>
        )}
      </div>
      <div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Industries;
