import Topheadings from "../TopHeadings/TopHeadings";
import style from "./OfficeComponent.module.css";
import Image from "next/image";
import Pakistan from "../../assets/images/Pakistan.png";
import USA from "../../assets/images/USA.png";
import USAFlag from "../../assets/images/USAFlag.png";
import PakFlag from "../../assets/images/PakFlag.png";
import classNames from "classnames";
export default function OfficeComponent() {
  return (
    <div className={style.main}>
      <div className={style.mainContainer1}>
      <div className={style.PakDiv}>
        <div className={style.headingDiv}>
          <Topheadings
            title={"Office # 1"}
            abcClass
            heading={"Pakistan"}
            paragraph={
              "First floor, A-190, Block 3 Gulshan-e-Iqbal, Karachi City, Sindh 75300.+92 346 3008534"
            }
            blackColor
            />
          <div className={style.imgDiv}>
            <Image className={style.PakFlag} src={PakFlag} alt="PakFlag" />
          </div>
        </div>
        <Image className={style.Pakimg} src={Pakistan} alt="Pakistan" />
      </div>

      {/* ------>>>>>> douplicate for hover*/}

      <div className={style.PakDiv1}>
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
        {/* <Image className={style.Pakimg1} src={Pakistan} alt="Pakistan" /> */}
        <video
            className={style.Pakimg1}
            // style={imageStyles}
            loop
            autoPlay
            muted
          >
            <source src="/karachiWipe.mp4" type="video/mp4" />
          </video>
      </div>
            </div>
            {/* ----->>>>>> */}

      <div className={style.mainContainer}>
        <div className={style.USADiv}>
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
          <div className={style.USAimg}></div>
        </div>
        {/* //------>>>>>>> */}
        <div className={style.USADiv1}>
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
        </div>
      </div>
    </div>
  );
}
