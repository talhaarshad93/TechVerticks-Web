import React, { useState } from "react";
import ImgTextComponent from "../Img and Text Component/ImgTextComponent";
import SubHeading from "../Industries/IndustriesSubHeading/SubHeading";
import styles from "./ServiceDetails.module.css";
import Topheadings from "../TopHeadings/TopHeadings";

const ServiceDetails = ({ newData }) => {
  const [industryData, setIndustryData] = useState(newData?.listData || []);
  const taskPress = (heading, type, image) => {
    let newArray = industryData?.map((val, i) => {
      if (val.heading == heading) {
        return { ...val, isClicked: type };
      } else {
        return { ...val, isClicked: false };
      }
    });
    // console.log("new array------", newArray);
    setIndustryData(newArray);
  };

  return (
    <div>
      <hr className={styles.hr} />
      <div className={styles.mainDiv}>
        <div className={styles.heading}>
            {/* MOBILE APPLICATION DEVELOPMENT */}
            <Topheadings serviceCss heading={newData.heading} width="57vw" />
          {industryData.map((data, index) => (
            <>
              <SubHeading
                key={index}
                data={data}
                addingCss={true}
                hideHr={true}
                handleClick={() =>
                  taskPress(data?.heading, !data?.isClicked, data?.image)
                }
                />
            </>
          ))}
          </div>
        <div className={styles.img}>
          <ImgTextComponent src={newData.image} alt="Image not Show" />
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
