import Heading from '@/components/Heading Component/Heading'
import React from 'react'


const SpanHeading ="GENERATE YOUR VISION"
const bigHeading ="Elevate experiences and activate growth"
const description ="From bold new ideas to innovative platforms and branding solutions, we’ve got you covered. Our team works closely with you to strategize the next move and build custom solutions that unlock your full potential."

const ServicePage = () => {
  return (
    <div>
      <Heading SpanHeading={SpanHeading} bigHeading = {bigHeading} description={description} ServicePage_Css/>  
      
    </div>
  )
}

export default ServicePage
