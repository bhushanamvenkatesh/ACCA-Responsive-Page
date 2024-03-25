import React from 'react'
import './ApplyForm.css'
function ApplyForm() {
  return (
    <div className='apply-form-container'>
        <form className='apply-form'>
        <h5 className='pt-2 pb-2'>Applying to the ACC </h5>
        <input type="text" placeholder='Enter your first name' /><br />
        <input type="text" placeholder='Enter your last name' /><br />
        <input type="text" placeholder='Enter your city name' /><br />
        <input type="email" placeholder='Enter your city email' /><br />
        <button className='call-back-button'>Request Call back</button>
       
           
    </form>
    </div>
    
  )
}

export default ApplyForm