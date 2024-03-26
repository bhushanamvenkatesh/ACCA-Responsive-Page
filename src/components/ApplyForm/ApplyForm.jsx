import React, { useState } from 'react'
import './ApplyForm.css'

function ApplyForm() {
  let [s, setS] = useState(false)
  const getcall = () => {
    setS(!s)

  }
  return (
    <div className='apply-form-container'>
      <form className='apply-form'>
        <h4 className='pt-2 pb-2'>Applying to the ACC </h4>
        <input type="text" placeholder='Enter your first name' /><br />
        <input type="text" placeholder='Enter your last name' /><br />
        <input type="text" placeholder='Enter your city name' /><br />
        <input type="email" placeholder='Enter your city email' /><br />
        <button type='button' data-bs-toggle="modal" data-bs-target="#exampleModal" className='call-back-button' onClick={getcall}>Request Call back</button>
      </form>
      {console.log(s)}

      {s && <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Request for call</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              you will get call soonly
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>}


    </div>

  )
}

export default ApplyForm