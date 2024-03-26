import React from 'react'
import { useSelector } from 'react-redux'
import Highlight from '../../../components/Highlights/Highlight'
import ApplyForm from '../../../components/ApplyForm/ApplyForm'
import './BecomeAcca.css'

function BecomeAcca() {
  const { highlightes } = useSelector((state) => state.highlightes)    
  return (
    <div className='top-section p-5'>
      <div className='top-section-details'>
        <h3>Become ACCA in 18 months</h3>
        <p>learn 4.0 Technologies go get your dream job by industry exports using structured content</p>
        <div className='highlightes-container'>
          {
            highlightes.map(eachItem => {
              return <Highlight eachItem={eachItem} />
            })
          }
        </div>
        <div className="top-sec-button-container mt-3">
            <button className='btn brouchure-button'>Brouchure</button>
            <button className='btn Register-button'>Register</button>
          </div>

      </div>
     
      <div className='top-section-appy-form'>
        <ApplyForm />
      </div>

    </div>
  )
}

export default BecomeAcca