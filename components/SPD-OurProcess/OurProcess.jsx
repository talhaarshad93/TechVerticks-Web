import Image from "next/image";
import Topheadings from "../TopHeadings/TopHeadings";
import Style from "./OurProcess.module.css";
import SPD_OP_Img1 from "../../assets/images/SPD_OP_Img1.png";
import SPD_OP_Img2 from "../../assets/images/SPD_OP_Img2.png";
import SPD_OP_Img3 from "../../assets/images/SPD_OP_Img3.png";
import SPD_OP_Img4 from "../../assets/images/SPD_OP_Img4.png";
import SPD_OP_Img5 from "../../assets/images/SPD_OP_Img5.png";
import SPD_OP_Img6 from "../../assets/images/SPD_OP_Img6.png";
const title = "Our Process";
const heading = 
  "Our Mobile App Development Company Process";
const paragraph = 
  `Discover the way we develop impactful, user-focused mobile applications tailored to different industry sectors, guiding them towards their business goals.`;

 const Container =[
    {
        Serial:"01",
        Image:SPD_OP_Img1,
        alt:"SPD_OP_Img1", 
        heading:"Project Discussion",
    },
    {
        Serial:"02",
        Image:SPD_OP_Img2,
        alt:"SPD_OP_Img2",  
        heading:"Rapid Strategy Workshop",
    },
    {
        Serial:"03",
        Image:SPD_OP_Img3,
        alt:"SPD_OP_Img3",
        heading:"User interfaces & experiences",
    },
    {
        Serial:"04",
        Image:SPD_OP_Img4,
        alt:"SPD_OP_Img4",
        heading:"Agile Development",  
    },
    {
        Serial:"05",
        Image:SPD_OP_Img5,
        alt:"SPD_OP_Img5",
        heading:"Testing & quality assurance",  
    },
    {
        Serial:"06",
        Image:SPD_OP_Img6,
        alt:"SPD_OP_Img6",
        heading:"Support & maintenance",  
    },
 ] 
export default function OurProcess(){
    return(
        <div className={Style.mainDiv}>
        <div className={Style.leftDiv}><Topheadings title={title} heading={heading} paragraph={paragraph} SPD_OP SPD_OP_para/></div>
        <div className={Style.rightDiv}>
        {Container?.map((item)=>(
              <div key={item?.Serial} className={Style.container1}>
              <div className={Style.serail}>{item?.Serial}</div>
              <div className={Style.img1}>
              <Image className={Style.SPD_OP_Img1} src={item?.Image} alt={item?.alt}/>
              </div>
              <div className={Style.Img_heading}>{item?.heading}</div>
          </div>
        ))}
        </div>
        </div>
    )
}