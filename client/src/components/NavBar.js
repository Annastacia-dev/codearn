import React from 'react'
import { useNavigate} from 'react-router-dom'
import '../css/NavBar.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const NavBar = ({ user, setUser }) => {

    const navigate = useNavigate()

    // notify
  function notify() {
    toast.warn("You have successfully logged out!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
  })}

    // logout
    const handleLogOut = () => {
      fetch('/logout', {
          method: 'DELETE'
      }).then(() => {
          setUser(null)
          setTimeout(() => {
              notify()
          }, 5)
          navigate('/')
      })
  }

  // sell content

  const handleSellContent = () => {
    navigate('/sell_content')
  }



  // render greeting depending on time of day
  const getGreeting = () => {
    const hour = new Date().getHours()
    if (hour < 12) {
      return 'Good Morning'
    } else if (hour < 17) {
      return 'Good Afternoon'
    } else {
      return 'Good Evening'
    }
  }




  return (
    <>

                {/* NavBar */}
                <nav id="mainNav" className="home navbar navbar-expand-lg navbar-light fixed-top py-3">
                  <div className="container px-4 px-lg-5">
                  < ToastContainer
                                  position="top-center"
                                  autoClose={3000}
                                  hideProgressBar={false}
                                  newestOnTop={false}
                                  closeOnClick
                                  rtl={false}
                                  pauseOnFocusLoss
                                  draggable
                                  pauseOnHover
                                  theme='colored'
                                   />
                      <a href="#page-top" className="navbar-brand">
                        {
                          user ? (
                            <div className="greeting">
                              <h4>
                                <i className="fa-brands fa-centercode"></i>
                                  Codearn <span style={{marginLeft: "100px"}}>
                                  {getGreeting()} {user.first_name}
                                  </span>
                                  
                                  </h4>
                            </div>
                          ) : (
                            <div className="greeting">
                              <h6>{getGreeting()}</h6>
                            </div>
                          )
                        }
                        </a>
                      <div className="collapse navbar-collapse" id="navbarResponsive">
                          <ul className="navbar-nav ms-auto my-2 my-lg-0">
                              <li className="nav-item dropdown">
                                  <option  className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Stacks</option>
                                  <div className="dropdown-menu">
                                      <option value="html" className="dropdown-item">HTML</option>
                                      <option value="react" className="dropdown-item">React</option>
                                      <option value="vue" className="dropdown-item">Vue</option>
                                      <option value="angular" className="dropdown-item">Angular</option>
                                      <option value="bootstrap" className="dropdown-item">Bootstrap</option>
                                      <option value="tailwind" className="dropdown-item">Tailwind</option>

                                  </div>
                                </li>
                                <li className="nav-item dropdown">
                                  <option className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Templates</option>
                                  <div className="dropdown-menu">
                                      <option value="card" className="dropdown-item">Card</option>
                                      <option value="dashboard"  className="dropdown-item">Dashboard</option>
                                      <option value="headers"  className="dropdown-item">Headers</option>
                                      <option value="landingpage"  className="dropdown-item">Landing Page</option>
                                      <option value="navbar" className="dropdown-item">NavBar</option>
                                      <option value="table" className="dropdown-item">Table</option>
                                      <option value="button" className="dropdown-item">Button</option>   
                                  </div>
                                </li>
                          </ul>
                      </div>
                      <button 
                      className="navbar-toggler navbar-toggler-left"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarResponsive"
                      aria-controls="navbarResponsive"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                      >
                        <span className="navbar-toggler-icon"></span>
                      </button>
                      
                      <div className="collapse navbar-collapse" id="navbarResponsive">
                          <ul className="navbar-nav ms-auto my-2 my-lg-0">
                          <li className="nav-item">
                                  <button 
                                  className="btn btn-primary sell-content"
                                  onClick={handleSellContent}
                                  >Sell Content</button>
                                  <a href="/user_profile" className="btn btn-primary sell-content">My profile</a>  
                              </li>
                              <li className="nav-item">
                                  <button onClick={handleLogOut} className="btn btn-primary logout">Log Out</button>
                                 
                              </li>
                          </ul>
                      </div>
                  </div>
                </nav>
    </>
  )
}

export default NavBar