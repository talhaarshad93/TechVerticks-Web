import React from 'react'
// import '../styles/style.css';
import style from './Footer.module.css'
import classNames from "classnames";
import { useRouter } from "next/router";


function FooterCard({title,items,}) {

  const router = useRouter()
  const ButtonHandler=(path)=>{
    router.push(path)
    // console.log(`"Check"${path}`)
    
  
  }

  return (
    <div className='ml-5 p-3 p-md-0' >
      <h2 className={classNames(style.titleCss,'p-1 mb-2 titleCss')} >{title}</h2>
      <ul className="list-unstyled">
  <style jsx>{`
    ul li::before {
      content: '•';
      margin-right: 8px;
    }
  `}</style>
       {items?.map((item, index) => (
        <div key={item.id} className={style.main}>
        <li className={classNames(style.footerItem,'flex  p-md-1 text-left ')}  key={index} onClick={()=> ButtonHandler(item.path)}>{item.text}</li>
        </div>
      ))}
      </ul>
    </div>
  )
}

export default FooterCard
