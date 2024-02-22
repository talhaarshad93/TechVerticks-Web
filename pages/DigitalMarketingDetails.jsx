// ServicePagesDetails.js
import ImageSlider from "@/components/ImageSlider/ImageSlider";
import Topheadings from "@/components/TopHeadings/TopHeadings";
import React from "react";
import sliderImg from "./../assets/images/sliderImage.png";
import style from "./ServicePagesDetails.module.css";
import GetInTouch from "@/components/GetinTouch/GetinTouch/GetinTouch";
import HaveIdea from "@/components/Have Idea/HaveIdea";
import Webuild from "@/components/We Build/Webuild";
import RecentWork3 from "@/components/Recent Work Component/RecentWork3";
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
    para: "Revolutionize your mobile experience with Flutter & let is craft stunning, high-performance Apps for both iOS and Android",
  },
  {
    heading: "Android App Development",
    para: "Android App features include back-end system, API development, app security, development consultations, user experience & interface design",
  },
  {
    heading: "IOS Development",
    para: "iOS Development services include consulting, product strategy, UI/UX development, testing & technical delivery",
  },
  {
    heading: "Progressive Web Apps",
    para: "Progressive Web App (PWA) development services empowering businesses to harness the power of cutting-edge web technologies for enhanced user experiences and increased engagement across platforms",
  },
  {
    heading: "Hybrid Apps",
    para: "Provide a seamless and impeccable user experience across Android and iOS mobile platforms, ensure fast data display and hassle-free data streaming",
  },
  {
    heading: "React Native Apps",
    para: "Our React Native app development delivers cross-platform solutions with speed and efficiency",
  },
  {
    heading: "Ruby on Rails Development",
    para: "Harnessing the Power of Agile Development, Scalable Solutions, and Rapid Deployment, We Build Robust Web Applications Tailored to Your Unique Needs",
  },
];


const title = "Technologies We Use";
const heading = (<>Mobile App Developers:{<br/>} Our Expertise in Mobile Technologies</>)
const paragraph = 
  `We're not just keeping up with the latest mobile technologies – we're pioneering them. Our commitment to innovation drives us to stay at the forefront of the mobile app development landscape. `;

  const WeBuildHeading="Mobile App Development Company";
  const WeBuildDescription = <>
  Scalable and Smart Mobile App Development Solutions
  <br />
  <br />
  Every customer is important to us, as we believe in taking everyone who approaches us to the next level. So, no matter what kind of app you desire; we can build anything for you from scratch. Our team of developers and designers use their years of experience to provide engaging navigation, user-friendly UI/UX, high definition UI/UX, and other features of the iOS and android app
</>
const WeBuildName ="Among Top Mobile App Development Companies in 2023 on Rightfirms";
const WeBuildName1 =<>Top Android App Developers in<br/> Houston by Clutch </>;
const WeBuildName2 ="Average Google Play Rating";
const WeBuildCount1 ="3rd";
const WeBuildCount2 ="4th";
const WeBuildCount3 ="4.4";
const ServicePagesDetails = () => {
  return (
    <div>
      <div className={style.mainContainer}>
        <div className={style.ParaDiv}>
          <Topheadings
            heading="Custom App Development Services & Solutions"
            paragraph="Accelerate your business growth with high performance and scalable mobile apps development services for your business"
            SPDFirstHeading
          />
        </div>
        <div className={style.Slider}>
          <ImageSlider images={images} settings={yAxis} />
        </div>
      </div>
     
      { <Webuild heading = {WeBuildHeading} description={WeBuildDescription} 
      name1={WeBuildName} Count1={WeBuildCount1} Count2={WeBuildCount2} Count3={WeBuildCount3} name2={WeBuildName1}name3={WeBuildName2} weBuildCSS  
      
      />}
      <RecentWork3 />
      <div className={style.main}>
        <div className={style.top}>
          <Topheadings
            heading={"Comprehensive App Development Services Tailored to Your Needs"}
            paragraph={
              "From Native to Cross-Platform, Gaming to Enterprise, We've Got You Covered!"
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
