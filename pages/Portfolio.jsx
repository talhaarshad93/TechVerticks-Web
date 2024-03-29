import GetInTouch from "@/components/GetinTouch/GetinTouch/GetinTouch";
import Heading from "@/components/Heading Component/Heading";
import Testimonials from "@/components/Testimonials/Testimonials";
// import mobGif from '../assets/images/mobgif1.gif'
// import mobGif2 from '../assets/images/mobgif2.gif'
// import ltopGif from '../assets/images/webgif.gif'

import React from "react";
import ImgandBtn from "@/components/Recent Work Component/ImgandBtn";
import style from "./allPages.module.css";
import CS_Button from "@/components/CS_Buttons/CS_buttons";

const portfolioArray = [
  {
    imageUrl: "/AppCrops.mp4",
    btnTxt: "App Crops",
  },
  {
    imageUrl: "/Potrait Video 1.mp4",
    btnTxt: "The Stryde",
  },
  {
    imageUrl: "/Geelink.mp4",
    btnTxt: "The Geelink",
  },
  {
    imageUrl: "/Potrait Video 3.mp4",
    btnTxt: "Equine Trax",
  },
  {
    imageUrl: "/SmartPark.mp4",
    btnTxt: "Smart Park",
  },
  {
    imageUrl: "/Cerwiz.mp4",
    btnTxt: "The Cerwiz",
  },
  {
    imageUrl: "/Potrait Video 2.mp4",
    btnTxt: "Muslim Me",
  },
];
const portfolioArray2 = [
  {
    imageUrl: "/Potrait Video 2.mp4",
    btnTxt: "Muslim Me",
  },
  {
    imageUrl: "/SmartPark.mp4",
    btnTxt: "Smart Park",
  },
  {
    imageUrl: "/Cerwiz.mp4",
    btnTxt: "The Cerwiz",
  },

  {
    imageUrl: "/Geelink.mp4",
    btnTxt: "The Geelink",
  },
  {
    imageUrl: "/Potrait Video 3.mp4",
    btnTxt: "Equine Trax",
  },
  {
    imageUrl: "/Potrait Video 1.mp4",
    btnTxt: "The Stryde",
  },
  {
    imageUrl: "/AppCrops.mp4",
    btnTxt: "App Crops",
  },
];
const SpanHeading = "OUR Works";
const bigHeading = "We Offer!! ";
const description =
  "Tech Verticks offers full-cycle design & development services to clients in digitizing their business idea into a successful launch.";
//  export default function ABC () {
// return()
//  }
const Portfolio = () => {
  return (
    <div>
      <Heading
        SpanHeading={SpanHeading}
        heading2={
          <>
            The diversity <br /> of skills
          </>
        }
        bigHeading={bigHeading}
        description={description}
        PortfolioPage_Css
        scroll="#testimonials"
      />
      <CS_Button />
      <div className={style.portfolioDivMain}>
        <div className={style.portfolioDiv}>
          {portfolioArray.map((newData, index) => (
            <ImgandBtn
              key={index}
              imageUrl={newData.imageUrl}
              width={"100%"}
              imageHeight={100}
              imageWidth={100}
              btnTxt={newData.btnTxt}
            />
          ))}
        </div>

        <div className={style.portfolioDiv1}>
          {portfolioArray2.map((newData, index) => (
            <ImgandBtn
              key={index}
              imageUrl={newData.imageUrl}
              width={"100%"}
              imageHeight={100}
              imageWidth={100}
              btnTxt={newData.btnTxt}
            />
          ))}
        </div>
      </div>
      <Testimonials />
      <GetInTouch />
    </div>
  );
};

export default Portfolio;
