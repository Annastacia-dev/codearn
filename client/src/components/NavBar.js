import React from 'react'
import { useNavigate} from 'react-router-dom'
import '../css/NavBar.css'

const NavBar = ({ user, setUser }) => {

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
                    
                      <a href="#page-top" className="navbar-brand">
                        {
                          user ? (
                            <div className="greeting">
                              <h4>{getGreeting()} {user.first_name}</h4>
                            </div>
                          ) : (
                            <div className="greeting">
                              <h4>{getGreeting()}</h4>
                            </div>
                          )
                        }
                        </a>
                      <div className="collapse navbar-collapse" id="navbarResponsive">
                          <ul className="navbar-nav ms-auto my-2 my-lg-0">
                              <li className="nav-item dropdown">
                                  <a href="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Stacks</a>
                                  <div className="dropdown-menu">
                                      <a href="/" className="dropdown-item">HTML</a>
                                      <a href="/" className="dropdown-item">React</a>
                                      <a href="/" className="dropdown-item">Vue</a>
                                      <a href="/"className="dropdown-item">Angular</a>
                                  </div>
                                </li>
                                <li className="nav-item dropdown">
                                  <a href="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Templates</a>
                                  <div className="dropdown-menu">
                                      <a href="/"className="dropdown-item">Card</a>
                                      <a href="/" className="dropdown-item">Dashboard</a>
                                      <a href="/" className="dropdown-item">Headers</a>
                                      <a href="/" className="dropdown-item">Landing Page</a>
                                      <a href="/" className="dropdown-item">NavBar</a>
                                      
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