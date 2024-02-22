import React from 'react'
// import styles from './../Heading Component/Heading.module.css'
import styles from './Count.module.css'

import classNames from 'classnames';
import Count from './Count';
import Description from './Description';



const Webuild = ({heading,description,name1,name2,name3,Count1,Count3,Count2 ,weBuildCSS }) => {
 
  
  
  return (
    <div className='container-fluid  pt-5 ,mt-4 d-flex '>
        <div className="left col-3   offset-1  mt-3 flex-column align-items-center justify-content-center">
       {!weBuildCSS && <div className={classNames(styles.weBuild, 'ml-1')}>WE BUILD DIGITAL PRODUCTS </div>}
<Count name = {name1}  count = {Count1} weBuildCSS = {weBuildCSS} />
<Count name = {name2} count ={Count2} weBuildCSS = {weBuildCSS} />
<Count name = {name3}  count ={Count3} weBuildCSS = {weBuildCSS} />
        </div>
       <Description heading = {heading} description={description} weBuildCSS = {weBuildCSS}/>
    </div>
  )
}

export default Webuild
