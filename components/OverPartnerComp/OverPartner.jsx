import overPartnerClasses from "./OverPartner.module.css";
import Image from "next/image";
import CocaCola from "../../assets/images/CocaCola.png";
import Universal from "../../assets/images/Universal.png";
import Samsung from "../../assets/images/Samsung.png";
import TMobile from "../../assets/images/TMobile.png";
import PG from "../../assets/images/P&G.png";
import TheimageGroup from "../../assets/images/TheimageGroup.png";
import Virgin from "../../assets/images/Virgin.png";
import Nike from "../../assets/images/Nike.png";
import Topheadings from "../TopHeadings/TopHeadings";

const data = [
  {
    id: 1,
    image: CocaCola,
    alt: "CocaCola",
  },
  {
    id: 2,
    image: Universal,
    alt: "Universal",
  },
  {
    id: 3,
    image: Samsung,
    alt: "Samsung",
  },
  {
    id: 4,
    image: TMobile,
    alt: "TMobile",
  },
  {
    id: 5,
    image: PG,
    alt: "PG",
  },
  {
    id: 6,
    image: TheimageGroup,
    alt: "TheimageGroup",
  },
  {
    id: 7,
    image: Virgin,
    alt: "Virgin",
  },
  {
    id: 8,
    image: Nike,
    alt: "Nike",
  },
];
const title =["Our Partners"];
const heading =(<>We build products and brands <br/> that people love.</>);


export default function OverPartner() {
  return (
    <div className={overPartnerClasses.mainDiv}>
     <Topheadings title={title} heading={heading}/>

      <div className={overPartnerClasses.mainImgDiv}>
        {data?.map((img) => (
          <div key={data?.id} className={overPartnerClasses.lable}>
            <Image
              className={overPartnerClasses.lableImg}
              src={img?.image}
              alt={img?.alt}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
