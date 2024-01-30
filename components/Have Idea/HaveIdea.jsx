import React from 'react'
import Topheadings from '../TopHeadings/TopHeadings'
import classNames from "classnames";
import style from "./HaveIdea.module.css"

const HaveIdea = () => {
    let text = "Let’s Connect with Us!"
  return (
    <>
      <hr className={style.hr} />
    <div className={style.main}>

      <Topheadings title = {"Have an idea?"}
                  heading={"Let's Build & Scale It!"}
                  ideaCustome
                  haveIdea
                  letsBuild
                 
                  />
<button className={classNames(style.seeBtn, '')} >{text}</button>

    </div>
<hr className={style.hr} />

    </>
  )
}

export default HaveIdea
