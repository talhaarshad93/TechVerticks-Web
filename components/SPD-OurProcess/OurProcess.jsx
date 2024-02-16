// OurProcess.jsx
import Image from "next/image";
import Topheadings from "../TopHeadings/TopHeadings";
import Style from "./OurProcess.module.css";
import SPD_OP_Img1 from "../../assets/images/SPD_OP_Img1.png";
import SPD_OP_Img2 from "../../assets/images/SPD_OP_Img2.png";
import SPD_OP_Img3 from "../../assets/images/SPD_OP_Img3.png";
import SPD_OP_Img4 from "../../assets/images/SPD_OP_Img4.png";
import SPD_OP_Img5 from "../../assets/images/SPD_OP_Img5.png";
import SPD_OP_Img6 from "../../assets/images/SPD_OP_Img6.png";
import { useState } from "react";

const title = "Our Process";
const heading = "Our Mobile App Development Company Process";
const paragraph = `Discover the way we develop impactful, user-focused mobile applications tailored to different industry sectors, guiding them towards their business goals.`;

const Container = [
  {
    Serial: "01",
    Image: SPD_OP_Img1,
    alt: "SPD_OP_Img1",
    heading: "Project Discussion",
    hoverPara:"A comprehensive discussions with our clients to understand their vision, goals, and requirements for the app. We explore factors such as target audience, desired features, technical specifications, and budget constraints",
  },
  {
    Serial: "02",
    Image: SPD_OP_Img2,
    alt: "SPD_OP_Img2",
    heading: "Rapid Strategy Workshop",
    hoverPara:"Conducting  intensive brainstorming sessions & strategic discussions to define key aspects of the app's development strategy. It includes outlining the app's unique value proposition, identifying market opportunities, analyzing competitor landscape, & defining the overall project roadmap",
  },
  {
    Serial: "03",
    Image: SPD_OP_Img3,
    alt: "SPD_OP_Img3",
    heading: "User interfaces & experiences",
    hoverPara:"User research, wireframing, and prototyping, we iterate on design concepts to create a seamless flow and navigation structure",
  },
  {
    Serial: "04",
    Image: SPD_OP_Img4,
    alt: "SPD_OP_Img4",
    heading: "Agile Development",
    hoverPara:"Ensureing flexibility and responsiveness with iterative cycles for quick adaptation to changing needs",
  },
  {
    Serial: "05",
    Image: SPD_OP_Img5,
    alt: "SPD_OP_Img5",
    heading: "Testing & quality assurance",
    hoverPara:"Assessing the app's functionality, performance, and security to ensure a seamless user experience",
  },
  {
    Serial: "06",
    Image: SPD_OP_Img6,
    alt: "SPD_OP_Img6",
    heading: "Support & maintenance",
    hoverPara:"Providing ongoing support and maintenance services to ensure the app's optimal performance and reliability",
  },
];

export default function OurProcess() {
  // const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <div className={Style.mainDiv}>
      <div className={Style.leftDiv}>
        <Topheadings title={title} heading={heading} paragraph={paragraph} SPD_OP
  />
      </div>
      <div className={Style.rightDiv}>
        {Container?.map((item,) => (
          <div key={item?.Serial} className={Style.container1} >
            <div className={Style.containerContent}>
              <div className={Style.serail}>{item?.Serial}</div>
              <div className={Style.img1}>
                <Image className={Style.SPD_OP_Img1} src={item?.Image} alt={item?.alt} />
              </div>
              <div className={Style.Img_heading}>{item?.heading}</div>
            </div>
             
             <div className={Style.OnHover} >
                   {item?.hoverPara}
            </div>
          </div>
        ))}
        </div>
       
            
    </div>
  );
}
