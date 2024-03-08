import Image from "next/image";
import { Inter } from "next/font/google";
import Heading from "@/components/Heading Component/Heading";
import img from "./../assets/images/TVimg.png";
import Webuild from "@/components/We Build/Webuild";
import RecentWork from "@/components/Recent Work Component/RecentWork";
import OurServices from "@/components/Our Services/OurServices";
import Industries from "@/components/Industries/Industries";
import OverPartner from "@/components/OverPartnerComp/OverPartner";
import GetInTouch from "@/components/GetinTouch/GetinTouch/GetinTouch";
import WhyChoose from "@/components/SPD-WhyChoose/WhyChoose";
import ValueComp from "@/components/valueComponent/ValueComp";
import OfficeComponent from "@/components/OfficeComponent/OfficeComponent";
import AskQuestion from "@/components/SPD_AskQuestion/AskQuestion";
import Intro from "@/components/BD_Intro/Intro";
import TechnologyWeUse from "@/components/SPD_Technology/TechnologyWeUse";
import ImageLayout from "@/components/AU_imagesLayout/ImageLayout";
import RelatedArticle from "@/components/BD_RelatedArticle/RelatedArticle";
import CS_Button from "@/components/CS_Buttons/CS_buttons";
import OurProcess from "@/components/SPD-OurProcess/OurProcess";
import Blog from "@/components/Blog/Blog";
import ServicePage from "./ServicePage";
import About from "./About";
import CaseStudies from "./CaseStudies";
import CaseStudiesDetails from "../components/ServicePageDetails/CaseStudiesDetails";
import Solutions from "./Solutions";
import BlogDetails from "./BlogDetails";
import BlogPage from "./BlogPage";
import Tv from "@/components/TV img&video com/Tv";
import Insight from "@/components/InsightComponent/InsightComponent";
import { useRef } from "react";
import style from "../pages/allPages.module.css";




const inter = Inter({ subsets: ["latin"] });

const scrollToRef = (ref) => {
  if (ref && ref.current) { // Check if ref and ref.current exist
    window.scrollTo(0, ref.current.offsetTop);
  }
};

const SpanHeading = "GENERATE YOUR VISION";
// const bigHeading = "";
const description =
  "With extensive experience in digital product development, we know how to create user-friendly and memorable interfaces for leading international brands.";
export default function Home() {
  const recentWorkRef = useRef(null);

  const handleScrollToRecentWork = () => {
    if (recentWorkRef.current) {
      window.scrollTo({
        top: recentWorkRef.current.offsetTop,
        behavior: 'smooth'
      });
      console.log("talhaaa");
    }
  };


  const WeBuildHeading ="Seamless Solutions, Seamless Experience: Dive into Our Mobile App Solutions";
  const WeBuildDescription = (
    <>
      Welcome to Tech Verticks — a top software development company established
      by motivated doers and tech entrepreneurs with a great mission in mind.
      <br />
      <br />
      We are experts in providing the best mobile app development services and
      creating successful business stories. Every customer is important to us,
      as we believe in taking everyone who approaches us to the next level. So,
      no matter what kind of app you desire; we can build anything for you from
      scratch. Our team of developers and designers use their years of
      experience to provide engaging navigation, user-friendly UI/UX, high
      definition UI/UX, and other features of the iOS and android app.
    </>
  );
  const WeBuildName = "TECH PROFESSIONALS";
  const WeBuildName1 = "YEARS OF EXPERIENCE";
  const WeBuildName2 = "PROJECTS COMPLETED";
  const WeBuildCount1 = "90";
  const WeBuildCount2 = "15";
  const WeBuildCount3 = "750";
  return (
    
    <div>
      
 
      {/* <Heading />
      <Image className="imgTv" src={img} />
      <iframe
        className="video1"
        src="https://www.youtube.com/embed/2wI_SjklTYQ?si=mZFZDvCAotQo1GGU"
        title="YouTube video player"
        frameborder="3s"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <MainPage/>
    <GetInTouch/> */}

      {/* <OverPartner/>

      <WhyChoose/> */}
      {/* 
      <OverPartner/> */}
      {/* <ValueComp/>
      <GetInTouch/>
      <AskQuestion/>
      <Intro/>
      <TechnologyWeUse/>
      <ImageLayout/>
      <RelatedArticle/>
      <CS_Button/>
      <OurProcess/>
      <Insight/>
      <Heading SpanHeading={SpanHeading} bigHeading = {bigHeading} description={description} />  
      <GetInTouch/>
      
     */}
      <Heading
        SpanHeading={SpanHeading}
        bigHeading="Empowering Connections!"
        heading2="Where technology unites people!"
        // bigHeading={
        //   <div>
        //    <div style={{fontFamily: "TT Interphases Pro Trial Bold", fontSize: '5.4vw', color: 'rgba(179, 50, 212, 1)', display:'inline' }}>Empowering Connections!</div> {bigHeading}
            
        //   </div>
        // }
        description={description}
        // handleScrollToRecentWork={handleScrollToRecentWork}
        scroll= "#recentWork"
        ServicePage_Css
      />
      <Tv img={img} video="/tvReel.mp4" />
      <Webuild
      showPlus
      heading={
        <div>
         <div style={{fontFamily: "TT Interphases Pro Trial Bold", fontSize: '2.8vw', color: 'rgba(179, 50, 212, 1)', display:'inline' }}>Maximize Your Success!</div> {WeBuildHeading}
          
        </div>
      } 
        description={WeBuildDescription}
        name1={WeBuildName}
        Count1={WeBuildCount1}
        name2={WeBuildName1}
        Count2={WeBuildCount2}
        Count3={`+${WeBuildCount3}`}
        name3={WeBuildName2}
      />

  
    <RecentWork />
      <OurServices />
      <Industries />
      <Insight />
      <OverPartner />
      <GetInTouch />
      <OfficeComponent />
    </div>
  );
}
