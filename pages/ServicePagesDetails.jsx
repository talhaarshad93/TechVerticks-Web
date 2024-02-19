// ServicePagesDetails.js
import ImageSlider from "@/components/ImageSlider/ImageSlider";
import Topheadings from "@/components/TopHeadings/TopHeadings";
import React from "react";
import sliderImg from "./../assets/images/sliderImage.png";
import style from "./ServicePagesDetails.module.css";
import GetInTouch from "@/components/GetinTouch/GetinTouch/GetinTouch";
import HaveIdea from "@/components/Have Idea/HaveIdea";
import Webuild from "@/components/We Build/Webuild";
import RecentWork2 from "@/components/Recent Work Component/RecentWork2";
import RecentWork3 from "@/components/Recent Work Component/RecentWork3";
import Crafting from "@/components/Solution/Crafting/Crafting";
import TechnologyWeUse from "@/components/SPD_Technology/TechnologyWeUse";
import WhyChoose from "@/components/SPD-WhyChoose/WhyChoose";
import OurProcess from "@/components/SPD-OurProcess/OurProcess";
import Industries from "@/components/Industries/Industries";
import AskQuestion from "@/components/SPD_AskQuestion/AskQuestion";
import OverPartner from "@/components/OverPartnerComp/OverPartner";

const yAxis = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToScroll: 1,
  vertical: true,
  verticalSwiping: true,
  autoplay: true,
  initialSlide: 0,
  pauseOnHover: true,
  centerPadding: "0%",
};

const images = [sliderImg, sliderImg, sliderImg];
const data = [
  {
    heading: "Flutter Apps",
    para: "Create mobile applications using the Flutter framework developed by Google",
  },
  {
    heading: "Android App Development",
    para: "Wide array of software solutions for smartphones, tablets, and other Android-powered devices.",
  },
  {
    heading: "IOS Development",
    para: "Create apps for distribution on the Apple App Store while serving a diverse range of purposes and catering to millions of iOS device users",
  },
  {
    heading: "Progressive Web Apps",
    para: "Hybrid approach that combines the best of web and mobile app technologies, offering a user-friendly, fast, and reliable experience without the need for traditional app installations.",
  },
  {
    heading: "Hybrid Apps",
    para: "Create multiple platforms while providing some access to native device features",
  },
  {
    heading: "React Native Apps",
    para: "A powerful framework to building mobile apps that balances the efficiency and  performance of native apps",
  },
  {
    heading: "Ruby on Rails Development",
    para: "build a scalable solution, create new functionalities for your existing system, or tackle technical issues with ROR",
  },
];

const title = "Technologies We Use";
const heading = (<>Mobile App Developers:{<br/>} Our Expertise in Mobile Technologies</>)
const paragraph = 
  `We're not just keeping up with the latest mobile technologies – we're pioneering them. Our commitment to innovation drives us to stay at the forefront of the mobile app development landscape. `;

const ServicePagesDetails = () => {
  return (
    <div>
      <div className={style.mainContainer}>
        <div className={style.ParaDiv}>
          <Topheadings
            heading="Custom App Development Services & Solutions"
            paragraph="Tailored mobile app development that captivates your target audience, enhances customer acquisition, and transforms your business into a well-known brand"
            SPDFirstHeading
          />
        </div>
        <div className={style.Slider}>
          <ImageSlider images={images} settings={yAxis} />
        </div>
      </div>
      <Webuild />
      <RecentWork3 />
      <div className={style.main}>
        <div className={style.top}>
          <Topheadings
            heading={"When To Consider Our Android App Development Services"}
            paragraph={
              "We offer comprehensive Android app solutions tailored to the unique needs of businesses including startups to large-scale enterprises. We can engineer and deliver your product in 4 to 6 months"
            }
            SPD_Para
            craftingCss
            headingStyles={{
              fontSize: "3.7vw",
              width: "75%",
              // fontfamily: "TT Interphases Pro Trial ExtraBold",
            }}
          />
        </div>
        <div className={style.text}>
          {data?.map((item, index) => (
            <div className={style.box} key={index}>
              <Topheadings
                craftingCss
                heading={item.heading}
                paragraph={item.para}
                headingStyles={{
                  fontSize: "1.8vw",
                  width: "30vw",
                  fontFamily: "TT Interphases Pro Trial Medium",
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <HaveIdea />
      <div className={style.TechnologyDiv}>

      <Topheadings SPD_Tech_Para title={title} heading={heading} paragraph={paragraph}
      />
      </div>
      <TechnologyWeUse/>
      <WhyChoose/>
      <OurProcess/>
      <Industries/>
      <AskQuestion/>
      <OverPartner/>
    <GetInTouch />
    </div>
  );
};

export default ServicePagesDetails;
