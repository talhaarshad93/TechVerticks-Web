// ServicePagesDetails.js
import ImageSlider from "@/components/ImageSlider/ImageSlider";
import Topheadings from "@/components/TopHeadings/TopHeadings";
import React from "react";
import sliderImg from "./../assets/images/SliderImg1.png";
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
import Link from "next/link";


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


const WC_ListData =["Design Solutions Tailored to Your Brand","Utilizing Cutting-Edge Design Tools","Innovative Design Strategies","Impactful Branding","Optimizing Design Workflow Efficiency","Enhanced Brand Identity","Visual Communication Strategies","Continued Support and Maintenance"]

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
    heading: "What is branding, and why is it important for my business?",
    isOpen: false,
    para: "Branding encompasses the visual and emotional elements that define your company's identity and differentiate it from competitors.",
  },
  {
    id: "02",
    heading: "How can your professional branding services benefit my business?",
    isOpen: false,
    para: "We are professional branding service providers and we  help you create a cohesive and memorable brand identity that resonates with your target audience, communicates your values, and sets you apart in the market",
  },
  {
    id: "03",
    heading:
      "What does the branding process involve?",
    isOpen: false,
    para: "Our branding process typically includes research, strategy development, design creation, and implementation across various touchpoints to ensure consistency and effectiveness",
  },

  {
    id: "04",
    heading: "What types of design services do you offer?",
    isOpen: false,
    para: "We offer a range of design services, including logo design, brand identity development, website design, packaging design, marketing collateral design, and more",
  },
  {
    id: "05",
    heading: "How do you ensure that my branding and design align with my business goals?",
    isOpen: false,
    para: " We begin by understanding your business objectives, target audience, and competitive landscape. Then, we develop tailored branding and design solutions that support your goals and resonate with your audience.",
  },
  
];
const data2 = [
  {
    id: "06",
    heading: "What happens if I need additional design services beyond the scope of the package?",
    isOpen: false,
    para: "We can discuss options for adding extra services to your package or creating a custom solution to meet your needs.",
  },
  {
    id: "07",
    heading: "Can you provide examples of your previous branding and design work?",
    isOpen: false,
    para: <>Yes, we have a portfolio showcasing our past projects to give you a sense of our design style, creativity, and quality of work.<Link href={"/Portfolio"}>  Portfolio</Link> </>
  },
  {
    id: "08",
    heading:
      "Can I customize the design package to suit my specific needs?",
    isOpen: false,
    para: "Yes, we offer flexibility to tailor our design packages to your unique requirements. We can discuss your preferences and adjust the package accordingly",
  },
  {
    id: "09",
    heading: "How do you determine which design package is right for my business?",
    isOpen: false,
    para: "We assess factors such as your business goals, target audience, budget, and scope of work to recommend the most suitable design package for your needs",
  },
  {
    id: "10",
    heading: "How can I get started with your branding and design services?",
    isOpen: false,
    para: "Simply reach out to us through our contact page or schedule a consultation to discuss your project needs, goals, and timeline. We'll work with you to create a customized solution that meets your requirements and exceeds your expectations",
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
      <OurProcess OP_heading={"Our Design Process"} OP_Paragraph={"In our design service process, we meticulously analyze client objectives and target audiences to craft tailored design strategies. Through strategic planning and execution, we optimize designs for maximum impact and engagement"} OP_title = {["Project Discussion","Strategic Planning","User Interface Design","Website Development","Quality Assurance","Support and Maintenance"]}  hoverPara = {["Engaging in in-depth discussions with clients to grasp their vision, objectives, and specifications for the website & delving into aspects such as target demographics, desired functionalities, technical requirements, and budgetary consideration","Brainstorming and generating ideas based on the research findings to develop concepts and design solutions that address the project goals","Transforming the selected concepts into tangible designs through sketching, wireframing, prototyping, and refining visual elements and layouts","Presenting the designs to stakeholders and obtaining feedback to refine and improve the designs based on user insights and client preferences"
      ,"Converting the finalized designs into functional products or deliverables, which may involve coding, printing, or posting, depending on the project requirements","Testing the implemented designs for usability, effectiveness, and user satisfaction, and incorporating feedback to make iterative improvements for continuous refinement"]} />
      <Industries  />
      <AskQuestion AQ_heading={<>Curious about Our Digital Marketing Service?<br />Let&apos;s Address Your Queries!</>} AQ_Para={"Whether you're seeking insights into our design services, including logo, social media design or brand identity service,  our team is dedicated to providing thorough answers. We prioritize transparency and open communication, equipping you with the information needed to make informed decisions about your design project."  } data1 = {data1} data2 = {data2}/>
      <OverPartner />
      <GetInTouch />
    </div>
  );
};

export default ServicePagesDetails;
