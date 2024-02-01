import React from 'react'
// import styles from './../Heading Component/Heading.module.css'
import styles from './Count.module.css'

import classNames from 'classnames';
import Count from './Count';
import Description from './Description';



const Webuild = () => {
  return (
    <div className='container-fluid  pt-5 mt-4 d-flex '>
        <div className="left col-3   offset-1  mt-3 flex-column align-items-center justify-content-center">
        <div className={classNames(styles.weBuild, 'ml-1')}>WE BUILD DIGITAL PRODUCTS </div>
<Count name = "TECH PROFESSIONALS" count = {"90"}/>
<Count name = "YEARS OF EXPERIENCE" count = {"15"}/>
<Count name = "PROJECTS COMPLETED" count = {"750"}/>
        </div>
       <Description/>
    </div>
  )
}

export default Webuild
