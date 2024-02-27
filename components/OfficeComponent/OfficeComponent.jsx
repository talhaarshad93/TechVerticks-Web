import Topheadings from "../TopHeadings/TopHeadings";
import style from "./OfficeComponent.module.css";
import Image from "next/image";
import Pakistan from "../../assets/images/Karachi.png";
import USA from "../../assets/images/USA.png";
import USAFlag from "../../assets/images/USAFlag.png";
import PakFlag from "../../assets/images/PakFlag.png";
import classNames from "classnames";
import { useRef } from "react";
export default function OfficeComponent() {
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);

  const handleHover = (videoRef) => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = (videoRef) => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div className={style.main}>
      <div className={style.mainContainer1}>
        <div
          className={style.PakDiv}
          onMouseEnter={() => handleHover(videoRef1)}
          onMouseLeave={() => handleMouseLeave(videoRef1)}
        >
          <div className={style.headingDiv}>
            <Topheadings
              title={"Office # 1"}
              abcClass
              heading={"Pakistan"}
              paragraph={
                "C-21, Moon Street, Block 5, Gulshan-e-Iqbal, Karachi City, Sindh 75300.+92 346 3008534"
              }
              blackColor
            />
            <div className={style.imgDiv}>
              <Image className={style.PakFlag} src={PakFlag} alt="PakFlag" />
            </div>
          </div>

          <Image className={style.Pakimg} src={Pakistan} alt="Pakistan" />

          <video ref={videoRef1} className={style.PakimgColor} loop muted>
            <source src="/KarachiWhiteWipes.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* ------>>>>>> douplicate for hover*/}

        {/* <div className={style.PakDiv1}>
        <div className={style.headingDiv}>
          <Topheadings
            title={"Office # 1"}
            OfficeHover
            heading={"Pakistan"}
            paragraph={
              "First floor, A-190, Block 3 Gulshan-e-Iqbal, Karachi City, Sindh 75300.+92 346 3008534"
            }
            
            />
          <div className={style.imgDiv}>
            <Image className={style.PakFlag1} src={PakFlag} alt="PakFlag" />
          </div>
        </div>
        <video
            className={style.Pakimg1}
            loop
            autoPlay
            muted
          >
            <source src="/karachiWipe.mp4" type="video/mp4" />
          </video>
      </div> */}
      </div>
      {/* ----->>>>>> */}

      <div className={style.mainContainer}>
        <div
          className={style.USADiv}
          onMouseEnter={() => handleHover(videoRef2)}
          onMouseLeave={() => handleMouseLeave(videoRef2)}
        >
          <div className={style.headingDiv}>
            <Topheadings
              title={"Office # 2"}
              abcClass
              heading={"USA"}
              paragraph={
                "8403 Pines Blvd, Ste 217, Pembroke Pnes, Fl 33024.+1 (312) - 500 4798"
              }
              blackColor
            />
            <div className={style.imgDiv}>
              <Image className={style.USAFlag} src={USAFlag} alt="USAFlag" />
            </div>
          </div>

          <Image className={style.USAimg} src={USA} alt="Pakistan" />
          <video ref={videoRef2} className={style.USAimgColor} loop muted >
            <source src="/UsaWhiteWipes.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        {/* //------>>>>>>> */}
        {/* <div className={style.USADiv1}>
          <div className={style.headingDiv1}>
            <Topheadings
              title={"Office # 2"}
              OfficeHover
              heading={"USA"}
              paragraph={
                "8403 Pines Blvd, Ste 217, Pembroke Pnes, Fl 33024.+1 (312) - 500 4798"
              }
            />
            <div className={style.imgDiv}>
              <Image className={style.USAFlag1} src={USAFlag} alt="USAFlag" />
            </div>
          </div>

          <video
            className={style.USAimg1}
            loop
            autoPlay
            muted
          >
            <source src="/WipeUSA.mp4" type="video/mp4" />
          </video>
        </div> */}
      </div>
    </div>
  );
}
