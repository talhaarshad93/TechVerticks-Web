import React from 'react'
import Topheadings from '../TopHeadings/TopHeadings'
import classNames from "classnames";
import style from "./HaveIdea.module.css"

const HaveIdea = () => {
    let text = "Let’s Connect with Us!"
  return (
    <>
    
    <div className={style.main}>

      <Topheadings title = {"Have an idea?"}
                  heading={"let's build & scale it!"}
                  ideaCustome
                  haveIdea
                  letsBuild
                 
                  />
<button className={classNames(style.seeBtn, '')} >{text}</button>

    </div>

    </>
  )
}

export default HaveIdea
