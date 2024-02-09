import Image from "next/image";
import style from "./InsightComp.module.css";
import InsightImages from "../../assets/images/InsightImages.png"
import InsightImages1 from "../../assets/images/InsightImages1.png"
import InsightBlogComp from "../InsightBlogComp/InsightBlogComp";
import { useRouter } from 'next/router';

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
    const router = useRouter();
    const handleButtonClick = (itemId) => {
        // Perform the desired action based on the itemId
        console.log(`Button clicked for item with id: ${itemId}`);
        // Example: Navigate to a specific blog page using Next.js router
        router.push(`/BlogDetails`);
        // router.push(`/BlogDetails/${itemId}`);
      };
    return(
        <div>

        <div className={style.main}>
            <div className={style.h1}>INSIGHTS</div>
            <hr className={style.hr}/>
                {data.map((item)=>(
             <>  <InsightBlogComp item={item} onButtonClick={() => handleButtonClick(item.id)}/>
            <hr className={style.hr}/></>
                      
                ))
                }
          
        </div>
        </div>
    )

};