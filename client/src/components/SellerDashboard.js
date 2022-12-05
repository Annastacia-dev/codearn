import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/SellerDashboard.css'



const SellerDashboard = ({ user, setUser }) => {

    const navigate = useNavigate()

    const [currentUser, setCurrentUser] = useState([])

    async function getUser() {
        const response = await fetch('/profile')
        const data = await response.json()
        setCurrentUser(data)
    }

    useEffect(() => {
        getUser();
    }, [])

    const createTemplate = () => {
        navigate('/new_template')
    }

    const viewTemplates = () => {
        navigate('/seller_templates')
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
                    <a href="seller_templates" className="list-group-item list-group-item-action bg-light p-3">My Templates</a>
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
               
                <div style={{position: "relative"}} className="container-fluid">
                    {/* Dashboard with user greeting and cards */}

                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="mt-4">Dashboard</h1>
                            <p className="lead">Welcome, {
                                currentUser ? currentUser.first_name : 'User'
                            }!</p>
                        </div>

                            {/* Settings button on the right */}
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-md-6">
                                        <button onClick={createTemplate} className="btn btn-primary new-template">
                                        <i className="fa-solid fa-square-plus"></i>
                                        New Template
                                        </button>
                                        {
                                           currentUser ? (
                                            currentUser.username === 'admin' ? (
                                                <button onClick={viewTemplates} className="btn btn-primary"
                                                style={{marginBottom: "20px"}}
                                                >
                                                <i className="fa-solid fa-eye"></i>
                                                View All Templates
                                                </button>
                                            ) : null
                                           ) : null
                                        }
                                    </div>
                                </div>
                            </div>
                    </div>
                   {/* four cards in a row */}
                    <div className="row">
                        <div className="col-md-3">
                            <div className="card text-white bg-primary mb-3">
                                <div className="card-header">Total templates</div>
                                <div className="card-body">
                                    <h5 className="card-title">{
                                        currentUser ? currentUser.templates ? currentUser.templates.length : 0 : 0
                                    } templates</h5>
                                    {
                                       currentUser ? (
                                       currentUser.templates ? (
                                        currentUser.templates.length === 0 ? (
                                            <>
                                            <p className="card-text">You have no templates yet.</p>
                                            <button 
                                            className="btn btn-light"
                                            onClick={createTemplate}
                                            >Create a template</button>
                                            </>
                                        ) : (
                                            currentUser.username === 'admin' ? (
                                                null
                                            ) :(
                                                <button 
                                                className="btn btn-light"
                                                onClick={viewTemplates}
                                                >View templates</button>  
                                            )
                                        )

                                       ): 0
                                       ) : (
                                            null
                                            )

                                    }

                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                        <div className="card text-white bg-primary mb-3">
                                <div className="card-header">Total earnings</div>
                                <div className="card-body">
                                    <h5 className="card-title">placeholder</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                        <div className="card text-white bg-primary mb-3">
                                <div className="card-header">Total downloads</div>
                                <div className="card-body">
                                    <h5 className="card-title">placeholder</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                        <div className="card text-white bg-primary mb-3">
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
