import React from 'react'
import { useNavigate } from 'react-router-dom'

const Backbutton = () => {
    const navigate = useNavigate()
  return (
    <>
        <button 
        className="btn btn-primary" 
        onClick={() => navigate(-1)}
        style={{
            marginTop: "-100px",
        }}
        >Back</button>
    </>
  )
}

export default Backbutton