import Heading from '@/components/Heading Component/Heading';
import React from 'react';

const SpanHeading ="OUR Works"
const bigHeading ="We offer the diversity of skills"
const description ="Tech Verticks offers full-cycle design & development services to clients in digitizing their business idea into a successful launch."

const Portfolio = () => {
  return (
    <div>
      <Heading SpanHeading={SpanHeading} bigHeading = {bigHeading} description={description}PortfolioPage_Css/>  
      
    </div>
  );
}

export default Portfolio;
