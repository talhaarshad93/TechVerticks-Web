import Image from "next/image";
import style from "./RelatedArticle.module.css";
import BD_IntroImg from "../../assets/images/BD_IntroImg.png"
import BD_IntroImg1 from "../../assets/images/BD_IntroImg1.png"
import BD_IntroImg2 from "../../assets/images/BD_IntroImg2.png"
import SPD_PlusIcon from "../../assets/images/SPD_PlusIcon.png"
import Link from "next/link";

const data=[
    {   id:"01",
        heading:"Introducing a New Event Series on Innovation in Technology",
        img:BD_IntroImg,
        para:"Working with an Android application development company like Tech Verticks means you get a team that understands your needs, develops your app efficiently, and supports you at every step.",
        icon:SPD_PlusIcon,
    },
    {   id:"02 ",
    heading:"Introducing a New Event Series on Innovation in Technology",
        img:BD_IntroImg1,
        para:"Working with an Android application development company like Tech Verticks means you get a team that understands your needs, develops your app efficiently, and supports you at every step.",
        icon:SPD_PlusIcon,
    },
    {   id:"03 ",
    heading:"Introducing a New Event Series on Innovation in Technology",
    img:BD_IntroImg2,
    para:"Working with an Android application development company like Tech Verticks means you get a team that understands your needs, develops your app efficiently, and supports you at every step.",
    icon:SPD_PlusIcon,
},
]
export default function RelatedArticle(){
    return(
        <div className={style.mainDiv}>
            <div className={style.mainHeading}>Related Article</div>
            <div className={style.subDiv}>
            {data.map((item)=>(
                      <div className={style.mainContainer} key={item.id}>
                      <div className={style.ImgDiv}>
                          <Image className={style.img} src={item.img} />
                      </div>
                      <div className={style.detailDiv}>
                          <div className={style.blog}>BLOG</div>
                          <div className={style.heading}>{item.heading}
                          </div>
                          <div className={style.paraDiv}>{item.para}
                          </div>
                          
                          <div className={style.detail}>
                          <Image className={style.icon} src={item.icon}/>
                             <Link href="/" >Read Complete Blog</Link> 
                          </div>
                      </div>
                   
                      </div>
            ))
        }
            </div>
            </div>
    )}