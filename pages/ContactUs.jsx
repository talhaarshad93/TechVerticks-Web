import GetInTouch from '@/components/GetinTouch/GetinTouch/GetinTouch'
import Heading from '@/components/Heading Component/Heading'
import OfficeComponent from '@/components/OfficeComponent/OfficeComponent'
import React from 'react'

const SpanHeading ="Get in touch"
const bigHeading ="Let’s Work "
const description ="Start a conversation around new product ideas, business opportunities, or tech consulting."
const ContactUs = () => {
  return (
    <div>
      <Heading SpanHeading={SpanHeading} bigHeading = {bigHeading} heading2="Together" description={description} ContentUs_Css
      scroll= "#office"/> 
      <GetInTouch hideComponent={true} mainContainer_CU_CSS/>
      <OfficeComponent/>

    </div>
  )
}

export default ContactUs
