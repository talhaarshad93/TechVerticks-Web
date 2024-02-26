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


const WC_ListData =["Strategic Campaign Planning","Targeted Audience Engagement","Content Creation and Optimization","Data-Driven Insights","Multi-Channel Marketing","Continuous Performance Monitoring","Conversion Optimization","Social Media Management","Track Records & Reports"]

const DM_data = [
  {
    id: "1",
    title: "Performance Track & Record:",
    content: (
      <>
    Our digital marketing service is backed by a robust performance tracking and recording system. We meticulously monitor key metrics, analyze campaign data, and record progress to ensure transparency and accountability. <br/> Through detailed performance reports, we provide clients with valuable insights into the effectiveness of their digital marketing strategies.<br/> Our goal is to continuously optimize campaigns, drive results, and deliver measurable ROI for our clients.
    </>
    ),
  },
  {
    id: "2",
    title: "Industry Knowledge and Expertise:",
    content: (
      <>
    With a deep-seated understanding of various industries, our digital marketing service boasts unparalleled industry expertise and knowledge. We tailor our strategies to suit the unique needs  of each sector, ensuring targeted and effective campaigns.<br/> Our team of digital marketers stays  alongside of industry trends, regulations, and consumer behaviors, enabling us to craft innovative and impactful marketing solutions.<br/> Trust in our industry specific expertise to propel your brand forward and stay ahead of the competition in today&apos;s dynamic marketplace.
    </>
    ),
  },
  {
    id: "3",
    title: "Comprehensive Services: ",
    content: (
      <>
    Our digital marketing service offers a comprehensive suite of solutions tailored to meet your diverse needs. From search engine optimization (SEO) to social media marketing, content creation, email campaigns, and beyond, we provide end-to-end support to elevate your online presence.<br/> With our holistic approach, you can consolidate your marketing efforts under one roof, streamlining processes and maximizing efficiency.<br/> Whether you&apos;re aiming to increase brand awareness, drive website traffic, or boost conversions, our comprehensive digital marketing services have you covered at every stage of your digital journey.
    </>
    ),
  },
  {
    id: "4",
    title: "Transparency and Communication:",
    content: (
      <>
     Transparency and communication are the cornerstones of our digital marketing service. We believe in fostering open and honest dialogue with our clients, providing regular updates, reports, and insights throughout the project lifecycle.<br/> Our dedicated team is readily available to address any questions or concerns you may have, ensuring a seamless and collaborative experience.<br/> With transparent processes and clear communication channels in place, you can trust that you are always kept informed and empowered to make informed decisions about your digital marketing strategy.
    </>
    ),
  },
  {
    id: "5",
    title: "ROI and Performance Metrics: ",
    content: (
      <>
     In our digital marketing service, we prioritize ROI and performance metrics to ensure measurable results. We meticulously track key indicators such as website traffic, conversion rates, lead generation, and ultimately, return on investment.<br/> By setting clear objectives and defining KPIs aligned with your business goals, we deliver transparent reports and insights to gauge the effectiveness of your campaigns. Our focus on data-driven decision-making empowers you to optimize strategies and maximize your digital marketing ROI.<br/> With our dedication to measurable success, trust us to drive tangible results for your business.
    </>
    ),
  },
  {
    id: "6",
    title: "Digital Marketing Tools:",
    content: (
      <>
    Our digital marketing service leverages cutting-edge technology and tools to optimize campaign performance and drive results.<br/> With our of digital marketing tools, we streamline processes, gain valuable insights, and stay ahead of the curve in a rapidly evolving digital landscape.<br/> Rest assured, we harness the power of technology to deliver impactful solutions tailored to your specific needs and objectives
    </>
    ),
  },
];

const data1 = [
  {
    id: "01",
    heading: "What is digital marketing, and why is it important for businesses?",
    isOpen: false,
    para: "Digital marketing encompasses various online strategies and channels used to promote products or services. It's crucial for businesses as it allows them to reach a wider audience, engage with customers directly, and drive conversions more effectively in today's digital age.",
  },
  {
    id: "02",
    heading: "What types of services are included in digital marketing?",
    isOpen: false,
    para: "Digital marketing services encompass a wide range of strategies, including search engine optimization (SEO), pay-per-click (PPC) advertising, social media marketing, content marketing, email marketing, and more.",
  },
  {
    id: "03",
    heading:
      "How can digital marketing help my business grow?",
    isOpen: false,
    para: "We can help your business grow by increasing brand visibility, driving website traffic, generating leads, and ultimately, boosting sales and revenue.",
  },

  {
    id: "04",
    heading: "How do I know which digital marketing strategies are right for my business?",
    isOpen: false,
    para: "The right digital marketing strategies for your business depend on factors such as your industry, target audience, budget, and objectives.At Tech Verticks, we help you assess your needs and recommend tailored strategies to achieve your goals.",
  },
  {
    id: "05",
    heading: "What is the typical process for working with Tech Verticks?",
    isOpen: false,
    para: "The process typically involves an initial consultation to discuss your goals and needs, followed by strategy development, implementation of digital marketing campaigns, ongoing monitoring and optimization, and regular reporting on performance metrics.",
  },
  
];
const data2 = [
  {
    id: "06",
    heading: "How long does it take to see results from digital marketing efforts?",
    isOpen: false,
    para: "The timeframe for seeing results can vary depending on factors such as the competitiveness of your industry, the effectiveness of your strategies, and your budget. While some results may be seen quickly, such as increased website traffic, it often takes several months to see significant improvements in rankings, leads, and conversions.",
  },
  {
    id: "07",
    heading: "How can I measure success?",
    isOpen: false,
    para: "Digital marketing agencies measure success through various key performance indicators (KPIs) such as website traffic, search engine rankings, conversion rates, return on investment (ROI), and engagement metrics on social media platforms.",
  },
  {
    id: "08",
    heading:
      "What is the cost of digital marketing services?",
    isOpen: false,
    para: "The cost of digital marketing services varies depending on factors such as the scope of work, the complexity of the strategies, and the level of service provided by the agency. Feel free to contact us and explore more.",
  },
  {
    id: "09",
    heading: "How often should I update my digital marketing strategies?",
    isOpen: false,
    para: "Digital marketing strategies should be regularly reviewed and updated to adapt to changes in the market, technology, and consumer behavior. It's recommended to conduct regular audits of your strategies and adjust them as needed to stay competitive and achieve your goals.",
  },
  {
    id: "10",
    heading: "Why should I hire Tech Verticks for Digital Marketing service?",
    isOpen: false,
    para: "Tech Verticks offers comprehensive digital marketing services tailored to your specific business needs, ensuring targeted strategies that drive results. With a team of experienced professionals and a track record of success, Tech Verticks is dedicated to maximizing your online visibility, engagement, and conversions.",
  },
]

const ServicePagesDetails = () => {
  return (
    <div>
      <div className={style.mainContainer}>
        <div className={style.ParaDiv}>
          <Topheadings
            heading="Innovative Strategies for Lasting Branding Experiences"
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
          name1={"Among Top Mobile App Development Companies in 2023 on Rightfirms"}
          Count1={"3rd"}
          Count2={"4th"}
          Count3={"4.4"}
          name2={<>
            Top Android App Developers in
            <br /> Houston by Clutch{" "}
          </>}
          name3={"Average Google Play Rating"}
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
      <OurProcess OP_heading={"Our Digital MarketingCompany Process"} OP_title = {["Client Consultation","Strategic Planning and Market Analysis","User Experience Design","Website Development and Implementation","Performance Tracking and Optimization","Performance & Maintenance"]}  hoverPara = {["Engaging in comprehensive discussions with clients to understand their digital marketing objectives, target audience demographics, desired functionalities, and budget considerations","Conducting strategic brainstorming sessions to outline the digital marketing strategy. This includes defining unique selling points, identifying market opportunities, analyzing competitors, and mapping out the overall project roadmap.","Leveraging user research, wireframing, and prototyping techniques to craft compelling digital experiences. This involves refining design concepts and establishing an intuitive flow and navigation structure for optimal user engagement.","Employing agile methodologies for iterative development cycles to ensure flexibility and responsiveness in meeting evolving project needs. This includes building and implementing digital assets, landing pages, and conversion-focused elements."
      ,"Conducting thorough evaluations of digital marketing campaign performance, including website functionality, traffic, engagement metrics, and conversions. This ensures the maintenance of a seamless user experience and adherence to high-quality standards."," Providing ongoing support and maintenance services to sustain the digital marketing efforts. This includes monitoring website performance, resolving technical issues, and implementing updates to optimize performance and reliability"]} />
      <Industries  />
      <AskQuestion AQ_heading={<>Curious about Our Digital Marketing Service?<br />Let&apos;s Address Your Queries!</>} AQ_Para={"Whether you're seeking insights into our digital marketing services, including SEO, PPC or any other marketing service, our team is dedicated to providing thorough answers. We prioritize transparency and open communication, equipping you with the information needed to make informed decisions about your digital project. Reach out today, and let us help bring your digital vision to life."  } data1 = {data1} data2 = {data2}/>
      <OverPartner />
      <GetInTouch />
    </div>
  );
};

export default ServicePagesDetails;
