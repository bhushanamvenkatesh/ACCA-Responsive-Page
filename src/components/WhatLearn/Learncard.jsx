import React from 'react'
import './whatLearn.css'

function Learncard({each}) {
    // console.log(each)
  return (
    <div className='learn-card'>
        <p className='fill-color'>{each.title}</p>
        <ul className=''>
            {
                each.points.map((each)=><li>{each}</li>)
            }

       </ul>
       <p className='fill-color'>{each.bottom}</p>
            
        
    </div>
  )
}

export default Learncard