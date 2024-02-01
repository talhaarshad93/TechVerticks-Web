import React from "react";
import FooterCard from "./FooterCard";
import img from "../../assets/images/Vector.png";
import img1 from "../../assets/images/Logo.png";
import classNames from "classnames";
import style from './Footer.module.css'

import Image from "next/image";
import Form from "react-bootstrap/Form";

function FooterCardDiv() {
  let items1 = ["About Us", "Portfolio", "Blog", "Contact Us"];
  let items2 = [
    "Mobile Application Development",
    "Website Development",
    "Future Technology",
    "Design and Creativity",
    "Solution",
    "Integration",
  ];
  let items3 = ["Facebook", "Instagram", "Linkedin", "Twitter"];

  return (
    <div className="container-fluid " style={{ backgroundColor: "#f8f9fa " }}>
      <div className="container-fluid ml-md-5 justify-content-between  p-4">
        <div className="row pt-3">
          <div className="col-md-4 mb-4">
            <div className="flex-md-column align-items-center  row">
              <div className={classNames(style.text," ml-md-2 col-6  col-md-12 ")}>
                Tech Stories You Won't Read Anywhere Else.
              </div>
              <div className="col-6 mt-3 col-md-12">
                <div className=" align-items-center flex justify-content-between mb-2 ml-2 mt-md-3">
                  <input
                    className={style.inpText}
                    type="email"
                    placeholder="Your Email"
                  />
                  {/* <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            /> */}
                  <a href="">
                    <Image className="" src={img} width={15} height={10} />
                  </a>
                </div>
                <hr />
              </div>
            </div>
          </div>
          <div className="offset-md-1 col-md-6   ">
            <div className={style.footerCardDiv}>
              <FooterCard title={"About Us"} items={items1} />
              <FooterCard title={"Services"} items={items2} />
              <FooterCard title={"Social"} items={items3} />
            </div>
          </div>
        </div>
      </div>
      <hr className="mx-auto" style={{ width: "95%" }} />

      <div className={classNames(style.dflex,"d-flex align-items-center justify-content-between py-4  container-fluid  ")}>
        <div className="pl-3 mb-3 mb-md-0 px-5">
          <Image src={img1} width={150} height={30} />
        </div>
        <div className={style.footerCopy}>
          &copy; Copyrights 2023 Tech Verticks. All rights reserved.
        </div>
        <div>
          <span className={classNames(style.footerCopy,"mr-2")}>Terms & Conditions</span>
          <span className={classNames(style.footerCopy,"mx-md-4")}>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
}

export default FooterCardDiv;
