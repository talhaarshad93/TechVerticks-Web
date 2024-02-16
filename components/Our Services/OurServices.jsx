import React, { useState } from "react";
import ImgTextComponent from "@/components/Img and Text Component/ImgTextComponent";
import classNames from "classnames";
import styles from "./../We Build/Count.module.css";
import style from "./OurServices.module.css";


const OurServices = () => {
    const data = [
        { heading: 'Mobile Application Development', image: "/AppCrops.mp4" ,text: 'Grow your business with a full-fledged, scalable and stable mobile app and get MI development services (iOS, Android and Hybrid mobile ) under a single roof'},
        { heading: 'UI/UX Design', image:"/design.mp4", text: 'Get visually appealing designs for your projects with our top-rated UI & UX design and development technologies to give an aesthetic user experience' },
        { heading: 'Web Development', image: "/digital.mp4", text: 'Delivering comprehensive web development services with broad-ranging expertise and technologies that encompasses every corner of the digital web'},
        { heading: 'Digital Marketing', image:"/future.mp4", text: 'Comprehensive and business-focused solutions for search engine optimization and social media marketing strategies coupled with a decade worth of experience and expert insight.' },
    ];

    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleHeadingHover = (index) => {
        setHoveredIndex(index);

    };

    const handleHeadingLeave = () => {
        setHoveredIndex(null);
    };

    return (
        <div>
            <div className={classNames(style.headDiv)}>
                <div className={classNames(style.weBuild)}>OUR SERVICES</div>
                <p className={classNames(style.working)}>
                    Working holistically, from identities to full-scale applications.
                </p>
            </div>
            <div className={style.mainContainer}>
                <div className={style.leftDiv}>
                    {hoveredIndex !== null && (
                        <div className={style.main}>
                            <ImgTextComponent
                                src={data[hoveredIndex].image}
                                alt={`${data[hoveredIndex].heading} Image`}
                                text={data[hoveredIndex].text}
                            />
                        </div>
                    )}
                </div>
                <div className={style.rightDiv}>
                    {data.map((item, index) => (
                        <div
                            key={index}
                            className={style.item}
                            onMouseEnter={() => handleHeadingHover(index)}
                            onMouseLeave={handleHeadingLeave}
                        >
                            <div className={style.headings}>
                               {item.heading}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurServices;
