import ImageLayout from '@/components/AU_imagesLayout/ImageLayout'
import Heading from '@/components/Heading Component/Heading'
import ImageSlider from '@/components/ImageSlider/ImageSlider'
import Insight from '@/components/InsightComponent/InsightComponent'
import Topheadings from '@/components/TopHeadings/TopHeadings'
import React from 'react'

const SpanHeading ="WHO WE ARE"
const bigHeading =<>Providing Insights <br/>& solution at<br/> help businesses drive</>
const description ="Tech Verticks offers full-cycle design & development services to clients in digitizing their business idea into a successful launch."

const About = () => {
  return (
    <div>
      <Heading SpanHeading={SpanHeading} bigHeading = {bigHeading} description={description} AboutPage_Css />  
     <ImageLayout/>
    </div>
  )
}

export default About
