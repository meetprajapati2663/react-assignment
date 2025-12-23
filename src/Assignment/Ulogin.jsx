import React, { useState } from 'react'
import {
  MDBInput,
  MDBCheckbox,
  MDBBtn
} from 'mdb-react-ui-kit';

function Ulogin() {
    const[form,setfrom] = useState({
        email : "",
        password : ""
    })

  return (
    <div className='container'>
         <form className='m-5'>
      <MDBInput className='mb-4' name='email' id='form5Example1' label='Email' />
      <MDBInput className='mb-4' name='password'  type='email' id='form5Example2' label='Password' />

      <MDBCheckbox
        wrapperClass='d-flex justify-content-center mb-4'
        id='form5Example3'
        label='I have read and agree to the terms'
        defaultChecked
      />

      <MDBBtn type='submit' block>
        Subscribe
      </MDBBtn>
    </form>
    </div>
  )
}

export default Ulogin