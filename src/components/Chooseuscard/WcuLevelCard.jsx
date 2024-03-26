import React from 'react'

function WcuLevelCard({each}) {
    // console.log(each)
  return (
    <div className='level-card shadow'>
        <div className='l-card'>
            <span className='level-title'>{each.title}</span><br />
            <span className={each.logo}></span> <span>{each.descriptions}</span>
        </div>

    </div>
  )
}

export default WcuLevelCard