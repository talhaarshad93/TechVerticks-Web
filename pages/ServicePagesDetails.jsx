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
import Swift from "../assets/images/Swift.png";
import Ionic from "../assets/images/Ionic.png";
import IOS from "../assets/images/IOS.png";
import Andriod from "../assets/images/Android.png";
import React_Native from "../assets/images/React_Native.png";
import Katlin from "../assets/images/Katlin.png";
// import Flutter from "../../assets/images/Flutter.png";
import Flutter from "../assets/images/Flutter.png";
import ObjectiveC from "../assets/images/ObjectiveC.png";

const yAxis = {
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
  vertical: true,
  verticalSwiping: true,
};
const WC_ListData =["Minimalistic Design","50% Faster Development","Enterprise-Ready App","Compliance-Oriented App","Seamless Back-End Integration","Smooth Deployment","Rigorous Quality Assurance","Post-Deployment Support"]

const SP_data = [
  {
    id: "1",
    title: "Mobile app design",
    content: (
      <>
      We are a team of experienced iOS and Android app developers in who
      <br />
      <br />
      leverage cutting-edge technologies to create mobile applications. Whether it&apos;s Android,
      iOS, hybrid, or native app development, we handle all forms of mobile
      application development.
      Our specialization extends to cross-platform apps, native apps, flutter
      apps, and progressive web apps. We take ownership of your project from the initial
      mobile app planning phase through to post-launch support, ensuring timely
      delivery of all commitments.
    </>
    ),
  },
  {
    id: "2",
    title: "Enterprise app development",
    content: (
      <>
      We are a team of experienced iOS and Android app developers in who
      leverage cutting-edge technologies to create mobile applications. Whether it&apos;s Android,
      iOS, hybrid, or native app development, we handle all forms of mobile
      application development.
      Our specialization extends to cross-platform apps, native apps, flutter
      apps, and progressive web apps. We take ownership of your project from the initial
      mobile app planning phase through to post-launch support, ensuring timely
      <br />
      <br />
      delivery of all commitments.
    </>
    ),
  },
  {
    id: "3",
    title: "M-commerce app development",
    content: (
      <>
      We are a team of experienced iOS and Android app developers in who
      leverage cutting-edge technologies to create mobile applications. Whether it&apos;s Android,
      <br />
      <br />
      iOS, hybrid, or native app development, we handle all forms of mobile
      application development.

      Our specialization extends to cross-platform apps, native apps, flutter
      apps, and progressive web apps. We take ownership of your project from the initial
      mobile app planning phase through to post-launch support, ensuring timely
      delivery of all commitments.
    </>
    ),
  },
  {
    id: "4",
    title: "Mobile app maintenance",
    content: (
      <>
      We are a team of experienced iOS and Android app developers in who
      leverage cutting-edge technologies to create mobile applications. Whether it&apos;s Android,
      iOS, hybrid, or native app development, we handle all forms of mobile
      application development.
      Our specialization extends to cross-platform apps, native apps, flutter
      apps, and progressive web apps. We take ownership of your project from the initial
      <br />
      <br />
      mobile app planning phase through to post-launch support, ensuring timely
      delivery of all commitments.
    </>
    ),
  },
  {
    id: "5",
    title: "Mobile application consultation",
    content: (
      <>
      We are a team of experienced iOS and Android app developers in who
      leverage cutting-edge technologies to create mobile applications.
      <br />
    <br /> Whether it&apos;s Android,
      iOS, hybrid, or native app development, we handle all forms of mobile
      application development.
      <br />
      <br />
      Our specialization extends to cross-platform apps, native apps, flutter
      apps, and progressive web apps. We take ownership of your project from the initial
      mobile app planning phase through to post-launch support, ensuring timely
      delivery of all commitments.
    </>
    ),
  },
  {
    id: "6",
    title: "iPad and tablet software development",
    content: (
      <>
      We are a team of experienced iOS and Android app developers in who
      <br />
      <br />
      leverage cutting-edge technologies to create mobile applications. Whether it&apos;s Android,
      iOS, hybrid, or native app development, we handle all forms of mobile
      application development.
      <br />
    <br />
      Our specialization extends to cross-platform apps, native apps, flutter
      apps, and progressive web apps. We take ownership of your project from the initial
      mobile app planning phase through to post-launch support, ensuring timely
      delivery of all commitments.
    </>
    ),
  },
];

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
   const hoverPara= ["A comprehensive discussions with our clients to understand their vision, goals, and requirements for the app. We explore factors such as target audience, desired features, technical specifications, and budget constraints","Conducting  intensive brainstorming sessions & strategic discussions to define key aspects of the app's development strategy. It includes outlining the app's unique value proposition, identifying market opportunities, analyzing competitor landscape, & defining the overall project roadmap","User research, wireframing, and prototyping, we iterate on design concepts to create a seamless flow and navigation structure","Ensureing flexibility and responsiveness with iterative cycles for quick adaptation to changing needs","Assessing the app's functionality, performance, and security to ensure a seamless user experience","User research, wireframing, and prototyping, we iterate on design concepts to create a seamless flow and navigation structure",]
    const SPD_title=["Project Discussion","Rapid Strategy Workshop","User interfaces & experiences","Agile Development","Testing & quality assurance","Support & maintenance",];

       
const AQ_heading=  <>Curious about Our Mobile App Development Service?<br />Let&apos;s Answer Your Questions!</>;
const AQ_Para=<>Whether you have questions about our mobile app development process, pricing, or timeline, we&apos;re here to provide answers. Our team is committed to transparency and clear communication, ensuring you have all the information you need to make informed decisions about your project. Don&apos;t hesitate to reach out – we&apos;re ready to help bring your app idea to life.</>;
const data1 = [
  {
    id: "01",
    heading: "How much does it cost to develop a mobile app?",
    isOpen: false,
    para: "Determining the cost of developing a mobile app depends on various factors, including the complexity of the app, desired features, platform compatibility, and development resources required. Moreover, factors such as design complexity, integration with backend systems, and ongoing maintenance also contribute to the overall cost. It's essential to discuss your specific requirements with a reputable app development company to receive a personalized quote tailored to your needs and budget.",
  },
  {
    id: "02",
    heading: "How long does it take to build a mobile application?",
    isOpen: false,
    para: "The timeline for building a mobile application varies depending on factors such as the complexity of the app, desired features, platform compatibility, and development resources available. Simple apps with basic features can typically be developed in a few weeks to a couple of months, while more complex apps with advanced functionalities may take several months",
  },
  {
    id: "03",
    heading:
      "What are the benefits of mobile app development services?",
    isOpen: false,
    para: "Mobile app development services offer a multitude of benefits for businesses seeking to establish a strong digital presence such as enabling enhanced user engagement, providing a personalized channel for interaction, fostering stronger connections and brand loyalty.",
  },

  {
    id: "04",
    heading: "Are mobile apps profitable?",
    isOpen: false,
    para: "Mobile apps continue to be profitable for many businesses, with the potential to generate significant revenue through various monetization strategies.",
  },
  {
    id: "05",
    heading: "How do you ensure that the mobile app meets our specific business needs?",
    isOpen: false,
    para: "We start by conducting a thorough analysis of your business requirements, target audience, and goals. We then work closely with you throughout the development process, incorporating your feedback and making adjustments as needed to ensure that the final app meets your specific needs and expectations.",
  },
  
];
const data2 = [
  {
    id: "06",
    heading: "How do you handle data security and privacy in mobile app development?",
    isOpen: false,
    para: "Data security and privacy are top priorities for us in mobile app development. We implement industry-standard security measures such as encryption, secure authentication, and data protection protocols to safeguard user data and ensure compliance with relevant regulations.",
  },
  {
    id: "07",
    heading: "Can you provide ongoing support and maintenance for the mobile app after it's launched?",
    isOpen: false,
    para: "Yes, we offer ongoing support and maintenance services to ensure that your mobile app remains up-to-date, secure, and functioning smoothly. This includes addressing any issues that may arise, implementing updates and enhancements, and providing technical assistance as needed.",
  },
  {
    id: "08",
    heading:
      "How do you approach user experience (UX) design in mobile app development?",
    isOpen: false,
    para: "User experience (UX) design is a critical aspect of our mobile app development process. We conduct user research, create wireframes and prototypes, and prioritize intuitive navigation and usability to ensure that the app delivers a seamless and engaging experience for users.",
  },
  {
    id: "09",
    heading: "Can you explain the testing process for mobile apps?",
    isOpen: false,
    para: "We conduct thorough testing throughout the development lifecycle to identify and address any issues or bugs. This includes functional testing, usability testing, performance testing, and compatibility testing across different devices and platforms to ensure that the app meets quality standards and delivers a positive user experience.",
  },
  {
    id: "10",
    heading: "How do you stay updated with the latest trends and technologies in mobile app development?",
    isOpen: false,
    para: "Our team of developers and designers actively monitors industry trends and emerging technologies in mobile app development. We regularly attend conferences, participate in workshops, and engage in continuous learning to stay aheadt of the latest developments and incorporate them into our projects.",
  },
]
const OP_heading = "Our Mobile App Development Company Process";
const OP_paragraph = `Discover the way we develop impactful, user-focused mobile applications tailored to different industry sectors, guiding them towards their business goals.`;

const WC_headings="Why choose AppCrops for mobile app developement?";
const WC_para="Our certified app developers and designers create awe-inspiring apps for our clients. Our custom mobile app development services";

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
const ServicePagesDetails = (WC_heading) => {
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
      <TechnologyWeUse image={ImageData}/>
      <WhyChoose WCheading={WC_headings} WCpara={WC_para} data={SP_data} SPD_listData={WC_ListData}/>
      <OurProcess OP_heading={OP_heading} hoverPara={hoverPara} OP_title={SPD_title} OP_Paragraph={OP_paragraph}/>
      <Industries/>
      <AskQuestion AQ_heading={AQ_heading} AQ_Para={AQ_Para} data1={data1} data2={data2}/>
      <OverPartner/>
    <GetInTouch />
    </div>
  );
};

export default ServicePagesDetails;
