// import React from 'react'
// import style from "./SubHeading.module.css"
// import Image from "next/image";
// import sports from "../../../assets/images/sports.png";
// import classNames from "classnames";

// const SubHeading = () => {
//   return (
//     <div className={classNames(style.mainDiv,)}>
//         <div className='col-5'>

//       <div className={style.bigOne}>Sports</div>
//       <div className={style.text}>
//       Creating cutting-edge mobile solutions for efficient content management, readable course material and secure online fee collection, Learning management systems, Communication interfaces include messaging, video conferencing, file sharing, gamification, knowledge base integration, and assessment engines.
//       </div>
//       <div className={style.details}>
//       Discover Industries Details
//       </div>
//       <hr />
//         </div>
//         <div className={classNames(style," offset-1 col-5")}>
//         <Image
//         src={sports}
//         alt={"alt"}
//         className={classNames(style.img,"col-")}
//         // style={{width:200}}
//         // className={classNames(styles,"p-")}
//       />
//         </div>
//     </div>
//   )
// }

// export default SubHeading
import React, { useState } from "react";
import Image from "next/image";
import style from "./SubHeading.module.css";
import classNames from "classnames";

const SubHeading = ({ data, handleClick, addingCss, hideHr ,width}) => {
  const { heading, text, isClicked } = data;
  const [fadeIn, setFadeIn] = useState(false);

  // Function to handle the transition
  const handleTransition = () => {
    // Apply fade-in effect after a short delay to trigger the transition
    setTimeout(() => {
      setFadeIn(isClicked);
      // console.log('woriidiaidaidiadiaida',isClicked)
    }, 50); // Adjust delay as needed
  };
  console.log('woriidiaidaidiadiaida',isClicked,fadeIn)

  // Trigger the transition when isClicked changes
  React.useEffect(() => {
    handleTransition();
  }, [isClicked]);
  return (
    <div className={classNames(style.mainDiv)}>
      <div className={classNames(style.leftDiv)}>
        <button
          className={classNames(style.bigOne, {
            [style.clicked]: isClicked,
            [style.font]: addingCss,
          })}
          // style={{ fontSize: fontsize }}
          // onClick={handleClick}
          onMouseEnter={handleClick}
          // onMouseLeave={handleClick}
        >
          {heading}
        </button>
        {isClicked && (
          <div
            className={classNames(fadeIn? style.fadeIn:style.textContainer)}
          >
            <div className={style.text} style={{width: width}}>{text}</div>
            <div className={style.details}>Discover Industries Details</div>
          </div>
        )}
        {/* <hr style={{  width: "47vw" }} /> */}
        {!hideHr && <hr style={{ width: "47vw" }} />}
      </div>
    </div>
  );
};

export default SubHeading;
