import style1 from "./TopHeadings.module.css";
// import "../valueComponent/ValueComp.module.css";

export default function Topheadings({
  title,
  heading,
  VC_Css,
  TESTIMONIALS,
  paragraph,
  customStyle,
  abcClass,
  width,
  haveIdea,
  sectionCss,
  craftingCss,
  headingStyles,
  blackColor,
  SPD_OP,
  SPD_OP_WB,
  SPD_OP_para,
  SPD_TWU_heading,
  SPD_TWU_Para,
  Testimonial_heading,
  SPDFirstHeading,
  SPD_Para,
  SPD_Tech_Para,
  OfficeHover,
  serviceCss
}) {
  return (
    <div>
      <div className={haveIdea ? style1.ideaCustome : style1.titleText}
       style={{...(OfficeHover && {color:"#fff",})}}
      >{title}</div>
      <div
        className={customStyle? style1.customStyle1: haveIdea? style1.letsBuild: sectionCss? style1.sectionHeading: SPDFirstHeading? style1.SPD_topHeading_CSS : style1.heading}
        style={{
        ...{ width: width},...headingStyles,
        //mohsin Css
        ...(VC_Css && {fontWeight:900,width:"65vw",fontSize:"4.7vw",fontFamily:"system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif" }),
        ...(TESTIMONIALS && {fontWeight:700,width:"38vw",fontSize:"3.8vw",lineHeight:"1.19" }),
        ...(serviceCss && {fontSize:"5vw",lineHeight:"5.3vw",textTransform:"uppercase" }),
        ...(SPD_OP && { fontSize:"4.1vw",width:"40vw", lineHeight:"1.2" }),
        ...(SPD_OP_WB && { fontSize:"4.1vw",width:"40vw", lineHeight:"1.2", fontWeight:800,fontFamily:"system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif" }),
        ...(SPD_Para && { fontSize:"4.1vw",width:"80vw", lineHeight:"1.2", fontWeight:800,fontFamily:"TT Interphases Pro Trial ExtraBold"}),
        ...(SPD_TWU_heading &&{ fontSize:"4.2vw", width:"76vw",fontWeight:800, fontFamily:"system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"} ),
        ...(SPD_Tech_Para &&{ fontSize:"4.2vw", width:"76vw",fontWeight:800, fontFamily:"system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"} ),
        ...(Testimonial_heading &&{color:"red", fontSize:"3.6vw",marginTop:"0.3vw", width:"50vw",fontWeight:800,lineHeight:"1.3", fontFamily:"system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"} ),
        ...(OfficeHover &&{color:"#fff",width:"2vw",} ),
        // ...(craftingCss1 &&{color:"#fff",} ),
        // Add other style properties as needed
      }}
      >
        {heading}
      </div>
      <div
        // style={{ fontSize: smallFont ? "1vw" : "1.8vw" }}
        className={
          abcClass
            ? style1.customStyle : sectionCss
            ? style1.sectionpara : craftingCss 
            ? style1.craftingpara : SPDFirstHeading? style1.SPD_ParaCSS : style1.praContainer
        }
            style={{
              ...(VC_Css && { fontWeight:300,width:"70vw",fontSize:"1.8vw",fontFamily:"TT Interphases Pro Trial Medium" }),
              ...(blackColor && { color: "#000000" }),
              ...(SPD_OP_para && { fontSize:"1.4vw",width:"36vw", color:"#666666", fontWeight:100,marginTop:"2vw",fontFamily:"TT Interphases Pro Trial Regular" }),
              ...(SPD_TWU_Para && { fontSize:"1.25vw",width:"46vw", color:"#666", fontSize:"1.4vw", fontWeight:300,marginTop:"2vw",fontFamily:"TT Interphases Pro Trial Medium"}),
              ...(SPD_Para && {color:"#666",width:"75vw",lineHeight:"1.3", fontSize:"1.4vw",marginTop:"2vw",fontFamily:"TT Interphases Pro Trial Regular"}),
              ...(SPD_Tech_Para && {color:"#666",width:"45vw",lineHeight:"1.3", fontSize:"1.4vw",marginTop:"2vw",fontFamily:"TT Interphases Pro Trial Regular"}),
              ...(OfficeHover && {color:"#fff", marginTop:"1vw",width:"20vw", fontSize:"1.1vw",fontFamily:"TT Interphases Pro Trial Regular"}),
            
              // Add other style properties as needed
            }}
        
      >
        {paragraph}
      </div>
    </div>
  );
}
