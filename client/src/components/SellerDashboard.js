import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/SellerDashboard.css'


const SellerDashboard = ({ user, setUser }) => {

    const navigate = useNavigate()

    const createTemplate = () => {
        navigate('/new_template')
    }

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
        {/* responsive side bar */}

        <div className="d-flex" id="wrapper">
            {/* Sidebar */}
            <div className="bg-light border-right" id="sidebar-wrapper">
                <div className="sidebar-heading">
                <i className="fa-brands fa-centercode"></i>
                    <h4 style={{display:"inline-block"}}>Codearn</h4> 
                    </div>
                <div className="list-group list-group-flush">
                    <a href="/dashboard" className="list-group-item list-group-item-action bg-light p-3">Dashboard</a>
                    <a href="mytemplates" className="list-group-item list-group-item-action bg-light p-3">My Templates</a>
                    <a href="/profile" className="list-group-item list-group-item-action bg-light p-3">Profile</a>
                    <a href="guidelines" className="list-group-item list-group-item-action bg-light p-3">Guidelines</a>
                    <a href="/payment" className="list-group-item list-group-item-action bg-light p-3">My Billing Information</a>
                    <a href="/user_view" className="list-group-item list-group-item-action bg-light p-3">User View</a>
                    <a href="#!" onClick={handleLogOut} className="list-group-item list-group-item-action bg-light p-3">Log Out</a>
                </div>
            </div>
            <div id="page-content-wrapper">
                <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
                    <div className="container-fluid">
                    <button 
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    
                    </div>
                </nav>
               
                <div className="container-fluid">
                    {/* Dashboard with user greeting and cards */}

                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="mt-4">Dashboard</h1>
                            <p className="lead">Welcome, {user.first_name}!</p>
                        </div>
                    </div>
                   {/* four cards in a row */}
                    <div className="row">
                        <div className="col-md-3">
                            <div className="card text-white bg-primary mb-3" style={{maxWidth: '18rem'}}>
                                <div className="card-header">Total templates</div>
                                <div className="card-body">
                                    <h5 className="card-title">{user.templates.length} templates</h5>
                                    {
                                        user.templates.length === 0 ? (
                                            <>
                                            <p className="card-text">You have no templates yet.</p>
                                            <button 
                                            className="btn btn-light"
                                            onClick={createTemplate}
                                            >Create a template</button>
                                            </>
                                        ) : (
                                            <>
                                            <button className="btn btn-light">View templates</button>
                                            </>
                                        )

                                    }

                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                        <div className="card text-white bg-primary mb-3" style={{maxWidth: '18rem'}}>
                                <div className="card-header">Total earnings</div>
                                <div className="card-body">
                                    <h5 className="card-title">placeholder</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                        <div className="card text-white bg-primary mb-3" style={{maxWidth: '18rem'}}>
                                <div className="card-header">Total downloads</div>
                                <div className="card-body">
                                    <h5 className="card-title">placeholder</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                        <div className="card text-white bg-primary mb-3" style={{maxWidth: '18rem'}}>
                                <div className="card-header">Total reviews</div>
                                <div className="card-body">
                                    <h5 className="card-title">placeholder</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    

                </div>
            </div>

        </div>
    </>
  )
}

export default SellerDashboard
