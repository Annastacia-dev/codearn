import React from 'react'
import { useNavigate } from 'react-router-dom'

const Backbutton = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(-1, { replace: true })   
    }


  return (
    <>
        <button 
        className="btn btn-primary" 
        onClick={handleClick}
        style={{
            marginTop: "-50px",
        }}
        >Back</button>
    </>
  )
}

export default Backbutton