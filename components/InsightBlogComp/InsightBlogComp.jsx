import style from "./InsightBlogComp.module.css";
import ArrowBtn from "../../assets/images/ArrowBtn.png";
import Image from "next/image";
import Link from "next/link";

export default function InsightBlogComp({ item, blogCss, onButtonClick }) {
  const handleButtonClick = () => {
    // Invoke the callback function passed from the parent component
    onButtonClick();
  };
  return (
    <div>
      <div className={blogCss ? style.mainContainerBlog : style.mainContainer}>
        <div className={style.ImgDiv}>
          <Image
            className={blogCss ? style.BlogImg : style.img}
            src={item.img}
            alt="InsightImages"
          />
        </div>
        <div className={blogCss ? style.blogDetail : style.detailDiv}>
          <div className={blogCss ? style.blogPage : style.blog}>BLOG</div>
          <div className={blogCss ? style.headingBlog : style.heading}>
            {item.heading}
          </div>
          <div className={blogCss ? style.detailBlog : style.detail}>
            {" "}
            <Link href="/">Read Complete Blog</Link>{" "}
          </div>
        </div>
        <button className={blogCss ? style.btnBlog : style.btn} onClick={handleButtonClick}>
          <Image className={style.img1} src={ArrowBtn} alt="arrowBtn" />
        </button>
      </div>
    </div>
  );
}
