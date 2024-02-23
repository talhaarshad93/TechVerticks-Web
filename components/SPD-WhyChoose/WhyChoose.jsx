"use client";
import Image from "next/image";
import style from "./WhyChoose.module.css";
import WhatYouGet1 from "../../assets/images/WhatYouGet.png";
import Link from "next/link";
import { useState } from "react";

const data = [
  {
    id: "1",
    title: "Mobile app design",
    content: (
      <>
      We are a team of experienced iOS and Android app developers in who
      <br />
      <br />
      leverage cutting-edge technologies to create mobile applications. Whether it&apos;s Android,
      iOS, hybrid, or native app development, we handle all forms of mobile
      application development.
      Our specialization extends to cross-platform apps, native apps, flutter
      apps, and progressive web apps. We take ownership of your project from the initial
      mobile app planning phase through to post-launch support, ensuring timely
      delivery of all commitments.
    </>
    ),
  },
  {
    id: "2",
    title: "Enterprise app development",
    content: (
      <>
      We are a team of experienced iOS and Android app developers in who
      leverage cutting-edge technologies to create mobile applications. Whether it&apos;s Android,
      iOS, hybrid, or native app development, we handle all forms of mobile
      application development.
      Our specialization extends to cross-platform apps, native apps, flutter
      apps, and progressive web apps. We take ownership of your project from the initial
      mobile app planning phase through to post-launch support, ensuring timely
      <br />
      <br />
      delivery of all commitments.
    </>
    ),
  },
  {
    id: "3",
    title: "M-commerce app development",
    content: (
      <>
      We are a team of experienced iOS and Android app developers in who
      leverage cutting-edge technologies to create mobile applications. Whether it&apos;s Android,
      <br />
      <br />
      iOS, hybrid, or native app development, we handle all forms of mobile
      application development.

      Our specialization extends to cross-platform apps, native apps, flutter
      apps, and progressive web apps. We take ownership of your project from the initial
      mobile app planning phase through to post-launch support, ensuring timely
      delivery of all commitments.
    </>
    ),
  },
  {
    id: "4",
    title: "Mobile app maintenance",
    content: (
      <>
      We are a team of experienced iOS and Android app developers in who
      leverage cutting-edge technologies to create mobile applications. Whether it&apos;s Android,
      iOS, hybrid, or native app development, we handle all forms of mobile
      application development.
      Our specialization extends to cross-platform apps, native apps, flutter
      apps, and progressive web apps. We take ownership of your project from the initial
      <br />
      <br />
      mobile app planning phase through to post-launch support, ensuring timely
      delivery of all commitments.
    </>
    ),
  },
  {
    id: "5",
    title: "Mobile application consultation",
    content: (
      <>
      We are a team of experienced iOS and Android app developers in who
      leverage cutting-edge technologies to create mobile applications.
      <br />
    <br /> Whether it&apos;s Android,
      iOS, hybrid, or native app development, we handle all forms of mobile
      application development.
      <br />
      <br />
      Our specialization extends to cross-platform apps, native apps, flutter
      apps, and progressive web apps. We take ownership of your project from the initial
      mobile app planning phase through to post-launch support, ensuring timely
      delivery of all commitments.
    </>
    ),
  },
  {
    id: "6",
    title: "iPad and tablet software development",
    content: (
      <>
      We are a team of experienced iOS and Android app developers in who
      <br />
      <br />
      leverage cutting-edge technologies to create mobile applications. Whether it&apos;s Android,
      iOS, hybrid, or native app development, we handle all forms of mobile
      application development.
      <br />
    <br />
      Our specialization extends to cross-platform apps, native apps, flutter
      apps, and progressive web apps. We take ownership of your project from the initial
      mobile app planning phase through to post-launch support, ensuring timely
      delivery of all commitments.
    </>
    ),
  },
];

export default function WhyChoose({WCheading,WCpara}) {
  let [active, setActive] = useState(
    <>
    We are a team of experienced iOS and Android app developers in who
    leverage cutting-edge technologies to create mobile applications. 
    <br />
    <br />Whether it&apos;s Android,
    iOS, hybrid, or native app development, we handle all forms of mobile
    application development.
    <br />
    <br />
    Our specialization extends to cross-platform apps, native apps, flutter
    apps, and progressive web apps.
    <br />
    <br /> We take ownership of your project from the initial
    mobile app planning phase through to post-launch support, ensuring timely
    delivery of all commitments.
  </>
  );

  function handleOnClick(item) {
    setActive(item);
  }
  // console.log(handleOnClick())
  return (
    <div>
      <div className={style.SPD_MainDiv}>
        <div className={WCheading?style.WC_TopSubDiv1:style.TopSubDiv1}>
        {WCheading}
        </div>
        <div className={style.TopSubDiv2}>
          {WCpara}
        </div>

        <div className={style.MidDiv}>
          <div className={style.SubMidDiv1}>
            {data?.map((item) => (
              <ul key={item.id}>
                <li onClick={() => handleOnClick(item?.content)}>
                  {item?.title}
                </li>
              </ul>
            ))}
          </div>
          <div className={style.SubMidDiv2}>{active}</div>
          {/* <div className={style.SubMidDiv2}>{active}
        We are a team of experienced iOS and Android app developers in who leverage cutting-edge technologies to create mobile applications. Whether it's Android, iOS, hybrid, or native app development, we handle all forms of mobile application development.<br/><br/>
Our specialization extends to cross-platform apps, native apps, flutter apps, and progressive web apps. We take ownership of your project from the initial mobile app planning phase through to post-launch support, ensuring timely delivery of all commitments.

        </div> */}
        </div>
        <div className={style.FoterDiv}>
          <div className={style.SubFoterDiv1}>
            <Image
              className={style.SubFoterDiv1_img}
              src={WhatYouGet1}
              alt="WhatYouGet"
            />
          </div>
          <div className={style.SubFoterDiv2}>
            <div className={style.TopSubDiv}>What You Get?</div>
            <div className={style.SubFoterLink}>
              <ul>
                <li>
                  Minimalistic Design
                </li>
                <li>
                  50% Faster Development
                </li>
                <li>
                  Enterprise-Ready App
                </li>
                <li>
                  Compliance-Oriented App
                </li>
                <li>
                  Seamless Back-End Integration
                </li>
                <li>
                  Smooth Deployment
                </li>
                <li>
                  Rigorous Quality Assurance
                </li>
                <li>
                  Post-Deployment Support
                </li>
              </ul>
            </div>
            <div className={style.paraDiv}>
              Moreover, we are an award-winning mobile app development company,
              having delighted over 250 clients. Share your innovative concept
              and our team will craft a creative solution.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
