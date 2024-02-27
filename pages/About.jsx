import ImageLayout from '@/components/AU_imagesLayout/ImageLayout'
import GetInTouch from '@/components/GetinTouch/GetinTouch/GetinTouch'
import Heading from '@/components/Heading Component/Heading'
import ImageSlider from '@/components/ImageSlider/ImageSlider'
import Insight from '@/components/InsightComponent/InsightComponent'
import OfficeComponent from '@/components/OfficeComponent/OfficeComponent'
import OverPartner from '@/components/OverPartnerComp/OverPartner'
import Tv from '@/components/TV img&video com/Tv'
import Topheadings from '@/components/TopHeadings/TopHeadings'
import Webuild from '@/components/We Build/Webuild'
import ValueComp from '@/components/valueComponent/ValueComp'
import React from 'react'

const SpanHeading ="WHO WE ARE"
const bigHeading =<>Providing Insights <br/>& solution at<br/> help businesses drive</>
const description ="Tech Verticks offers full-cycle design & development services to clients in digitizing their business idea into a successful launch."


const WeBuildHeading =
    " Maximize Your Success! Respond to the needs of the users through an aesthetic User Design , User Experience & high-end create a product with a striking effect";
  const WeBuildDescription = (
    <>
      Welcome to Tech Verticks — a top software development company established
      by motivated doers and tech entrepreneurs with a great mission in mind.
      <br />
      <br />
      We are experts in providing the best mobile app development services and
      creating successful business stories. Every customer is important to us,
      as we believe in taking everyone who approaches us to the next level. So,
      no matter what kind of app you desire; we can build anything for you from
      scratch. Our team of developers and designers use their years of
      experience to provide engaging navigation, user-friendly UI/UX, high
      definition UI/UX, and other features of the iOS and android app.
    </>
  );
  const WeBuildName = "TECH PROFESSIONALS";
  const WeBuildName1 = "YEARS OF EXPERIENCE";
  const WeBuildName2 = "PROJECTS COMPLETED";
  const WeBuildCount1 = "+90";
  const WeBuildCount2 = "+15";
  const WeBuildCount3 = "+750";


const About = () => {
  return (
    <div   >
      <Heading SpanHeading={SpanHeading} bigHeading = {bigHeading} description={description} AboutPage_Css
        scroll= "#weBuild"
        />  
     <ImageLayout/>
     <Webuild
       heading={WeBuildHeading}
       description={WeBuildDescription}
       name1={WeBuildName}
       Count1={WeBuildCount1}
       name2={WeBuildName1}
       Count2={WeBuildCount2}
       Count3={WeBuildCount3}
       name3={WeBuildName2} />
     <Tv video="/tvReel.mp4" /> 
     <ValueComp/>
     <OverPartner/>
     <Insight/>
     <GetInTouch/>
     <OfficeComponent/>
     
    </div>
  )
}

export default About
