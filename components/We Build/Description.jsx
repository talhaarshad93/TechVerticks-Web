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
    <div className="right ml-   offset- col-8  mt-1 ">
      <div className={classNames(styles.aMotion, "")}>
        Maximize Your Success! Respond to the needs of the users through an
        aesthetic User Design , User Experience & high-end create a product with
        a striking effect
      </div>
      <p className={classNames(styles.paragraph, "")}>
        Welcome to Tech Verticks — a top software development company
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
        other features of the iOS and android app.
      </p>
      <div className={classNames(styles.learnBtn, "")}>
        <button className={styles.btn}>Learn More About Our Approach</button>
      </div>
      {/* {data.map(item => (<ImgTextComponent src={item.image} />))     } */}
    </div>
  );
};

export default Description;
