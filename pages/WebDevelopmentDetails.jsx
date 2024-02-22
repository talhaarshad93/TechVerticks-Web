// ServicePagesDetails.js
import ImageSlider from "@/components/ImageSlider/ImageSlider";
import Topheadings from "@/components/TopHeadings/TopHeadings";
import React from "react";
import sliderImg from "./../assets/images/sliderImage.png";
import style from "./ServicePagesDetails.module.css";
import styles from "./WebDevelopmentDetail.module.css";
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
    heading: "E-commerce Web Development",
    para: "E-commerce web development services at Tech Verticks entail crafting online platforms optimized for buying and selling goods or services. Create web pages with features like product catalogs, shopping carts, and secure payment gateways for seamless transactions and an engaging shopping experience",
  },
  {
    heading: "Laravel Development",
    para: "Laravel development involves creating web applications using the Laravel PHP framework. Laravel simplifies common tasks like routing, authentication, and database management, offering robust features and a developer-friendly environment. It enables the rapid development of secure, scalable, and maintainable web applications",
  },
  {
    heading: "CMS Web Design",
    para: "CMS website development involves creating websites using content management systems like WordPress, Joomla, or Drupal. CMS website development at Tech Verticks offer flexibility, scalability, and a user-friendly interface, making it suitable for various types of websites.",
  },
  {
    heading: "Backend Development",
    para: "Backend development involves creating the server-side logic, databases, and applications that power the website.Some common backend technologiesat Tech Verticks include PHP, Python, Ruby on Rails, Node.js, and Java.",
  },
 
  {
    heading: "Frontend Development",
    para: "Create user interface and user experience of a website using languages such as HTML, CSS, and JavaScript.",
  },
  {
    heading: "Progressive Web App (PWA) Development",
    para: "PWAs combine the features of web and mobile applications to deliver a fast, reliable, and engaging user experience. ",
  },
  {
    heading: "Full-Stack Development",
    para: "Full-stack development involves expertise in both frontend and backend technologies, enabling our web developers to handle all aspects of web development, from designing user interfaces to managing databases and server-side logic",
  },

];


const title = "Technologies We Use";
const heading = (<>Key Tools and Technologies in Web Development</>)
const paragraph = 
  `We're not just keeping up with the latest web technologies – we're pioneering them. Our commitment to innovation drives us to stay at the forefront of the website development landscape. `;

  const WeBuildHeading="Website Design & Development Company";
  const WeBuildDescription = <>
  Web design services are key components in any web app development project. At Techverticks, we provide web app design & development services on any scale, from web consultations, research, design, development to the final deployment. Our team of web designers uses UI/UX strategies to create graphical user interfaces and adopt a user-friendly approach while creating a web design
  <br />
  <br />
  If you are a small or a global business entity, we provide custom web solutions with the latest web technologies to transform your digital presence into an effective sales tool for your business.
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
            heading="Custom Web Design & Development"
            paragraph="Delivering comprehensive web development services with broad-ranging expertise and technologies"
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
