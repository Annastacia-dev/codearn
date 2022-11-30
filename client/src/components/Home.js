import React from 'react'

const Home = ({ user, setUser }) => {

    const handleLogout = () => {
        fetch('/logout', {
            method: 'DELETE'
        }).then(() => {
            setUser(null)
        })
    }




  return (
    <div>
        <h1>Home</h1>
        <h2>{user.username}</h2> 
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Home