import React from 'react'
import Topheadings from '../TopHeadings/TopHeadings'
import Image from 'next/image'
import styles from "./Testimonials.module.css"
import pg from "../../assets/images/P&G.png"
import left from "../../assets/images/left.png"
import right from "../../assets/images/right.png"

const Testimonials = () => {
  return (
    <div>
        <hr className={styles.hr} />
    <div className={styles.main} >
        
        <div className={styles.left}>
        <Topheadings
      title={"TESTIMONIALS"}
      heading={"Forming lasting partnerships"}
      width="40vw"/>
        </div>
        <div className={styles.right}>
            <p className={styles.text}>
            “The Tech Verticks“ team was nothing but highly professional when it came to our project. They were incredibly efficient, quick to respond, and organized.  We are ecstatic about the finished product & would definitely recommend them.
            </p>
            <div className={styles.pgDiv} >
                <div className={styles.subMain}>
                    <Image className={styles.img} src={pg} alt="" />
                <div className={styles.nameDiv}>
                    <p className={styles.name}>
                    Anthony Williams
                    </p>
                    <p className={styles.pg}>
                    P&G,  Director of Product
                    </p>
                </div>
                </div>
            </div>
            <div className={styles.btnDiv} >
                <button className={styles.btn} >
                <Image className={styles.btnImg} src={left} alt="" />
                
                </button>
                <button className={styles.btn} >
                <Image className={styles.btnImg} src={right} alt="" />
                
                </button>
            </div>
        </div>
  
    </div>
    <hr className={styles.hr} />
    </div>
  )
}

export default Testimonials
