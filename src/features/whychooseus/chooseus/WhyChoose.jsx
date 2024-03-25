import React from 'react'
import { useSelector } from 'react-redux'
import Chooseuscard from '../../../components/Chooseuscard/Chooseuscard'
import WcuLevelCard from '../../../components/Chooseuscard/WcuLevelCard'

function WhyChoose() {
  const x=useSelector(state=>state)
  // console.log(x.w.levels)
  let levels=x.w.levels
  let info=x.w.highlightes
  
  return (
    <div className='why-choose-us-container text-center p-2'>
        <h5>Why Choose</h5>
        <div className="choose-us-cards-container d-flex flex-row justify-content-center flex-wrap">
          {
            info.map((each)=>{
              return <Chooseuscard each={each}/>
            })
          }
          
        </div>
        <div className='d-flex justify-content-between p-3 flex-wrap'>
          {
            levels.map((each)=>{
              return <WcuLevelCard each={each}/>
            })
          }
        </div>
    </div>
  )
}

export default WhyChoose