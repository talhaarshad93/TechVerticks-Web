import React from 'react'
// import '../styles/style.css';

function FooterCard({title,items}) {
  return (
    <div className='ml-5 p-3 p-md-0' >
      <h2 className='p-1 mb-2 titleCss' >{title}</h2>
      <ul className="list-unstyled">
  <style jsx>{`
    ul li::before {
      content: '•';
      margin-right: 8px;
    }
  `}</style>
       {items?.map((item, index) => (
        <div>
        <li className='flex  p-md-1 text-left   footerItem'  key={index}>{item}</li></div>
      ))}
      </ul>
    </div>
  )
}

export default FooterCard
