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
                  <a href="#page-top">
                      <i 
                      className="fa-brands fa-centercode"
                      style={{
                        fontSize: '1.5rem',
                        color: '#fff',
                        marginRight: '30px'
                      }}
                      >
                      </i>
                        </a>
                      <a href="#page-top" className="navbar-brand">
                        {
                          user ? (
                            <div className="greeting">
                              <h4>{getGreeting()} {user.first_name}</h4>
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
                                  <li  className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Stacks</li>
                                  <div className="dropdown-menu">
                                      <li   className="dropdown-item">HTML</li>
                                      <li   className="dropdown-item">React</li>
                                      <li   className="dropdown-item">Vue</li>
                                      <li   className="dropdown-item">Angular</li>
                                  </div>
                                </li>
                                <li className="nav-item dropdown">
                                  <a href="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Templates</a>
                                  <div className="dropdown-menu">
                                      <li className="dropdown-item">Card</li>
                                      <li  className="dropdown-item">Dashboard</li>
                                      <li  className="dropdown-item">Headers</li>
                                      <li  className="dropdown-item">Landing Page</li>
                                      <li className="dropdown-item">NavBar</li>
                                      
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