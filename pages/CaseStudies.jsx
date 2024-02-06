import Section from '@/components/Case Study/Section Com/Section'
import HaveIdea from '@/components/Have Idea/HaveIdea'
import Heading from '@/components/Heading Component/Heading'
import React from 'react'


const SpanHeading ="OUR WORKS"
const bigHeading ="We offer the diversity of skills"
const description ="Tech Verticks offers full-cycle design & development services to clients in digitizing their business idea into a successful launch."

const CaseStudies = () => {
  return (
    <div>
      <Heading SpanHeading={SpanHeading} bigHeading = {bigHeading} description={description}CaseStudies_Css/>  
      <Section/>
      <HaveIdea/>
    </div>
  )
}

export default CaseStudies
