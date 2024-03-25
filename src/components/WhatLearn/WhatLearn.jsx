import React from 'react'
import { useState } from 'react'
import Learncard from './Learncard'
import './whatLearn.css'

function WhatLearn() {
    let [learDetails]=useState([
        {
            title:'Knoledge Level',
            points:['you will knowledge','skill','depth'],
            bottom:'3 pages'
        },
        {
            title:'Skill Level',
            points:['you will knowledge','skill','depth'],
            bottom:'6 pages'
        },
        {
            title:'Professional Level',
            points:['you will knowledge','skill','depth'],
            bottom:'4 pages'
        }
    ])
  return (
    <div className='p-3 m-1'>
        <h5 className='text-center'>What will you Learn in ACCA?</h5>
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