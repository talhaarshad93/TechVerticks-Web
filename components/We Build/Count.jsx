import React, { useState, useEffect } from 'react';
import styles from './Count.module.css';



const Count = ({name,count,weBuildCSS,nameCount1,count1,counting}) => {

   const [num, setNum] = useState(0);
const [started, setStarted] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    const elementOffset = document.getElementById('countSection').offsetTop;
    const scrollPosition = window.scrollY + window.innerHeight;
    if (scrollPosition >= elementOffset && !started) {
      setStarted(true);
    }
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, [started]);

useEffect(() => {
  if (started) {
    const interval = setInterval(() => {
      if (num < count) {
        setNum(prevCount => prevCount + 1);
      } else {
        clearInterval(interval);
      }
    }, 10); // Interval in milliseconds
    return () => clearInterval(interval); // Clear interval when count reaches target
  }
}, [started, num, count]);
 
    
  return (
    <div  id="countSection" className={weBuildCSS ? styles.nameCount1 : styles.nameCount} >
      <div className={weBuildCSS ? styles.weBuildCSS : styles.name}
      
      
      >{name}</div>
      <div  className={weBuildCSS ? styles.count1 : styles.count} ><span >+{num}</span></div>
    </div>
  )
}

export default Count
