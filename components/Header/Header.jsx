import React, { useEffect, useState } from "react";
import Image from "next/image";
import img from "../../assets/images/Logo.svg";
import Home from "../../assets/images/Home.svg";
import AboutUs from "../../assets/images/AboutUs.svg";
import Services from "../../assets/images/Services.svg";
import Solution from "../../assets/images/Solution.svg";
import Portfolio from "../../assets/images/Portfolio.svg";
import Blogs from "../../assets/images/Blogs.svg";
import ContactUS from "../../assets/images/ContactUS.svg";
import dropDown from "../../assets/images/dropDown.png";

import "bootstrap/dist/css/bootstrap.min.css";
import style from "./Header.module.css";
import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const [menuOpen, setmenuOpen] = useState(false);
  useEffect(() => {
    // Close the menu when the route changes
    setmenuOpen(false);
  }, [router.pathname]);
  return (
    <div className={style.mainContainer}>
      <div className={style.logo}>
        <Image src={img} className={style.logoImg} />
      </div>
      <div className={style.navbar}>
        <nav>
          <div
            className={style.menu}
            onClick={() => {
              setmenuOpen(!menuOpen);
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className={menuOpen ? style.open : ""}>
            <Link href={"/"}>
              <li className={router.pathname === "/" ? style.active : ""}>
                <Image src={Home} className={style.menuIconImg} />
                Home
              </li>
            </Link>
            <Link href={"/About"}>
              <li className={router.pathname === "/About" ? style.active : ""}>
                <Image src={AboutUs} className={style.menuIconImg} />
                About Us
              </li>
            </Link>
              <li
                id="drop"
                className={
                  router.pathname === "/ServicePage" ? style.active : ""
                }
              >
                  <Link href={"/ServicePage"}>
                <Image src={Services} className={style.menuIconImg} alt="img"/>
                Services
            </Link>
                <Image src={dropDown} className={style.dropDown} />

                <ul className={style.subMenu}>
                  <div className={style.subMenuDiv}>
                  <Link href={"/ServicePagesDetails"}>
                    <li >Mobile Application</li>
                  </Link>
                  <Link href={"/WebDevelopmentDetails"}>
                    <li >Website Development</li>
                  </Link>
                  <Link href={"/DigitalMarketingDetails"}>
                    <li >Digital Marketing</li>
                  </Link>
                  <Link href={"/Branding&Creatives"}>
                    <li >Branding & Creative</li>
                  </Link>
                  </div>
                  {/* <Link href={"/"}><li></li></Link> */}
                </ul>
              </li>
            <Link href={"/Solutions"}>
              <li
                className={router.pathname === "/Solutions" ? style.active : ""}
              >
                <Image src={Solution} className={style.menuIconImg} />
                Solutions
              </li>
            </Link>
            <Link href={"/Portfolio"}>
              <li
                className={router.pathname === "/Portfolio" ? style.active : ""}
              >
                <Image src={Portfolio} className={style.menuIconImg} />
                Portfolio
              </li>
            </Link>
            <Link href={"/BlogPage"}>
              <li
                className={router.pathname === "/BlogPage" ? style.active : ""}
              >
                <Image src={Blogs} className={style.menuIconImg} />
                Blog
              </li>
            </Link>
            <Link href={"/ContactUs"}>
              <li
                className={router.pathname === "/ContactUs" ? style.active : ""}
              >
                <Image src={ContactUS} className={style.menuIconImg} />
                Contact Us
              </li>
            </Link>
            {/* <Link href={"/ServicePagesDetails"}>
              <li
                className={router.pathname === "/ContactUs" ? style.active : ""}
              >
                App Deve
              </li>
            </Link>
            <Link href={"/WebDevelopmentDetails"}>
              <li
                className={router.pathname === "/ContactUs" ? style.active : ""}
              >
                Web Deve
              </li>
            </Link>
            <Link href={"/DigitalMarketingDetails"}>
              <li
                className={router.pathname === "/ContactUs" ? style.active : ""}
              >
                Digital
              </li>
            </Link>
            <Link href={"/Branding&Creatives"}>
              <li
                className={router.pathname === "/ContactUs" ? style.active : ""}
              >
                Branding
              </li>
            </Link>

            <Link href={"/CaseStudies"}>
              <li
                className={router.pathname === "/ContactUs" ? style.active : ""}
              >
                CaseStudies
              </li>
            </Link> */}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
