import Image from "next/image";
import style from "./InsightComp.module.css";
import InsightImages from "../../assets/images/InsightImages.png"
import InsightImages1 from "../../assets/images/InsightImages1.png"
import InsightBlogComp from "../InsightBlogComp/InsightBlogComp";
const data=[
    {   id:"01",
        heading:"Introducing a New Event Series on Innovation in Technology",
        img:InsightImages,
    },
    {   id:"02 ",
        heading:"How to Plan a Web Development Project Without Breaking the Budget",
        img:InsightImages1,
    },
]



export default function Insight(){
    return(
        <div>

        <div className={style.main}>
            <div className={style.h1}>INSIGHTS</div>
            <hr className={style.hr}/>
                {data.map((item)=>(
             <>  <InsightBlogComp item={item}/>
            <hr className={style.hr}/></>
                      
                ))
                }
          
        </div>
        </div>
    )

};