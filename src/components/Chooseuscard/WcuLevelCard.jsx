import React from 'react'

function WcuLevelCard({each}) {
    console.log(each)
  return (
    <div className='level-card shadow'>
        <div className='l-card'>
            <span>{each.title}</span><br />
            <span><span>{each.logo}</span>{each.description}</span>
        </div>

    </div>
  )
}

export default WcuLevelCard