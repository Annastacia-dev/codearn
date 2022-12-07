import React from 'react'
import error from  '../images/error.gif'
import { useNavigate } from 'react-router-dom'

const Error = () => {

    const navigate = useNavigate()


  return (
    <div className='error'>
        <img src={error} alt="" />
        <div className="row">
            <div className="col">
            <button 
            className='btn btn-primary' 
            onClick={() => navigate(-1)}
            >
             Back
            </button>
            </div>

            <div className="col">
            <button className='btn btn-primary'
            onClick={() => navigate('/')}
            >
             Home
            </button>
            </div>

        </div>
       
    </div>
  )
}

export default Error