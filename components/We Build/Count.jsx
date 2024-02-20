import React from 'react';
import styles from './Count.module.css';



const Count = ({name,count,weBuildCSS,nameCount1,count1}) => {
    
  return (
    <div className={weBuildCSS ? styles.nameCount1 : styles.nameCount} >
      <div className={weBuildCSS ? styles.weBuildCSS : styles.name}
      
      
      >{name}</div>
      <div className={weBuildCSS ? styles.count1 : styles.count} ><span></span><span >{count}</span></div>
    </div>
  )
}

export default Count
