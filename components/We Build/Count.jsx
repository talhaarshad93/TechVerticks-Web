import React from 'react'
import styles from './Count.module.css'
import classNames from 'classnames';



const Count = ({name,count}) => {
    
  return (
    <div className={classNames(styles.nameCount,'')} >
      <span className={classNames(styles.name, )}>{name}</span>
      <div className={classNames(styles.count,)} ><span>+</span><span >{count}</span></div>
    </div>
  )
}

export default Count
