import Topheadings from "@/components/TopHeadings/TopHeadings";
import React from "react";
import style from "./Crafting.module.css";

const data = [
  {
    heading: "CMS",
    para: "Create mobile applications using the Flutter framework developed by Google",
  },
  {
    heading: "HRM",
    para: "Wide array of software solutions for smartphones, tablets, and other Android-powered devices.",
  },
  {
    heading: "CRM",
    para: "Create apps for distribution on the Apple App Store while serving a diverse range of purposes and catering to millions of iOS device users        ",
  },
  {
    heading: "ERP",
    para: "Hybrid approach that combines the best of web and mobile app technologies, offering a user-friendly, fast, and reliable experience without the need for traditional app installations.        ",
  },
  {
    heading: "LMS",
    para: "Create multiple platforms while providing some access to native device features        ",
  },
  {
    heading: "POS",
    para: "A powerful framework to building mobile apps that balances the efficiency and  performance of native apps        ",
  },
];

const Crafting = () => {
  return (
    <div className={style.main}>
      <div className={style.top}>
        <Topheadings
          heading={"Crafting ROI-Centric Solutions Right!"}
          paragraph={
            "We offer comprehensive Android app solutions tailored to the unique needs of businesses including startups to large-scale enterprises. We can engineer and deliver your product in 4 to 6 months"
          }
          craftingCss
          headingStyles={{
            fontSize: "4.5vw",
            width: '70%' ,
          }}
        />
      </div>
      <div className={style.text}>
        {data?.map((item) => (
          <div className={style.talha} key={index}>
            <Topheadings
              craftingCss
              heading={item.heading}
              paragraph={item.para}
              headingStyles={{
                fontSize: "3vw",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

// {data?.map((img) => (
//   <div key={data?.id} className={overPartnerClasses.lable}>
//     <Image
//       className={overPartnerClasses.lableImg}
//       src={img?.image}
//       alt={img?.alt}
//     />
//   </div>
// ))}

export default Crafting;
