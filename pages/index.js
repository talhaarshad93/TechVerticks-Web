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
import MainPage from "@/components/Service Page/MainPage";
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
import CaseStudiesDetails from "./CaseStudiesDetails";
import Solutions from "./Solutions";
import BlogDetails from "./BlogDetails";
import BlogPage from "./BlogPage";
import Tv from "@/components/TV img&video com/Tv";
import Insight from '@/components/InsightComponent/InsightComponent'


const inter = Inter({ subsets: ["latin"] });

const SpanHeading ="GENERATE YOUR VISION"
const bigHeading ="Empowering connections: Where technology unites people!"
const description ="With extensive experience in digital product development, we know how to create user-friendly and memorable interfaces for leading international brands."
export default function Home() {

  const WeBuildHeading = ' Maximize Your Success! Respond to the needs of the users through an aesthetic User Design , User Experience & high-end create a product with a striking effect'
  const WeBuildDescription = <>Welcome to Tech Verticks — a top software development company
  established by motivated doers and tech entrepreneurs with a great
  mission in mind.
  <br />
  <br />
   We are experts in providing the best mobile app
  development services and creating successful business stories. Every
  customer is important to us, as we believe in taking everyone who
  approaches us to the next level. So, no matter what kind of app you
  desire; we can build anything for you from scratch. Our team of
  developers and designers use their years of experience to provide
  engaging navigation, user-friendly UI/UX, high definition UI/UX, and
  other features of the iOS and android app.</>
  const WeBuildName ="TECH PROFESSIONALS";
  const WeBuildName1 ="YEARS OF EXPERIENCE";
  const WeBuildName2 ="PROJECTS COMPLETED";
  const WeBuildCount1 ="+90";
  const WeBuildCount2 ="+15";
  const WeBuildCount3 ="+750";
  return (
    <div>
    
      <Heading SpanHeading={SpanHeading} bigHeading = {bigHeading} description={description} />  
      <Tv img= {img}/>
      <Webuild heading = {WeBuildHeading} description={WeBuildDescription} name1={WeBuildName} Count1={WeBuildCount1}name2={WeBuildName1}
      Count2={WeBuildCount2} Count3={WeBuildCount3} name3={WeBuildName2} counting
      />
      <RecentWork />
      <OurServices />
      <Industries/>
      <Insight/> 
      <OverPartner/>
      <GetInTouch/>
      <OfficeComponent/>

      


   

     
    </div>
  );
}
