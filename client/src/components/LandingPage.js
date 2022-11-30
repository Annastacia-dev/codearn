import React from 'react'
import { useNavigate } from "react-router-dom";
import '../css/LandingPage.css'

const LandingPage = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/login')
    }


  return (
    <>

    <div id="page-top">



                {/* NavBar */}
                <nav id="mainNav" className="navbar navbar-expand-lg navbar-light fixed-top py-3">
                  <div className="container px-4 px-lg-5">
                    <i class="fa-brands fa-centercode"></i>
                      <a href="#page-top" className="navbar-brand">Codearn</a>
                      <button 
                      className="navbar-toggler navbar-toggler-right"
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
                                  <a href="#about" className="nav-link">About</a>
                              </li>
                              {/* LogIn button */}
                              <li className="nav-item">
                                  <button onClick={handleClick} className="btn btn-primary login" href="/login">Log In</button>
                              </li>
                          </ul>
                      </div>
                  </div>
                </nav>

                  {/* Masthead */}

                  <header className="masthead">
                      <div className="container px-4 px-lg-5 h-100">
                          <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
                              <div className="col-lg-8 align-self-end">
                                  <h1 className="text-white font-weight-bold">
                                    All your FrontEnd assets in one place !
                                  </h1>
                                  <hr className="divider" />
                              </div>
                              <div className="col-lg-8 align-self-baseline">
                                  <p className="text-white-75 mb-5">
                                    Codearn is a platform where you can find all the FrontEnd assets you need to build your website.
                                    You can also share your own assets with the community.
                                    </p>
                                  <a href="/signup" className="btn btn-primary btn-xl">Get Started For Free</a>
                              </div>
                          </div>
                      </div>
                  </header>

                  {/* About */}

                  <section className="page-section" id="about">
                      <div className="container px-4 px-lg-5">
                          <div className="row gx-4 gx-lg-5 justify-content-center">
                              <div className="col-lg-8 text-center">
                                  <h2 className="text-centre mt-0">We've got what you need!</h2>
                                  <hr className="divider divider-light" />
                                  <p className="text-75 mb-4">Codearn is a platform for developers to connect and collaborate on projects.</p>
                                  <a className="btn btn-primary btn-xl" href="/signup">Sign Up</a>
                                  </div>
                                  </div>
                                  </div>
                                  </section>
    </div>
    </>
  )
}

export default LandingPage