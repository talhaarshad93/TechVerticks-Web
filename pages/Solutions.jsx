import Heading from '@/components/Heading Component/Heading'
import React from 'react'


const SpanHeading ="Our Solutions"
const bigHeading ="Innovative solutions that catalyze transformation"
const description ="We are dedicated to delivering transformative software and app development solutions that evolve and adapt to meet the unique requirements of our clients, propelling their digital evolution and catalyzing profound transformations."

const Solutions = () => {
  return (
    <div>
      <Heading SpanHeading={SpanHeading} bigHeading = {bigHeading} description={description}SolutionPage_Css/>   
    </div>
  )
}

export default Solutions
