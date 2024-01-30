import style from "./contain.module.css";
export default function Contain({ serial, heading, paragraph }) {
  return (
    <div className={style.main}>
      <div className={style.mainDiv1}>
        <div className={style.seril}>{serial}</div>
        <div className={style.heading1}>{heading}</div>
      </div>
      <div className={style.praContainer1}>{paragraph}</div>
    </div>
  );
}
