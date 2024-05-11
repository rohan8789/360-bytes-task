import React from 'react'
import { useNavigate } from 'react-router-dom'

const Landing = () => {
    const navigate=useNavigate();
    const moveHome = () =>{
        navigate('/');
    }
  return (
    <div className='d-flex flex-column justify-content-center align-items-center' style={{marginTop:"10%"}}>
        <h2>You have successfully registered...</h2>
        <h5>Your UID is your aadhar number.</h5>
        <button className='btn btn-primary' onClick={moveHome}>Continue to login</button>
    </div>
  )
}

export default Landing