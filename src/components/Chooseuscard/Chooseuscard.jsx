import React from 'react'
import './Chooseuscard.css'

function Chooseuscard({each}) {
  // console.log(each)
  return (
    <div className='wcu-card shadow'>
      <img src="" alt=""/>
      <h5>{each.title}</h5>
      <p>{each.descrption}</p>

    </div>
  )
}

export default Chooseuscard