import Topheadings from "../TopHeadings/TopHeadings";
import style from "./OfficeComponent.module.css";
import Image from "next/image";
import Pakistan from "../../assets/images/Pakistan.png";
import USA from "../../assets/images/USA.png";
import USAFlag from "../../assets/images/USAFlag.png";
import PakFlag from "../../assets/images/PakFlag.png";

export default function OfficeComponent() {
  return (
    <div className={style.main}>
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
        <Image className={style.USAimg} src={USA} alt="Pakistan" />
      </div>
    </div>
  );
}
