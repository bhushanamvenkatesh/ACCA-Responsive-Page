import React from 'react'
import { useState } from 'react'
import Learncard from './Learncard'
import './whatLearn.css'

function WhatLearn() {
    let [learDetails]=useState([
        {
            title:'Knowledge Level',
            points:['You can learn and practise','Mastering these skills','Get indepthe knowledge'],
            bottom:'3 pages'
        },
        {
            title:'Skill Level',
            points:['Get trained like an IT professional','Become proficient in-demand skills','apply your skills to solve real-world problems'],
            bottom:'6 pages'
        },
        {
            title:'Professional Level',
            points:['Ready-to-deploy software enginee','Design Engineer','Front-end developer','Back-end developer'],
            bottom:'4 pages'
        }
    ])
  return (
    <div className='p-3 m-1'>
        <h4 className='text-center'>What will you Learn in ACCA?</h4>
        <div className='d-flex justify-content-center flex-wrap'>
            {
                learDetails.map((each)=>{
                    return <Learncard each={each}/>
                })
            }
        </div>
    </div>
  )
}

export default WhatLearn