import React from 'react'
import '/src/App.css'


const Content = ({title,paragraph,source}) => {
  return (
    <div className='content-container'>
        <img src={source} className='content-img'/>
        <div className='content-right'>
            <h1>{title}</h1>
            <p>{paragraph}</p>
        </div>
        </div>
  )
}

export default Content