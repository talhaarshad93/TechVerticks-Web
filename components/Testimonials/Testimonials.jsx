import React from "react";
import Topheadings from "../TopHeadings/TopHeadings";
import Image from "next/image";
import styles from "./Testimonials.module.css";
import pg from "../../assets/images/P&G.png";
import left from "../../assets/images/left.png";
import right from "../../assets/images/right.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonialsContent = [
  {
    responce:
      "Tech Verticks completed the project on time, leaving the client satisfied with the collaboration. The team had a strong grasp of the requirements, enabling them to deliver quality outputs that aligned with the client's vision. The partners communicated via email and messaging apps",
    designation: "Cybersecurity Team Lead, IT Services Company",
    address: "Los Angeles, California",
  },
  {
    responce:
      "Tech Verticks has delivered the project on time and within budget, meeting expectations. Leading a transparent workflow, the team is quick to make changes and implement feedback. Above all, their highly iterative design phase and keen understanding of user needs greatly impress the client ",
    designation: " Co-Founder, Marketing Agency",
    address: "  Toronto , Ontario",
  },
  {
    responce:
      "Tech Verticks delivered high-quality work within the agreed-upon deadline. Their team managed the project well and communicated effectively through online meetings.",
    designation: "Hoshang Mostofizadeh",
    address: "Novato, California",
  },
  {
    responce:
      "Trustworthy and accessible, Tech Versatile has produced incredible app designs. Their collaborative approach and consistent updates strengthen the ongoing partnership. Their transparency also stands out, enabling a seamless workflow. The client highly recommends them to potential partners",
    designation: "CEO, Lambda Traders",
    address: "",
  },
  {
    responce:
      "Thanks to Tech Versatile's efforts, they successfully built a functional app. The team utilized effective resources to ensure the project's success. They were skilled, communicative, and professional in the workflow",
    designation: "Deborah Rossetto",
    address: "Italy",
  },
];

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  autoplay: true,
  initialSlide: 0,
  pauseOnHover: true,
  centerPadding: "0px",
};

const Testimonials = () => {
  const sliderRef = React.useRef();

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <div id="testimonials">
      <hr className={styles.hr} />
      <div className={styles.main}>
        <div className={styles.left}>
          <Topheadings
            title={"TESTIMONIALS"}
            heading={"Forming lasting partnerships"}
            width="40vw"
            TESTIMONIALS
          />
        </div>
        <div className={styles.leftDiv}>
        <Slider ref={sliderRef} {...settings} className={styles.slider} >
          {testimonialsContent.map((slide, index) => (
            <div key={index} className={styles.right}>
              <div>
                <p className={styles.text}>{slide.responce}</p>
                <div className={styles.pgDiv}>
                  <div className={styles.subMain}>
                    {/* <Image className={styles.img} src={pg} alt="" /> */}
                    <div className={styles.nameDiv}>
                      <p className={styles.name}>{slide.designation}</p>
                      <p className={styles.pg}>{slide.address}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className={styles.btnDiv}>
          <button className={styles.btn} onClick={handlePrev}>
            <Image className={styles.btnImg} src={left} alt="" />
          </button>
          <button className={styles.btn} onClick={handleNext}>
            <Image className={styles.btnImg} src={right} alt="" />
          </button>
        </div>
        </div>
      </div>
      <hr className={styles.hr} />
    </div>
  );
};

export default Testimonials;
