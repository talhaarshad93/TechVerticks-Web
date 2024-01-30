import Contain from "../contain/Contain";
import style1 from "./ValueComp.module.css";
import Image from "next/image";
import img from "../../assets/images/Mask.png";
import Topheadings from "../TopHeadings/TopHeadings";
const data = [
  {
    serial: "01.",
    heading: "Strong Relationship",
    paragraph: `We strive to build long-lasting relationships with our clients and try
    to reach better versions of talented, exquisite, and problem solvers
    dedicated to the pursuit of excellence`,
  },
  {
    serial: "02.",
    heading: "Technical Excellence",
    paragraph: `Trust us to deliver a transformative user experience that surpasses the status quo; committed to improve our services and maintain consistency and reliability
    `,
  },
  {
    serial: "03.",
    heading: "Fun Team",
    paragraph: `Our team thrive the best to give our clients a versatile solution while also maintaining an enjoyable workplace to create an enduring growing atmosphere to nourish skillset
    `,
  },
];
const title = "Our Values";
const heading = 
  "All about exploring Big ideas Building great brands, Delivering impact.";
const paragraph = 
  `We strive to be the best and diversified IT service providers of web
        design, mobile apps, branding and digital marketing services. We let
        businesses reach their marketing goals by delivering results-oriented
        corporate brand services and improve revenue.`;

export default function ValueComp() {
  return (
    <div className={style1.mainDiv}>
      <Topheadings title={title} heading={heading} paragraph={paragraph} VC_Css/>
      <div className={style1.mainContainer}>
        <div className={style1.headingCont}>
          {data?.map((item) => (
            <Contain
              heading={item?.heading}
              serial={item?.serial}
              paragraph={item?.paragraph}
              key={item?.serial}
            />
          ))}
        </div>
        <Image className={style1.img} src={img} alt="mask group image" />
      </div>
    </div>
  );
}
