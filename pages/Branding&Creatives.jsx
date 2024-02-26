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
import AfterEffect from "../assets/SVG/After Effect.svg";
import Canva from "../assets/SVG/Canva.svg";
import Filmora from "../assets/SVG/Filmora.svg";
import Grammarly from "../assets/SVG/Grammarly.svg";
import Illustrator from "../assets/SVG/Illustrator.svg";
import HubSpot1 from "../assets/SVG/Hub Spot-1.svg";
import HubSpot from "../assets/SVG/Hub Spot.svg";
import MailChimp from "../assets/SVG/Mail Chimp.svg";
import Marvel from "../assets/SVG/Marvel.svg";
import Premiere from "../assets/SVG/Premiere.svg";
import Piktochart from "../assets/SVG/Piktochart.svg";
import Zeplin from "../assets/SVG/Zeplin.svg";


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
    heading: "Custom Logo Design:",
    para: " Elevate your brand's identity with our custom logo design services. Our team of skilled logo designers crafts unique and memorable logos tailored to reflect your brand's personality and values.",
  },
  {
    heading: "Brand Identity Development:",
    para: "Crafting cohesive brand identities, including color schemes, typography, and visual elements.",
  },
  {
    heading: "UI/UX Design:",
    para: " Discover seamless digital experiences with our UI/UX design expertise. We specialize in creating intuitive interfaces that prioritize user satisfaction and engagement. Elevate your online presence with our thoughtful and user-centric design solutions.",
  },
  {
    heading: "Brand Strategy Consulting:",
    para: "Developing strategic plans to enhance brand positioning and market differentiation. Providing detailed guidelines to ensure consistent brand representation across all platforms and mediums.",
  },
  {
    heading: "Social Media Designs:",
    para: "From eye-catching visuals to stunning marketing materials, we bring your ideas to life with creativity and precision for multiple social media platforms.",
  },
  {
    heading: "Website Design:",
    para: "Transform your online presence with our responsive and visually appealing website designs tailored to your brand's unique needs.",
  },
  {
    heading: "Brand Identity Design",
    para: "Craft a distinct and memorable brand image through our comprehensive brand identity design services, including logo design, color palette selection, and visual elements creation.",
  },
];

const ImageData = [
  {
    id: 1,
    image: AfterEffect,
    alt: "After Effect",
  },
  {
    id: 2,
    image: Canva,
    alt: "Canva",
  },
  {
    id: 3,
    image: Filmora,
    alt: "Filmora",
  },
  {
    id: 4,
    image: Grammarly,
    alt: "Grammarly",
  },
  {
    id: 5,
    image: Illustrator,
    alt: "Illustrator",
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
    image: Marvel,
    alt: "Marvel",
  },
  {
    id: 10,
    image: Premiere,
    alt: "Premiere",
  },
  {
    id: 11,
    image: Piktochart,
    alt: "Piktochart",
  },
  {
    id: 12,
    image: Zeplin,
    alt: "Zeplin",
  },
];
const WC_headings="Why choose Tech Verticks for Branding?";
const WC_para="Our skilled digital marketing team ensures our services go beyond ordinary market standards, propelling your brand to a competitive edge.";

const title = "Technologies We Use";
const heading = (
  <>Brand Designs:{<br />} Our Expertise in Design & Creatives</>
);
const paragraph = `By utilizing these design technologies and tools, businesses can elevate their branding and design strategies, refine audience targeting, and deliver personalized experiences, ultimately achieving their business goals in the digital space`;

const WeBuildHeading = "Ascend Your Brand with Expert Branding and Design Solutions ";
const WeBuildDescription = (
  <>
  No matter how visually striking your design or exceptional your brand offerings, without a robust digital presence, you risk being overlooked. At Tech Verticks, we understand the unique needs of businesses and implement a tailored, fully-integrated branding and design strategy to drive your success, establishing a significant online presence and capturing a greater market share.
    <br />
    <br />
    From captivating logos to cohesive brand strategies, we craft visual narratives that resonate with your audience and leave a lasting impression.
  </>
);


const WC_ListData =["Design Solutions Tailored to Your Brand","Utilizing Cutting-Edge Design Tools","Innovative Design Strategies","Impactful Branding","Optimizing Design Workflow Efficiency","Enhanced Brand Identity","Visual Communication Strategies","Innovation and Fresh Perspective","Continued Support and Maintenance","Ensure Design Success"]

const DM_data = [
  {
    id: "1",
    title: "Expertise and Experience:",
    content: 
      
  "  Drawing from years of industry experience, Tech Verticks is a  professional branding and design agencies that possess the knowledge and skills needed to deliver exceptional results that resonate with your target audience."
    
    ,
  },
  {
    id: "2",
    title: "Creative Vision:",
    content: (
    
  "  We offer a fresh and innovative approach to branding and design, infusing creativity into every aspect of your visual identity to ensure your brand stands out in a digitally crowded market."
   
    ),
  },
  {
    id: "3",
    title: "Consistency and Cohesion: ",
    content: (
    
   " By entrusting your branding and design needs to us, ywe ensure that every element of your brand—from logos to marketing materials—is aligned, creating a cohesive and memorable brand experience for your customers."
   
    ),
  },
  {
    id: "4",
    title: "Strategic Approach:",
    content: (
     
    " At Tech Verticks, we take a strategic approach to branding and design, developing tailored solutions that effectively communicate your brand's unique value proposition and resonate with your target audience, ultimately driving business growth."
   
    ),
  },
  {
    id: "5",
    title: "Time and Resource Efficiency: ",
    content: (
  
    " We let you save valuable time and resources, as brand experts we handle all aspects of your branding and design requirements, freeing you up to focus on other areas of your business."
   
    ),
  },
  {
    id: "6",
    title: "Scalability and Adaptability:",
    content: (
      
  "We are a professional brand agency and we  have the resources and capabilities to scale our services according to your business needs, ensuring your brand remains adaptable and competitive in today's ever-evolving market landscape."
  
    ),
  },
  {
    id: "7",
    title: "Design Tools:",
    content: (
     
"In our design service, we harness state-of-the-art technology and tools to enhance design effectiveness and achieve brand outcomes. Utilizing an array of design tools, we streamline workflows, blend creativity, and remain at the forefront of innovation in the design real."
   
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
            heading="Strategies for Lasting Branding Experiences"
            paragraph="Elevate your brand with our innovative solutions and creative expertise. We specialize in crafting captivating branding strategies that resonate with your audience. Let us bring your vision to life and leave a lasting impression in the digital landscape."
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
              "Comprehensive Branding & Design Services Tailored to Your Needs"
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
