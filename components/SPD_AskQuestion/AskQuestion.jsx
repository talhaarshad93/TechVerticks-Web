"use client";
import Image from "next/image";
import style from ".//AskQuestion.module.css";
import SPD_PlusIcon from "../../assets/images/SPD_PlusIcon.png";
import SPD_MinusIcon from "../../assets/images/SPD_MinusIcon.png";
import { useState } from "react";

const data1 = [
  {
    id: "01",
    heading: "How much does it cost to develop a mobile app?",
    isOpen: false,
    para: "Determining the cost of developing a mobile app depends on various factors, including the complexity of the app, desired features, platform compatibility, and development resources required. Moreover, factors such as design complexity, integration with backend systems, and ongoing maintenance also contribute to the overall cost. It's essential to discuss your specific requirements with a reputable app development company to receive a personalized quote tailored to your needs and budget.",
  },
  {
    id: "02",
    heading: "How long does it take to build a mobile application?",
    isOpen: false,
    para: "The timeline for building a mobile application varies depending on factors such as the complexity of the app, desired features, platform compatibility, and development resources available. Simple apps with basic features can typically be developed in a few weeks to a couple of months, while more complex apps with advanced functionalities may take several months",
  },
  {
    id: "03",
    heading:
      "Should I hire a mobile app development company vs. a freelancer: Which one is better?",
    isOpen: false,
    para: "The cost of mobile app development services varies depending on factors such as app requirements, app complexity, architecture, design, visuals, and testing frameworks. Marketing also plays a significant factor in determining an app’s overall costs",
  },

  {
    id: "04",
    heading: "Are mobile apps profitable?",
    isOpen: false,
    para: "Mobile apps continue to be profitable for many businesses, with the potential to generate significant revenue through various monetization strategies",
  },
  {
    id: "05",
    heading: "????",
    isOpen: false,
    para: "????",
  },
  
];
const data2 = [
  {
    id: "06",
    heading: "How much does it cost to develop a mobile app?",
    isOpen: false,
    para: "The cost of mobile app development services varies depending on factors such as app requirements, app complexity, architecture, design, visuals, and testing frameworks. Marketing also plays a significant factor in determining an app’s overall costs",
  },
  {
    id: "07",
    heading: "How long does it take to build a mobile application?",
    isOpen: false,
    para: "The cost of mobile app development services varies depending on factors such as app requirements, app complexity, architecture, design, visuals, and testing frameworks. Marketing also plays a significant factor in determining an app’s overall costs",
  },
  {
    id: "08",
    heading:
      "Should I hire a mobile app development company vs. a freelancer: Which one is better?",
    isOpen: false,
    para: "The cost of mobile app development services varies depending on factors such as app requirements, app complexity, architecture, design, visuals, and testing frameworks. Marketing also plays a significant factor in determining an app’s overall costs",
  },
  {
    id: "09",
    heading: "What are the benefits of mobile app development services?",
    isOpen: false,
    para: "The cost of mobile app development services varies depending on factors such as app requirements, app complexity, architecture, design, visuals, and testing frameworks. Marketing also plays a significant factor in determining an app’s overall costs",
  },
  {
    id: "10",
    heading: "Are mobile apps profitable in 2023?",
    isOpen: false,
    para: "The cost of mobile app development services varies depending on factors such as app requirements, app complexity, architecture, design, visuals, and testing frameworks. Marketing also plays a significant factor in determining an app’s overall costs",
  },
]

export default function AskQuestion() {
  const [listData1, setListData1] = useState(data1);
  const [listData2, setListData2] = useState(data2);

  const taskPress1 = (id, isOpen) => {
    const updateArray1 = listData1?.map((item) => {
      if (item?.id == id) {
        return { ...item, isOpen: isOpen };
      } else {
        return { ...item, isOpen: false };
      }
    });
    setListData1(updateArray1);
  };
  const taskPress2 = (id, isOpen) => {
    const updateArray2 = listData2?.map((item) => {
      if (item?.id == id) {
        return { ...item, isOpen: isOpen };
      } else {
        return { ...item, isOpen: false };
      }
    });
    setListData2(updateArray2);
  };

  return (
    <div style={{padding:"5vw"}}>
      <div className={style.mainDiv}>
        <div className={style.Heading}>
       <> Curious about Our Mobile App Development Service?<br/> Let's Answer Your Questions!</>
        </div>
        <div className={style.ParaDiv}>
        Whether you have questions about our mobile app development process, pricing, or timeline, we're here to provide answers. Our team is committed to transparency and clear communication, ensuring you have all the information you need to make informed decisions about your project. Don't hesitate to reach out – we're ready to help bring your app idea to life.
        </div>
      </div>

<div className={style.main} >
        

      <div className={style.subMainDiv}>
        {listData1?.map((item) => (
          <>
            <div className={style.container} key={item?.id}>
              <div className={style.subDiv}>{item?.heading}</div>
              <button
                className={style.btn}
                onClick={() => taskPress1(item?.id, !item?.isOpen)}
              >
                {item?.isOpen === true ? (
                  <Image
                    className={style.btn_img}
                    src={SPD_MinusIcon}
                    alt="SPD_PlusIcon"
                  />
                ) : (
                  <Image
                    className={style.btn_img}
                    src={SPD_PlusIcon}
                    alt="SPD_PlusIcon"
                  />
                )}
              </button>
            </div>
            {item?.isOpen && <div className={style.SubPara}>{item?.para}</div>}
          </>
        ))}
      </div>
      <div className={style.subMainDiv}>
        {listData2?.map((item) => (
          <>
            <div className={style.container} key={item?.id}>
              <div className={style.subDiv}>{item?.heading}</div>
              <button
                className={style.btn}
                onClick={() => taskPress2(item?.id, !item?.isOpen)}
              >
                {item?.isOpen === true ? (
                  <Image
                    className={style.btn_img}
                    src={SPD_MinusIcon}
                    alt="SPD_PlusIcon"
                  />
                ) : (
                  <Image
                    className={style.btn_img}
                    src={SPD_PlusIcon}
                    alt="SPD_PlusIcon"
                  />
                )}
              </button>
            </div>
            {item?.isOpen && <div className={style.SubPara}>{item?.para}</div>}
          </>
        ))}
      </div>
      </div>
    </div>
  );
}
