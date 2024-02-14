import overPartnerClasses from "./OverPartner.module.css";
import Image from "next/image";
import tvprt1 from "../../assets/Tv Logo/tvprt1.png";
import tvprt2 from "../../assets/Tv Logo/tvprt2.png";
import tvprt3 from "../../assets/Tv Logo/tvprt3.png";
import tvprt4 from "../../assets/Tv Logo/tvprt4.png";
import tvprt5 from "../../assets/Tv Logo/tvprt5.png";
import tvprt6 from "../../assets/Tv Logo/tvprt6.png";
import tvprt7 from "../../assets/Tv Logo/tvprt7.png";
import tvprt8 from "../../assets/Tv Logo/tvprt8.png";
import tvprt9 from "../../assets/Tv Logo/tvprt9.png";
import tvprt10 from "../../assets/Tv Logo/tvprt10.png";
import tvprt11 from "../../assets/Tv Logo/tvprt11.png";
import tvprt12 from "../../assets/Tv Logo/tvprt12.png";
import tvprt13 from "../../assets/Tv Logo/tvprt13.png";
import tvprt14 from "../../assets/Tv Logo/tvprt14.png";
import tvprt15 from "../../assets/Tv Logo/tvprt15.png";
import Topheadings from "../TopHeadings/TopHeadings";

const data = [
  {
    id: 1,
    image: tvprt1,
    alt: "Loading Error",
  },
  {
    id: 2,
    image: tvprt2,
    alt: "Loading Error",
  },
  {
    id: 3,
    image: tvprt3,
    alt: "Loading Error",
  },
  {
    id: 4,
    image: tvprt4,
    alt: "Loading Error",
  },
  {
    id: 5,
    image: tvprt5,
    alt:"Loading Error",
  },
  {
    id: 6,
    image: tvprt6,
    alt: "Loading Error",
  },
  {
    id: 7,
    image: tvprt7,
    alt: "Loading Error",
  },
  {
    id: 8,
    image: tvprt8,
    alt: "Loading Error",
  },
  {
    id: 9,
    image: tvprt9,
    alt: "Loading Error",
  },
  {
    id: 10,
    image: tvprt10,
    alt: "Loading Error",
  },
  {
    id: 11,
    image: tvprt11,
    alt: "Loading Error",
  },
  {
    id: 12,
    image: tvprt12,
    alt: "Loading Error",
  },
  {
    id: 13,
    image: tvprt13,
    alt: "Loading Error",
  },
  {
    id: 14,
    image: tvprt14,
    alt: "Loading Error",
  },
  {
    id: 15,
    image: tvprt15,
    alt: "Loading Error",
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
