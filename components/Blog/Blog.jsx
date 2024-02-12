
import style from "./Blog.module.css";

import InsightImages from "../../assets/images/InsightImages.png"
import InsightImages1 from "../../assets/images/InsightImages1.png"
import InsightImages2 from "../../assets/images/InsightImages2.png"
import InsightImages3 from "../../assets/images/InsightImages3.png"
import InsightImages4 from "../../assets/images/InsightImages4.png"
import InsightImages5 from "../../assets/images/InsightImages5.png"
// import InsightImages6 from "../../assets/images/InsightImages6.png"
// import InsightImages6 from "../../assets/images/Geelink1.gif"
import InsightImages6 from "../../assets/images/Geelink1.gif";
import InsightBlogComp from "../InsightBlogComp/InsightBlogComp";

import Heading from "../Heading Component/Heading";
import { useRouter } from 'next/router';

const data=[
    {   id: 1,
        heading:"Introducing a New Event Series on Innovation in Technology",
        img:InsightImages,
        islarge:true,
    },
    {   id: 2,
        heading:"How to Plan a Web Development Project Without Breaking the Budget",
        img:InsightImages1,
        islarge:false,
    },
    {   id: 3,
        heading:"Introducing a New Event Series on Innovation in Technology",
        img:InsightImages2,
        islarge:true,
    },
    {   id: 4,
        heading:"How to Plan a Web Development Project Without Breaking the Budget",
        img:InsightImages3,
        islarge:false,
    },
    {   id: 5,
        heading:"Introducing a New Event Series on Innovation in Technology",
        img:InsightImages4,
        islarge:true,
    },
    {   id: 6,
        heading:"How to Plan a Web Development Project Without Breaking the Budget",
        img:InsightImages5,
        islarge:false,
    },
    {   id: 7,
        heading:"How to Plan a Web Development Project Without Breaking the Budget",
        img:InsightImages6,
        islarge:true,
    }
];

export default function Blog(){
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
            <div className={style.mainDiv}>
            <button className={style.btn1}style={{width:"5vw"}}>All</button>
            <button className={style.btn1} style={{width:"6vw"}}> Blog</button>
            <button className={style.btn1}> Business  </button>
            <button className={style.btn1} style={{width:"7vw"}}>  Mobile</button>
            <button className={style.btn1} style={{width:"8vw"}}>   Product</button>
            <button className={style.btn1} style={{width:"14vw"}}> Machine Learning   </button>
            <button className={style.btn1}>Game</button>
            <button className={style.btn1}>Management</button>
            </div>
            <hr className={style.hr}/>

            {data?.map((item)=>(
                <div key={item.id} >
                <InsightBlogComp blogCss={item?.islarge} item={item}
                 onButtonClick={() => handleButtonClick(item.id)}/>
                <hr className={style.hr}/>
                </div>
            ))
        }
        </div>
        </div>
    )
}