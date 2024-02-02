import overPartnerClasses from "./OverPartner.module.css";
import Image from "next/image";
import tvprt1 from "../../assets/Tv Logo/tvprt9.png";
import tvprt2 from "../../assets/Tv Logo/tvprt2.png";
import tvprt3 from "../../assets/Tv Logo/tvprt3.png";
import tvprt4 from "../../assets/Tv Logo/tvprt4.png";
import tvprt5 from "../../assets/Tv Logo/tvprt5.png";
import tvprt6 from "../../assets/Tv Logo/tvprt6.png";
import tvprt7 from "../../assets/Tv Logo/tvprt7.png";
import tvprt8 from "../../assets/Tv Logo/tvprt8.png";
import Topheadings from "../TopHeadings/TopHeadings";

const data = [
  {
    id: 1,
    image: tvprt1,
    alt: "CocaCola",
  },
  {
    id: 2,
    image: tvprt2,
    alt: "Universal",
  },
  {
    id: 3,
    image: tvprt3,
    alt: "Samsung",
  },
  {
    id: 4,
    image: tvprt4,
    alt: "TMobile",
  },
  {
    id: 5,
    image: tvprt5,
    alt: "PG",
  },
  {
    id: 6,
    image: tvprt6,
    alt: "TheimageGroup",
  },
  {
    id: 7,
    image: tvprt7,
    alt: "Virgin",
  },
  {
    id: 8,
    image: tvprt8,
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
