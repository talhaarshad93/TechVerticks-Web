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
  Testimonial_heading
}) {
  return (
    <div>
      <div className={haveIdea ? style1.ideaCustome : style1.titleText}>{title}</div>
      <div
        className={customStyle? style1.customStyle1: haveIdea? style1.letsBuild: sectionCss? style1.sectionHeading: style1.heading}
        style={{
        ...{ width: width},...headingStyles,
        //mohsin Css
        ...(VC_Css && {fontWeight:900,width:"65vw",fontSize:"4.7vw",fontFamily:"system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif" }),
        ...(TESTIMONIALS && {fontWeight:700,width:"38vw",fontSize:"3.8vw",lineHeight:"1.19" }),
        ...(SPD_OP && { fontSize:"4.1vw",width:"40vw", lineHeight:"1.2" }),
        ...(SPD_OP_WB && { fontSize:"4.1vw",width:"40vw", lineHeight:"1.2", fontWeight:800,fontFamily:"system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif" }),
        ...(SPD_TWU_heading &&{ fontSize:"4.2vw", width:"76vw",fontWeight:800, fontFamily:"system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"} ),
        ...(Testimonial_heading &&{ fontSize:"3.6vw",marginTop:"0.3vw", width:"40vw",fontWeight:800,lineHeight:"1.3", fontFamily:"system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"} ),
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
            ? style1.craftingpara : style1.praContainer
        }
            style={{
              ...(VC_Css && { fontWeight:300,width:"70vw",fontSize:"1.8vw",fontFamily:"system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif" }),
              ...(blackColor && { color: "#000000" }),
              ...(SPD_OP_para && { fontSize:"1.25vw",width:"36vw", color:"#666666", fontWeight:100,marginTop:"2vw" }),
              ...(SPD_TWU_Para && { fontSize:"1.25vw",width:"46vw", color:"#666", fontSize:"1.4vw", fontWeight:300,marginTop:"2vw",fontFamily:"system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif" }),
            
              // Add other style properties as needed
            }}
        
      >
        {paragraph}
      </div>
    </div>
  );
}
