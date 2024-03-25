import React from 'react'
import ApplyForm from '../ApplyForm/ApplyForm'
import './kickoff.css'

function Kickoff() {
    return (

        <div className='kko-section-container p-5 mt-4'>
            <div className='text'>
                <h4>Kick off your ACCA Prep journey with IndigoLearn</h4>
                <p>Sign-in and get access to our FREE Courses</p>
                <button className='btn sign-up-button'>Sign up</button>

            </div>
            <div className='b-form top-section-appy-form'>
                <ApplyForm />
            </div>

        </div>
    )
}

export default Kickoff