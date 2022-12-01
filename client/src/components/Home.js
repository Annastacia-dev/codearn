import React from 'react'
import NavBar from './NavBar'

const Home = ({ user, setUser }) => {
    console.log(user)



  return (
    <>
        <NavBar user={user} setUser={setUser} />
        <h1>
        </h1>
    </>
  )
}

export default Home