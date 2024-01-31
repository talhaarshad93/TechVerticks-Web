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
import Insight from "@/components/InsightComponent/InsightComponent";
import ServicePage from "./ServicePage";
import About from "./About";
import CaseStudies from "./CaseStudies";
import CaseStudiesDetails from "./CaseStudiesDetails";
import Solutions from "./Solutions";
import BlogDetails from "./BlogDetails";
import BlogPage from "./BlogPage";

const inter = Inter({ subsets: ["latin"] });

const SpanHeading ="GENERATE YOUR VISION"
const bigHeading ="Crafting your fantasies with a twist of creativity"
const description ="We are an award-winning agency that launches companies of all sizes into the next era of growth."
export default function Home() {
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
      <Webuild />
      <MainPage/>
      <RecentWork />
      <OurServices />
      <Industries/>
    <GetInTouch/> */}

    {/* <OverPartner/>

      <WhyChoose/> */}
      <GetInTouch/>
      {/* <ValueComp/>
      <OverPartner/>
      <GetInTouch/>
      <OfficeComponent/>
      <AskQuestion/>
      <Intro/>
      <TechnologyWeUse/>
      <ImageLayout/>
      <RelatedArticle/>
      <CS_Button/>
      <OurProcess/>
      <Insight/> */}
      <Heading SpanHeading={SpanHeading} bigHeading = {bigHeading} description={description} />  
   

     
    </div>
  );
}
