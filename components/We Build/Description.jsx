import React from "react";
import styles from "./Count.module.css";
import MB1 from "../../assets/images/serviceImg.png";
import MB2 from "../../assets/images/kate.png";

import classNames from "classnames";
import ImgTextComponent from "../Img and Text Component/ImgTextComponent";

const Description = () => {
  // const data = [
  //   { heading: "Mobile Application Development", image: MB1 },
  //   { heading: "Website Development", image: MB2 },
  // ];
  // const image = MB1
  return (
    <div className="right ml- pl-5  offset- col-8  mt-1 ">
      <div className={classNames(styles.aMotion, "")}>
        A Motion Partner Building Brand-Led Identities, Systems, And
        Applications.
      </div>
      <p className={classNames(styles.paragraph, "")}>
        We move with make a Creative Strategy for help your business goal, we
        help to improve your income by a services we have. make your content
        look interesting and make people look for your business.
        <br />
        <br /> The media landscape is changing in front of our eyes, and brands
        need to adapt how they communicate in order to thrive. Motion is the
        connective tissue between a brand and its audience. It is a vital
        component of a brand’s platform, evolving its ecosystem and
        communications in profound new ways.
        <br /> We work with brand leaders to build motion identities, systems,
        and applications that deepen their audience relationships, strengthen
        their brand affinity, and drive their long-term growth.
      </p>
      <div className={classNames(styles.learnBtn, "")}>
        <button>Learn More About Our Approach</button>
      </div>
 {/* {data.map(item => (<ImgTextComponent src={item.image} />))     } */}
    </div>
  );
};

export default Description;
