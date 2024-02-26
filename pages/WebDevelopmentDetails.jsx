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
import Angular from "../assets/images/Angular.png"
import Apache from "../assets/images/Apache.png"
import Css from "../assets/images/Css.png"
import Git from "../assets/images/Git.png"
import Html from "../assets/images/Html.png"
import JavaScript from "../assets/images/javaScript.png"
import Java from "../assets/images/Java.png"
import MongoDB from "../assets/images/MongoDB.png"
import MySQL from "../assets/images/MySQL.png"
import Nginx from "../assets/images/Nginx.png"
import NodeJS from "../assets/images/NodeJS.png"
import PHP from "../assets/images/PHP.png"
import PostgreSQL from "../assets/images/PostgreSQL.png"
import Python from "../assets/images/Python.png"
import ReactJS from "../assets/images/ReactJS.png"
import Ruby from "../assets/images/Ruby.png"
import SQL_lite from "../assets/images/SQLlite.png"
import VueJS from "../assets/images/VueJS.png"

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
const WD_data = [
  {
    id: "1",
    title: "Website Design & Development",
    content: (
      <>
      Are you aiming to rejuvenate your brand with a complete website overhaul, or simply seeking some final touches to refine its appearance?
      <br/>
      <br/>
       Whichever path you choose, our skilled team of website developers at Tech Verticks embarks on a meticulous design and development journey, considering every brand element to craft a cohesive masterpiece.
    </>
    ),
  },
  {
    id: "2",
    title: "Migration Services",
    content: (
      <>
      Seeking accelerated business expansion? Look no further than our eCommerce migration solutions, designed to transform your online marketplace into a technically sophisticated yet easily navigable platform.
      <br/>
      <br/>
       Our team of web developers specializes in seamlessly transferring your data to any virtual environment, ensuring a hassle-free experience and providing expert support whenever necessary
    </>
    ),
  },
  {
    id: "3",
    title: "Website Design & Consultancy",
    content: (
      <>
    Our team of web developers invest time in understanding your business, industry, and clientele, ensuring accurate identification of your business needs.
    <br/>
      <br/>
     Subsequently, we craft a marketing and branding strategy tailored to help you reach your objectives and company milestones effectively
    </>
    ),
  },
  {
    id: "4",
    title: "Affordable Web Design Service",
    content: (
      <>
     Our website development services stand out for their exceptional value, providing top-tier expertise and cutting-edge technology at prices unmatched by our competitors. 
     <br/>
      <br/>
     Collaborating with us ensures access to experienced professionals, skilled web developers, and innovative solutions—all bundled into one cost-effective package
    </>
    ),
  },
  {
    id: "5",
    title: "Modern Approach",
    content: (
      <>
    Leveraging outcome-driven, adaptable web solutions, we integrate automation, platforms, and seamless tasking solutions to handle large delivery volumes with precision.
    <br/>
      <br/>
     Our unparalleled expertise in web developement ensures we excel in our field.
    </>
    ),
  },
  {
    id: "6",
    title: "Customizations & Integrations",
    content: (
      <>
      If your project demands extensive customization or integration with third-party services or APIs, we meticulously consider these aspects when determining the project&apos;s pricing. 
      <br/>
      <br/>
      With our team&apos;s expertise and experience, we proficiently handle complex customizations and integrations, ensuring smooth functionality and seamless integration with external systems.
    </>
    ),
  },
];
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
const imageData = [
  {
    id: 1,
    image: Angular,
    alt: "Angular",
  },
  {
    id: 2,
    image: Apache,
    alt: "Apache",
  },
  {
    id: 3,
    image: Css,
    alt: "CSS",
  },
  {
    id: 4,
    image: Git,
    alt: "Git",
  },
  {
    id: 5,
    image: Html,
    alt: "HTML",
  },
  {
    id: 6,
    image: JavaScript,
    alt: "Java Script",
  },
  {
    id: 7,
    image: Java,
    alt: "Java",
  },
  {
    id: 8,
    image: MongoDB,
    alt: "Mongo DB",
  },
  {
    id: 9,
    image: MySQL,
    alt: "MySQL",
  },
  {
    id: 10,
    image: Nginx,
    alt: "Nginx",
  },
  {
    id: 11,
    image: NodeJS,
    alt: "Node JS",
  },
  {
    id: 12,
    image: PHP,
    alt: "PHP",
  },
  {
    id: 13,
    image: PostgreSQL,
    alt: "Postgre SQL",
  },
  {
    id: 14,
    image: Python,
    alt: "Python",
  },
  {
    id: 15,
    image: ReactJS,
    alt: "React JS",
  },
  {
    id: 16,
    image: Ruby,
    alt: "Ruby",
  },
  {
    id: 17,
    image: SQL_lite,
    alt: "SQL Lite",
  },
  {
    id: 18,
    image: VueJS,
    alt: "Vue JS",
  },

];
const WD_ListData =["Faster Web Development","Expertise and Experience","Customized Solutions","Scalability and Flexibility","Time and Cost Efficiency","Seamless Back-End Integration","Smooth Deployment","Rigorous Quality Assurance","Ongoing Support and Maintenance"]
const OP_paragraph = `Discover the way we develop impactful, user-focused mobile applications tailored to different industry sectors, guiding them towards their business goals.`;

const hoverPara= ["Engaging in in-depth discussions with clients to grasp their vision, objectives, and specifications for the website & delving into aspects such as target demographics, desired functionalities, technical requirements, and budgetary consideration","Conducting focused brainstorming sessionsto outline key elements of the website's development strategy. It  involves defining the website's unique selling points, identifying market opportunities, analyzing competitors, and mapping out the project's overall roadmap","Leveraging user research, wireframing, and prototyping techniques to refine design concepts and establish an intuitive flow and navigation structure for the website design","Utilizing an agile methodology featuring iterative development cycles to guarantee flexibility and responsiveness in accommodating evolving project needs","Thoroughly evaluating the website's functionality, performance, and security to uphold a seamless user experience and maintain high standards of quality","Offering ongoing support and maintenance services to uphold the website's performance and reliability, ensuring its continued optimal operation.",]
const WD_title=["Project Discussion","Strategic Planning","User Interface Design","Website Development","Quality Assurance","Support and Maintenance",];

const WD_heading = "Our Web Design & Web Development Process";
const title = "Technologies We Use";
const heading = (<>Key Tools and Technologies in Web Development</>)
const paragraph = 
  `We're not just keeping up with the latest web technologies – we're pioneering them. Our commitment to innovation drives us to stay at the forefront of the website development landscape. `;
  const AQ_heading=  <>Curious about Our Website Design and Development Service?<br />Let&apos;s Address Your Queries!</>;
        
  const AQ_Para=<>Whether you have inquiries about our website design and development process, pricing, or timeline, we&apos;re here to provide comprehensive responses. Our team is committed to transparency and open communication, ensuring you&apos;re equipped with all the necessary details to make informed decisions about your project. <br/><br/>Don&apos;t hesitate to get in touch – we&apos;re prepared to help bring your website vision to fruition </>;
  const data1 = [
    {
      id: "01",
      heading: "How long does it take to build a website?",
      isOpen: false,
      para: "If you've selected a professional website development company, the process typically spans from 1 to 4 months, beginning from inception to completion, particularly for basic informational websites with minimal functionality.",
    },
    {
      id: "02",
      heading: "On which platform do you build your websites?",
      isOpen: false,
      para: "We excel in building websites on platforms such as WordPress, Magento, Laravel, Joomla, and CodeIgniter. Depending on your needs, we recommend the most suitable platform",
    },
    {
      id: "03",
      heading:
        "Can you assist me in crafting content for my website?",
      isOpen: false,
      para: "Absolutely! Our team of copywriters can create professional content for your website by comprehending your requirements and business objectives.",
    },
  
    {
      id: "04",
      heading: "Will I have a dedicated full-time web developer?",
      isOpen: false,
      para: "Yes, we can allocate a dedicated full-time website developer. Having a full-time dedicated web developer overseeing the construction, maintenance, and updates of your website can lead to more productive outcomes",
    },
    {
      id: "05",
      heading: "Can you help me improve my website's visibility on Google?",
      isOpen: false,
      para: "Yes! We can do it for you. Scroll through our Digital Marketing Page.",
    },
    
  ];
  const data2 = [
    {
      id: "06",
      heading: "How many pages will my website include?",
      isOpen: false,
      para: "We can tailor the number of pages to your specifications. However, we recommend developing a website with a few pages to facilitate future search engine optimization",
    },
    {
      id: "07",
      heading: "I wish to include an email signup form on my website. How can I achieve this?",
      isOpen: false,
      para: "Embedding a signup form on your website is an excellent method to generate more leads. You can integrate a signup form using popular email marketing platforms like MailChimp, SendinBlue, or ActiveCampaign. Ensure the widget is visually appealing and easily noticeable to visitors",
    },
    {
      id: "08",
      heading:
        "If I simply require a makeover for my existing website?",
      isOpen: false,
      para: "We cater to all client needs, whether it involves crafting a new website design or revitalizing an existing one. Our dedication remains steadfast in meeting the unique needs of each client",
    },
    {
      id: "09",
      heading: "I already own a domain name. Can I use it for my website?",
      isOpen: false,
      para: "That's fantastic! If you already have one that aligns with your business, we can certainly proceed with it.",
    },
    {
      id: "10",
      heading: "Will my website be compatible with both Android iOS devices?",
      isOpen: false,
      para: "Yes, we ensure that our websites are responsive and optimized for viewing on both Android & iOS devices, ensuring a seamless user experience across all devices and products.",
    },
  ]

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
     
      <TechnologyWeUse image={imageData}WebDevCSS/>
      <WhyChoose WCheading={"Why Choose Tech Verticks For Website Design & Development Services"} WCpara={"Our professional website developers app developers and designers create awe-inspiring apps for our clients. Our custom mobile app development services encompass"} data={WD_data} SPD_listData={WD_ListData} />
      <OurProcess OP_heading={WD_heading} hoverPara={hoverPara} OP_Paragraph={OP_paragraph} OP_title={WD_title}/>
      <Industries/>
      <AskQuestion AQ_heading={AQ_heading} AQ_Para={AQ_Para} data1={data1} data2={data2}/>

      <OverPartner/>
    <GetInTouch />
    </div>
  );
};

export default ServicePagesDetails;
