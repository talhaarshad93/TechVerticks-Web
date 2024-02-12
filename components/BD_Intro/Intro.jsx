import Image from "next/image";
import style from "./Intro.module.css";
import IntroImage from "../../assets/images/IntroImage.png";
import UserImage from "../../assets/images/UserImage.png";
import FaceBook from "../../assets/images/facebook.png";
import linkedin from "../../assets/images/linkedin.png";
import twitter from "../../assets/images/twitter.png";
import instagram from "../../assets/images/instagram.png";
import dribbble from "../../assets/images/dribbble.png";
import Link from "next/link";

export default function Intro() {
  return (
    <div className={style.mainDiv}>
      <div className={style.mainHeading}>
        Introducing a New Event Series on Innovation in Technology
      </div>
      <Image className={style.imgIntro} src={IntroImage} alt="IntroImage" />
      <div className={style.FooterDiv}>
        <div className={style.leftsubDiv}>
          <Image className={style.UserImg} src={UserImage} alt="img" />
          <div className={style.textDiv}>
            {
              <>
                BY SINDY VUKOVIĆ COPYWRITER
                <br />
                <br />
                LUKA DOLECKI VISUALS
                <br />
                <br />5 MIN READ IN STRATEGY
                <br />
                <br />
                PUBLISHED <br />
                OCT 31, 2023
              </>
            }
          </div>
        </div>
        <div className={style.rightSubDiv}>
          <div className={style.heading}>
            How to build an app for your business if you’ve just visualized it
            in your mind?
          </div>
          <div className={style.text}>
            {
              <>
                Well, it’s not that hard to join the clan of innovative
                entrepreneurs who are reshaping industries through cutting-edge
                mobile solutions.
                <br />
                <br />
                That’s because a person will surely own a mobile device, whether
                they’re running a global corporation or managing a quaint
                neighborhood bakery.
                <br />
                <br />
                This can be attributed to the fact that the average American
                checks their phone a staggering 262 times a day. Moreover, the
                number of apps available for downloads worldwide has increased
                by a whopping 82% since 2016, and people collectively spent a
                mind-boggling 3.8 trillion hours on mobile apps in 2022.
                <br />
                <br />
                Adding more to this, the mobile app industry is on track to
                generate a staggering <span style={{borderBottom:"0.1vw solid grey"}}>$932 billion</span> in revenue in 2023. With the
                industry’s rapid growth and these astonishing statistics, it’s
                no surprise that businesses and entrepreneurs are increasingly
                drawn to app development, aiming to capitalize on its potential
                to drive innovation and revenue.
                <br />
                In this blog, we’ll walk you through the insights on how to
                build an app, exploring the essential steps, strategies, and
                costs involved in creating a mobile masterpiece that can stand
                out in the marketplace.
                <br />
                <br />
                However, let’s start with the basics and learn about mobile app
                development, which is necessary if you’re new to this exciting
                field.
              </>
            }
          </div>
          <div className={style.heading} style={{ marginTop: "1.4vw" }}>
            What Is Mobile App Development?
          </div>
          <div className={style.text}>
            {
              <>
                Mobile app development is the process of developing software for
                smartphones and tablets, most commonly for iOS and Android
                operating systems.
                <br />
                <br />
                The origins of application development can be traced back to
                conventional software development for computers.
                <br />
                <br />
                However, mobile apps designed for smartphones and tablets are
                specifically crafted to leverage the integrated functionalities
                and hardware of mobile devices, encompassing features such as
                cameras, GPS, Bluetooth, and more.
                <br />
                <br />
                This can be attributed to the fact that the average American
                checks their phone a staggering 262 times a day.
              </>
            }
          </div>
          <div className={style.heading} style={{ marginTop: "1.4vw" }}>
            There is more to branding than meets the eye
          </div>
          <div className={style.text}>
            {
              <>
                Moreover, the number of apps available for downloads worldwide
                has increased by a whopping 82% since 2016, and people
                collectively spent a mind-boggling 3.8 trillion hours on mobile
                apps in 2022.
                <br />
                <br />
                Adding more to this, the mobile app industry is on track to
                generate a staggering <span style={{borderBottom:"0.1vw solid grey"}}>$932 billion</span>  in revenue in 2023.
                <br />
                <br />
                With the industry’s rapid growth and these astonishing
                statistics, it’s no surprise that businesses and entrepreneurs
                are increasingly drawn to app development, aiming to capitalize
                on its potential to drive innovation and revenue.
                <br />
                <br />
                In this blog, we’ll walk you through the insights on how to
                build an app, exploring the essential steps, strategies, and
                costs involved in creating a mobile masterpiece that can stand
                out in the marketplace.
                <br />
                <br />
                However, let’s start with the basics and learn about mobile app
                development, which is necessary if you’re new to this exciting
                field.
                <br />
                <br />
                <br />
                This can be attributed to the fact that the average American
                checks their phone a staggering 262 times a day. Moreover, the
                number of apps available for downloads worldwide has increased
                by a whopping 82% since 2016, and people collectively spent a
                mind-boggling 3.8 trillion hours on mobile apps in 2022.
                <br />
                <br />
                Adding more to this, the mobile app industry is on track to
                generate a staggering <span style={{borderBottom:"0.1vw solid grey"}}>$932 billion</span> in revenue in 2023. With the
                industry’s rapid growth and these astonishing statistics, it’s
                no surprise that businesses and entrepreneurs are increasingly
                drawn to app development, aiming to capitalize on its potential
                to drive innovation and revenue.
                <br />
                In this blog, we’ll walk you through the insights on how to
                build an app, exploring the essential steps, strategies, and
                costs involved in creating a mobile masterpiece that can stand
                out in the marketplace.
                <br />
                <br />
                However, let’s start with the basics and learn about mobile app
                development, which is necessary if you’re new to this exciting
                field.
              </>
            }
          </div>
          <div className={style.SubDiv}>
            <Image className={style.UserImg} src={UserImage} alt="img" />
            <div className={style.textDiv} style={{ marginTop: "1.5vw" }}>
              BY SINDYVUKOVIĆ COPYWRITER
            </div>
            <div className={style.logo}>
          <Link href={"/"}><Image src={FaceBook} alt="Facebook" className={style.logoImg}/></Link>
          <Link href={"/"}><Image src={twitter} alt="Facebook" className={style.logoImg}/></Link>
          <Link href={"/"}><Image src={linkedin} alt="Facebook" className={style.logoImg}/></Link>
          <Link href={"/"}><Image src={instagram} alt="Facebook" className={style.logoImg}/></Link>
          <Link href={"/"}><Image src={dribbble} alt="Facebook" className={style.logoImg}/></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
