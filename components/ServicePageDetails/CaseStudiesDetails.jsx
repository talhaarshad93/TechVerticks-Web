import Heading from '@/components/Heading Component/Heading'
import style from "./CaseStudiesDetail.module.css"
import React from 'react'
import AppStoreAppleLogo from "../../assets/images/AppStoreAppleLogo.png"
import AppStoreGoogleLogo from "../../assets/images/AppStoreGoogleLogo.png"
import Image from 'next/image'
import GetInTouch from '@/components/GetinTouch/GetinTouch/GetinTouch'
import HaveIdea from '@/components/Have Idea/HaveIdea'


const SpanHeading ="PORTFOLIO"
const bigHeading ="Botiga Mobile App"
const description ="Tech Verticks offers full-cycle design & development services to clients in digitizing their business idea into a successful launch."

const CaseStudiesDetails = () => {
  return (
    <div className={style.container}>
      <Heading SpanHeading={SpanHeading} bigHeading = {bigHeading} description={description}CaseStudies_Css/>  
      <div className={style.SubDiv}>
        <Image className={style.img} src={AppStoreGoogleLogo}   
      alt="App Store Logo"/>
        <Image className={style.img} src={AppStoreAppleLogo}   
      alt="App Store Logo"/>
      </div>
    </div>
  )
}

export default CaseStudiesDetails
