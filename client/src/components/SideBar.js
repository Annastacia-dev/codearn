import React from 'react'
import { useNavigate } from 'react-router-dom'

const SideBar = ({ user, setUser }) => {

    const navigate = useNavigate()

      // logout
      const handleLogOut = () => {
        fetch('/logout', {
            method: 'DELETE'
        }).then(() => {
            setUser(null)
            navigate('/')
        })
    }



  return (
    <>
      {/* Sidebar */}
      <div className="bg-light border-right" id="sidebar-wrapper">
                <div className="sidebar-heading">
                <i className="fa-brands fa-centercode"></i>
                    <h4 style={{display:"inline-block"}}>Codearn</h4> 
                    </div>
                <div className="list-group list-group-flush">
                    <a href="/dashboard" className="list-group-item list-group-item-action bg-light p-3">Dashboard</a>
                    {
                        user && user.username === 'admin' ? (
                            <a href="seller_templates" className="list-group-item list-group-item-action bg-light p-3">All templates</a>
                        ) : (
                            <a href="seller_templates" className="list-group-item list-group-item-action bg-light p-3">My Templates</a>
                        )
                    }
                    
                    <a href="/profile" className="list-group-item list-group-item-action bg-light p-3">Profile</a>
                    <a href="guidelines" className="list-group-item list-group-item-action bg-light p-3">Guidelines</a>
                    <a href="/user_view" className="list-group-item list-group-item-action bg-light p-3">User View</a>
                    <button onClick={handleLogOut} className="list-group-item list-group-item-action bg-light p-3">Log Out</button>
                </div>
            </div>
    </>
  )
}

export default SideBar