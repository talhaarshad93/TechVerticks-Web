import React from 'react'
import styles from './Heading.module.css'
import classNames from 'classnames';
import Image from 'next/image';
import img from "../../assets/images/down.png";
import GetInTouch from '../GetinTouch/GetinTouch/GetinTouch';
import Link from 'next/link';
// import '../../assets/fonts/TT Interphases Pro';



const Heading = ({SpanHeading,bigHeading,description,ServicePage_Css,BlogPage_Css,AboutPage_Css,CaseStudies_Css,Portfolio_Css,SolutionPage_Css,PortfolioPage_Css,ContentUs_Css}) => {
  return (
    <div className={classNames(styles.MainContainer)}>
      <div>
        <span className={classNames(styles.spanHeading,
           )}
           style={{
            ...(ContentUs_Css && {fontWeight:400,width:"55vw",fontSize:"1.2vw",textTransform:"uppercase"}),
           }}
           >{SpanHeading}</span>
        <div className={ServicePage_Css ? styles.popOutin: styles.bigHeading}
         style={{
          ...(BlogPage_Css && {fontWeight:900,width:"55vw",fontSize:"8vw" ,lineHeight:"8vw"}),
        ...(AboutPage_Css && {width:"90vw",fontSize:"6vw", lineHeight:"6vw"}),

        ...(Portfolio_Css && {fontWeight:800,width:"55vw",fontSize:"7.4vw",lineHeight:"7.4vw",letterSpacing:"-0.1vw",paddingRight:"12vw", }), 
        ...(PortfolioPage_Css && {fontWeight:800,width:"63vw",fontSize:"5.4vw",lineHeight:"5.4vw",letterSpacing:"-0.1vw",paddingRight:"12vw", }), 
        ...(SolutionPage_Css && {fontWeight:900,width:"93vw",fontSize:"7vw",lineHeight:"6.5vw",letterSpacing:"0vw",paddingRight:"12vw", }), 
        ...(ContentUs_Css && {fontWeight:900,width:"56vw",fontSize:"8.6vw",lineHeight:"9vw",letterSpacing:"-0.1vw",paddingRight:"12vw", }), 
        
      }}
      >{bigHeading}</div>
      </div>
      <div className={classNames(styles.subDiv,)}>
      
          <Link href="">
      <Image className={styles.img} src={img} alt='img'/>
        </Link>
      
      <div className={classNames(styles.description,)}
      style={{
        ...(ServicePage_Css && {fontWeight:400,width:"66vw",fontSize:"2.5vw",lineHeight:"3.1vw"}),
        ...(BlogPage_Css && {fontWeight:400,width:"53vw",fontSize:"2.5vw",lineHeight:"3.1vw",letterSpacing:"-0.1vw" }), 
        ...(AboutPage_Css && {fontWeight:400,width:"65vw",fontSize:"2.6vw",lineHeight:"3.1vw",letterSpacing:"-0.1vw",paddingRight:"12vw" }), 
        ...(CaseStudies_Css && {fontWeight:400,width:"65vw",fontSize:"2.6vw",lineHeight:"3.1vw",letterSpacing:"-0.1vw",paddingRight:"12vw", }), 
        ...(Portfolio_Css && {fontWeight:400,width:"65vw",fontSize:"2.6vw",lineHeight:"3.1vw",letterSpacing:"-0.1vw",paddingRight:"12vw", }), 
        ...(SolutionPage_Css && {fontWeight:400,width:"65vw",fontSize:"2.6vw",lineHeight:"3.1vw",letterSpacing:"-0.1vw",paddingRight:"2vw", }), 
        ...(PortfolioPage_Css && {fontWeight:400,width:"63vw",fontSize:"2.6vw",lineHeight:"3.1vw",letterSpacing:"-0.1vw",paddingRight:"8vw", }), 
        ...(ContentUs_Css && {fontWeight:400,width:"63vw",fontSize:"2.5vw",lineHeight:"3.1vw",letterSpacing:"-0.08vw",paddingRight:"3vw" }), 
        
      }}
      >{description}</div></div>
    </div>
  )
}

export default Heading
