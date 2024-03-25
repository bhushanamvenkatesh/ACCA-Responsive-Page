import React from 'react'
import './Highlight.css'

function Highlight({eachItem}) {
    
  return (
    <div className='each-highlight shadow '>
        <span><span>{eachItem.logo}</span>{eachItem.title}</span><br />
        <span>{eachItem.count}</span>
    </div>
    
  )
}

export default Highlight