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
import Ahrefs from "../assets/SVG/Ahrefs.svg";
import Alexa from "../assets/SVG/Alexa.svg";
import GoogleAds from "../assets/SVG/Google Ads.svg";
import Grammarly from "../assets/SVG/Grammarly.svg";
import HotJar from "../assets/SVG/Hot Jar.svg";
import HubSpot1 from "../assets/SVG/Hub Spot-1.svg";
import HubSpot from "../assets/SVG/Hub Spot.svg";
import MailChimp from "../assets/SVG/Mail Chimp.svg";
import Monday from "../assets/SVG/Monday.svg";
import OpenAI from "../assets/SVG/Open AI.svg";
import Piktochart from "../assets/SVG/Piktochart.svg";
import Semrush from "../assets/SVG/Semrush.svg";


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
    heading: "Search Engine Optimization:",
    para: " Increase your website's visibility on search engine results pages and drive organic traffic with our proven SEO strategies. Our team of SEO experts will optimize your website's content, meta tags, and backlink profile to help you rank higher and attract more qualified leads.",
  },
  {
    heading: "Pay-Per-Click Advertising:",
    para: "Reach your target audience instantly and drive immediate results with our PPC advertising services. Whether you're looking to increase website traffic, generate leads, or boost sales, our team will create and manage highly targeted PPC campaigns to maximize your return on investment.",
  },
  {
    heading: "Social Media Marketing:",
    para: " Engage with your audience, build brand awareness, and drive conversions with our social media marketing services. From creating compelling content to managing ad campaigns, we'll help you leverage the power of social media platforms like Facebook, Instagram, Twitter, and LinkedIn to grow your business.",
  },
  {
    heading: "Content Marketing:",
    para: "Establish your brand as an authority in your industry and attract and retain customers with valuable, relevant content. Our content marketing services include content creation, blog writing, email marketing, and more to help you connect with your audience and drive meaningful interactions.",
  },
  // {
  //   heading: "Hybrid Apps",
  //   para: "Provide a seamless and impeccable user experience across Android and iOS mobile platforms, ensure fast data display and hassle-free data streaming",
  // },
  // {
  //   heading: "React Native Apps",
  //   para: "Our React Native app development delivers cross-platform solutions with speed and efficiency",
  // },
  // {
  //   heading: "Ruby on Rails Development",
  //   para: "Harnessing the Power of Agile Development, Scalable Solutions, and Rapid Deployment, We Build Robust Web Applications Tailored to Your Unique Needs",
  // },
];

const ImageData = [
  {
    id: 1,
    image: Ahrefs,
    alt: "Ahrefs",
  },
  {
    id: 2,
    image: Alexa,
    alt: "Alexa",
  },
  {
    id: 3,
    image: GoogleAds,
    alt: "Google Ads",
  },
  {
    id: 4,
    image: Grammarly,
    alt: "Grammarly",
  },
  {
    id: 5,
    image: HotJar,
    alt: "Hot Jar",
  },
  {
    id: 6,
    image: HubSpot1,
    alt: "Hub Spot-1",
  },
  {
    id: 7,
    image: HubSpot,
    alt: "Hub Spot",
  },
  {
    id: 8,
    image: MailChimp,
    alt: "Mail Chimp",
  },
  {
    id: 9,
    image: Monday,
    alt: "Monday",
  },
  {
    id: 10,
    image: OpenAI,
    alt: "Open AI",
  },
  {
    id: 11,
    image: Piktochart,
    alt: "Piktochart",
  },
  {
    id: 12,
    image: Semrush,
    alt: "Semrush",
  },
];
const WC_headings="Why choose Tech Verticks for Digital Marketing?";
const WC_para="Our skilled digital marketing team ensures our services go beyond ordinary market standards, propelling your brand to a competitive edge";

const title = "Technologies We Use";
const heading = (
  <>Digital Marketers:{<br />} Our Expertise in Digital Marketing</>
);
const paragraph = `By leveraging these digital marketing technologies and tools, businesses can enhance their marketing efforts, improve targeting and personalization, and ultimately achieve their business goals in the digital space `;

const WeBuildHeading = "Elevate Your Brand with Digital Marketing ";
const WeBuildDescription = (
  <>
    No matter how visually captivating your site or exceptional your offerings,
    without a robust digital presence, you risk being overlooked. Understanding
    the varied needs of businesses, Tech Verticks implements a unique, fully
    integrated digital marketing strategy to drive your success, establishing a
    significant online presence and capturing a greater market share.
    <br />
    <br />
    Our successful marketing initiatives begin with defining clear objectives
    for social engagement, customer interaction, retention, and conversions.
    Scalable and Smart Mobile App Development Solutions
  </>
);
const WeBuildName =
  "Among Top Mobile App Development Companies in 2023 on Rightfirms";
const WeBuildName1 = (
  <>
    Top Android App Developers in
    <br /> Houston by Clutch{" "}
  </>
);
const WeBuildName2 = "Average Google Play Rating";
const WeBuildCount1 = "3rd";
const WeBuildCount2 = "4th";
const WeBuildCount3 = "4.4";

const WC_ListData =["Minimalistic Design","50% Faster Development","Enterprise-Ready App","Compliance-Oriented App","Seamless Back-End Integration","Smooth Deployment","Rigorous Quality Assurance","Post-Deployment Support"]

const DM_data = [
  {
    id: "1",
    title: "Performance Track & Record:",
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

const ServicePagesDetails = () => {
  return (
    <div>
      <div className={style.mainContainer}>
        <div className={style.ParaDiv}>
          <Topheadings
            heading="Digital Marketing
            Services &
            Solutions
            "
            paragraph="Unlock the full potential of your online presence with our comprehensive digital marketing services. From strategic planning to targeted campaigns, we specialize in maximizing your visibility, engagement, and conversions across various digital platforms"
            SPDFirstHeading
          />
        </div>
        <div className={style.Slider}>
          <ImageSlider images={images} settings={yAxis} />
        </div>
      </div>

      {
        <Webuild
          heading={WeBuildHeading}
          description={WeBuildDescription}
          name1={WeBuildName}
          Count1={WeBuildCount1}
          Count2={WeBuildCount2}
          Count3={WeBuildCount3}
          name2={WeBuildName1}
          name3={WeBuildName2}
          weBuildCSS
        />
      }
      <RecentWork3 />
      <div className={style.main}>
        <div className={style.top}>
          <Topheadings
            heading={
              "Comprehensive Digital Marketing Services Tailored to Your Needs"
            }
            paragraph={
              "At Tech Verticks, we understand that a strong online presence is crucial for business success. That's why we offer a range of expert digital marketing solutions designed to enhance your brand visibility, drive traffic to your website, and increase conversions."
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
        <Topheadings
          SPD_Tech_Para
          title={title}
          heading={heading}
          paragraph={paragraph}
        />
      </div>
      <TechnologyWeUse image={ImageData} />
      <WhyChoose WCheading={WC_headings} WCpara={WC_para} data={DM_data} SPD_listData={WC_ListData}/>
      <OurProcess OP_title = {["hg","sdss","cscsc","hg","sdss","cscsc"]}  hoverPara = {["hg","sdss","cscsc","hg","sdss","cscsc"]} />
      <Industries  />
      <AskQuestion />
      <OverPartner />
      <GetInTouch />
    </div>
  );
};

export default ServicePagesDetails;
