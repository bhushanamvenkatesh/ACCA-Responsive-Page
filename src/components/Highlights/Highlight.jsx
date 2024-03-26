import React from 'react'
import './Highlight.css'

function Highlight({eachItem}) {
    
  return (
    <div className='each-highlight'>
        <span className={`${eachItem.logo} space`}></span> <span className='h-title'>{eachItem.title}</span>
        <br />
        <span>{eachItem.count}</span>
    </div>
    
  )
}

export default Highlight