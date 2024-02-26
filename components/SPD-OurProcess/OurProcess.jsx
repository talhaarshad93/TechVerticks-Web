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

const paragraph = `Discover the way we develop impactful, user-focused mobile applications tailored to different industry sectors, guiding them towards their business goals.`;



export default function OurProcess({OP_heading,OP_Paragraph, hoverPara,OP_title}) {
  const Container = [
    {
      Serial: "01",
      Image: SPD_OP_Img1,
      alt: "SPD_OP_Img1",
      heading: OP_title[0],
      hoverPara:hoverPara[0],
    },
    {
      Serial: "02",
      Image: SPD_OP_Img2,
      alt: "SPD_OP_Img2",
      heading: OP_title[1],
      hoverPara:hoverPara[1],
    },
    {
      Serial: "03",
      Image: SPD_OP_Img3,
      alt: "SPD_OP_Img3",
      heading: OP_title[2],
      hoverPara:hoverPara[2],
    },
    {
      Serial: "04",
      Image: SPD_OP_Img4,
      alt: "SPD_OP_Img4",
      heading: OP_title[3],
      hoverPara:hoverPara[3],
    },
    {
      Serial: "05",
      Image: SPD_OP_Img5,
      alt: "SPD_OP_Img5",
      heading: OP_title[4],
      hoverPara:hoverPara[4],
    },
    {
      Serial: "06",
      Image: SPD_OP_Img6,
      alt: "SPD_OP_Img6",
      heading: OP_title[5],
      hoverPara: hoverPara[5],
    },
  ];
  // const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <div className={Style.mainDiv}>
      <div className={Style.leftDiv}>
        <Topheadings title={title} heading={OP_heading} paragraph={OP_Paragraph} SPD_OP
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
