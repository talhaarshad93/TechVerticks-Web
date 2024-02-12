import React, { useState } from "react";
import ImgTextComponent from "@/components/Img and Text Component/ImgTextComponent";
import classNames from "classnames";
import styles from "./../We Build/Count.module.css";
import style from "./OurServices.module.css";
import MB1 from '../../assets/images/serviceImg.png'
import MB2 from '../../assets/images/kate.png'
import MB3 from '../../assets/images/mob.png'
import MB4 from '../../assets/images/l.t.png'
import MB5 from '../../assets/images/TVimg.png'
// import { useState } from "react";


const OurServices = () => {
    const data = [
        { heading: 'Mobile Application Development', image: MB1 ,text: 'Grow your business with a full-fledged, scalable and stable mobile app and get MI development services (iOS, Android and Hybrid mobile ) under a single roof'},
        { heading: 'UI/UX Design', image:MB2, text: 'Get visually appealing designs for your projects with our top-rated UI & UX design and development technologies to give an aesthetic user experience' },
        { heading: 'Web Development', image: MB3, text: 'Delivering comprehensive web development services with broad-ranging expertise and technologies that encompasses every corner of the digital web'},
        { heading: 'Digital Marketing', image:MB4, text: 'Comprehensive and business-focused solutions for search engine optimization and social media marketing strategies coupled with a decade worth of experience and expert insight.' },
        // { heading: 'Solutions', image:MB5 },
      ];
    
      const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <div>
      <div className={classNames(style.headDiv, "ml-")}>
        <div className={classNames(styles.weBuild, "ml-")}>OUR SERVICES</div>
        <p className={classNames(style.working, "ml-")}>
          Working holistically, from identities to full-scale applications.
        </p>
      </div>
      <div >
      {data.map((item, index) => (
        <div className="d-flex"
          key={index}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
            <div className="col-4">

          {hoveredIndex === index && (
              <ImgTextComponent 
              src={item?.image}
              alt={`${item?.heading} Image`}
              text = { item?.text}
              // style={{ maxWidth: '100%', height: 'auto' }}
              />
              )}
              </div>
             <div>

              <h2 className={classNames(style.heading,"uppercase ")}>{item.heading}</h2>
             </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default OurServices;
