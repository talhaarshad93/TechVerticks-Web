import React from 'react'
import styles from './Heading.module.css'
import classNames from 'classnames';
import Image from 'next/image';
import img from "../../assets/images/down arrow.png";

const Heading = () => {
  return (
    <div className={classNames(styles.margin,'container-fuild   p-5 ')}>
      <div>
        <span className={classNames(styles.spanHeading, '')}>GENERATE YOUR VISION</span>
        <div className={classNames(styles.bigHeading,'mt-1', )}>Crafting your
        fantasies with a
       twist of creativity</div>
      </div>
      <div className='mt-sm-5 mt-4 pr-5  flex align-items-center justify-content-between'>
        <button>
      <Image className={styles.img} src={img}  />
        </button>
      <div className={classNames(styles.description, ' ')}>We are an award-winning agency that launches companies of all sizes into the next era of growth.</div></div>
    </div>
  )
}

export default Heading
