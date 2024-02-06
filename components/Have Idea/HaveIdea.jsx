import React from 'react';
import Topheadings from '../TopHeadings/TopHeadings';
import classNames from 'classnames';
import style from './HaveIdea.module.css';
import { useRouter } from 'next/router'; // Import the useRouter hook

const HaveIdea = () => {
  let text = "Let’s Connect with Us!";
  const router = useRouter(); // Initialize the useRouter hook

  const handleClick = () => {
    // Navigate to the contact page when the button is clicked
    router.push('/ContactUs');
  };

  return (
    <div className={style.main}>
      <Topheadings
        title={"Have an idea?"}
        heading={"let's build & scale it!"}
        ideaCustome
        haveIdea
        letsBuild
      />
      {/* Attach onClick event to the button */}
      <button className={classNames(style.seeBtn, '')} onClick={handleClick}>{text}</button>
    </div>
  );
};

export default HaveIdea;
