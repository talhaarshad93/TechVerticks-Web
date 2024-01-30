import style from "./CS_button.module.css";



export default function CS_Button(){
    return(
        <div className={style.mainDiv}>
            <button className={style.btn1}>All Projects</button>
            <button className={style.btn1} style={{width:"6vw"}}>3D</button>
            <button className={style.btn1}>Product Design </button>
            <button className={style.btn1}>Rebranding</button>
            <button className={style.btn1}>  Support </button>
            <button className={style.btn1}>Development</button>
            <button className={style.btn1}>RGraphic Design</button>
            <button className={style.btn1}>Motion Design</button>
            <button className={style.btn1}>Web flow  </button>
            <button className={style.btn1}>Branding</button>
            <button className={style.btn1} style={{width:"11vw"}}> Web Design</button>
        </div>
    )
}