import style from "./CS_button.module.css";



export default function CS_Button(){
    return(
        <div className={style.mainDiv}>
            <button className={style.btn1} style={{width:"12vw"}}>All Projects</button>
            <button className={style.btn1} style={{width:"5vw"}}>3D</button>
            <button className={style.btn1}style={{width:"13vw"}}>Product Design </button>
            <button className={style.btn1}style={{width:"11vw"}}>Rebranding</button>
            <button className={style.btn1}style={{width:"8vw"}}>  Support </button>
            <button className={style.btn1}style={{width:"11vw"}}>Development</button>
            <button className={style.btn1}style={{width:"13vw"}}>Graphic Design</button>
            <button className={style.btn1}style={{width:"12vw"}}>Motion Design</button>
            <button className={style.btn1}style={{width:"9vw"}}>Web flow  </button>
            <button className={style.btn1}style={{width:"9vw"}}>Branding</button>
            <button className={style.btn1} style={{width:"11vw"}}> Web Design</button>
        </div>
    )
}