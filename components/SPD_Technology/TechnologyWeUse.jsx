import Topheadings from "../TopHeadings/TopHeadings";
import Style from "./TechnologyWeUse.module.css";

import Image from "next/image";



// const title = "Technologies We Use";
// const heading = (<>Mobile App Developers:{<br/>} Our Expertise in Mobile Technologies</>)
// const paragraph =
//   `We're not just keeping up with the latest mobile technologies – we're pioneering them. Our commitment to innovation drives us to stay at the forefront of the mobile app development landscape. `;
// title={title} heading={heading} paragraph={paragraph}
export default function TechnologyWeUse({image,WebDevCSS }) {
  return (
    <div className={Style.topHeadingDiv}>
      <Topheadings SPD_TWU_heading SPD_TWU_Para />
      <div className={Style.mainImgDiv}>
        {image?.map((img) => (
          <>
            <div key={image?.id}
            className={WebDevCSS ? Style.TechCSS: Style.lable}
            >
              <Image
                className={WebDevCSS ? Style.TechImg: Style.lableImg}
                src={img?.image}
                alt={img?.alt}
              />
              <div className={Style.iconHeading}>{img?.alt}</div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
