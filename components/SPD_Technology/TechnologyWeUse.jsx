import Topheadings from "../TopHeadings/TopHeadings";
import Style from "./TechnologyWeUse.module.css";
import Swift from "../../assets/images/Swift.png";
import Ionic from "../../assets/images/Ionic.png";
import IOS from "../../assets/images/IOS.png";
import Andriod from "../../assets/images/Andriod.png";
import React_Native from "../../assets/images/React_Native.png";
import Katlin from "../../assets/images/Katlin.png";
import Flutter from "../../assets/images/Flutter.png";
import ObjectiveC from "../../assets/images/ObjectiveC.png";
import Image from "next/image";

const data = [
    {
      id: 1,
      image: Swift,
      alt: "Swift",
    },
    {
      id: 2,
      image: Ionic,
      alt: "Ionic",
    },
    {
      id: 3,
      image: IOS,
      alt: "iOS",
    },
    {
      id: 4,
      image: Andriod,
      alt: "Andriod",
    },
    {
      id: 5,
      image: React_Native,
      alt: "React Native",
    },
    {
      id: 6,
      image: Katlin,
      alt: "Kotlin",
    },
    {
      id: 7,
      image: Flutter,
      alt: "Flutter",
    },
    {
      id: 8,
      image: ObjectiveC,
      alt: "Objective-c",
    },
  ];

// const title = "Technologies We Use";
// const heading = (<>Mobile App Developers:{<br/>} Our Expertise in Mobile Technologies</>)
// const paragraph = 
//   `We're not just keeping up with the latest mobile technologies – we're pioneering them. Our commitment to innovation drives us to stay at the forefront of the mobile app development landscape. `;
// title={title} heading={heading} paragraph={paragraph}

export default function TechnologyWeUse({heading}){
    return(
   <div className={Style.topHeadingDiv}><Topheadings heading = {heading}  SPD_TWU_heading SPD_TWU_Para/>
     
     <div className={Style.mainImgDiv}>
     {data?.map((img) => (
        <>
         <div key={data?.id} className={Style.lable}>
         <Image
           className={Style.lableImg}
           src={img?.image}
           alt={img?.alt}
           /><div className={Style.iconHeading}>{img?.alt}</div>
       </div>
           </>
     ))}
     </div>
   </div>
    );

}