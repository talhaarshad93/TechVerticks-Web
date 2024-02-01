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
        { heading: 'Mobile Application Development', image: MB1 },
        { heading: 'Website Development', image:MB2 },
        { heading: 'Design And Creativity', image: MB3},
        { heading: 'Future technology', image:MB4 },
        { heading: 'Solutions', image:MB5 },
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
