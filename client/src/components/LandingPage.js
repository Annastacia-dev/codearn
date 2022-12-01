import React from 'react'
import { useNavigate } from "react-router-dom";
import '../css/LandingPage.css'
import Footer from './Footer'

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
                    
                      <a href="#page-top" className="navbar-brand">
                      <i class="fa-brands fa-centercode"></i>
                        Codearn
                        </a>
                      <div className="collapse navbar-collapse" id="navbarResponsive">
                          <ul className="navbar-nav ms-auto my-2 my-lg-0">
                              <li className="nav-item">
                                  <a href="#about" className="nav-link">About</a>
                              </li>
                              <li className="nav-item">
                                  <a href="#services" className="nav-link">Services</a>
                              </li>
                              <li class="nav-item dropdown">
                                  <a href="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Stacks</a>
                                  <div class="dropdown-menu">
                                      <a href="/" className="dropdown-item">HTML</a>
                                      <a href="/" className="dropdown-item">React</a>
                                      <a href="/" className="dropdown-item">Vue</a>
                                      <a href="/"className="dropdown-item">Angular</a>
                                  </div>
                                </li>
                                <li className="nav-item dropdown">
                                  <a href="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Templates</a>
                                  <div class="dropdown-menu">
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
                                  Create UI templates in minutes
                                  </h1>
                                  <hr className="divider" />
                              </div>
                              <div style={{marginTop: "1rem"}}  className="col-lg-8 align-self-baseline">
                                  <p style={{lineHeight: "1.7"}} className="text-white-75 mb-5">
                                  Get your website up and running with the right look, feel and functionality. 
                                  <br />
                                  Our templates allow you to customize the look and feel of your site to meet the needs of your audience. 
                                  <br />
                                  They are designed to be flexible, so that you can create exactly what you need for your project.
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
                                  <h2 className="text-centre mt-0">UI templates for developers</h2>
                                  <hr className="divider divider-light" />
                                  <p style={{marginTop: "2rem"}}  className="text-75 mb-4">
                                  If you're a developer, you know how hard it can be to find the right UI template. We've got you covered!

                                  Our site has a ton of templates to choose from, along with step-by-step instructions on how to customize them. You can also upload your own templates and earn money!

                                  And if that wasn't enough, we'll even send you a free copy of our latest ebook on designing apps.
                                  </p>
                                  <a style={{marginTop: "1rem"}}  className="btn btn-primary btn-xl" href="/signup">Sign Up</a>
                                  </div>
                                  </div>
                                  </div>
                                  </section>

                                {/* services */}
                                <section style={{marginTop: "-7rem"}} className="page-section services" id="services">
                                    <div className="container px-4 px-lg-5">
                                    <div className="row gx-4 gx-lg-5 justify-content-center">
                                        <h2 style={{textAlign: "center"}} className="text-centre  mt-0">Our Services</h2>
                                        <hr className="divider divider-light" />
                                        <div style={{marginTop: "5rem"}}  className="row gx-4 gx-lg-5">
                                            <div className="col-lg-3 col-md-6 text-center">
                                                <div className="mt-5">
                                                    <i className="fa-solid fa-file text"></i>
                                                    <h3 className="h4 mb-2">Sturdy Templates</h3>
                                                    <p className="text mb-0">Our templates are updated regularly so they don't break.</p>
                                                    </div>
                                                    </div>
                                                    <div className="col-lg-3 col-md-6 text-center">
                                                        <div className="mt-5">
                                                        <i className="fa-solid fa-clock"></i>
                                                            <h3 className="h4 mb-2">Up to Date</h3>
                                                            <p className="text mb-0">All dependencies are kept current to keep things fresh.</p>
                                                            </div>
                                                            </div>
                                                            <div className="col-lg-3 col-md-6 text-center">
                                                                <div className="mt-5">
                                                                <i className="fa-solid fa-upload"></i>
                                                                    <h3 className="h4 mb-2">Ready to Publish</h3>
                                                                    <p className="text mb-0">You can use this design as is, or you can make changes!</p>
                                                                    </div>
                                                                    </div>
                                                                    <div className="col-lg-3 col-md-6 text-center">
                                                                        <div className="mt-5">
                                                                        <i className="fa-solid fa-heart"></i>
                                                                            <h3 className="h4 mb-2">Made with Love</h3>
                                                                            <p className="text mb-0">You have to make your websites with love these days!</p>
                                                                            </div>
                                                                            </div>
                                                                            </div>
                                                                            </div>
                                                                            </div>
                                                                            </section>

    </div>
    <Footer />
    </>
  )
}

export default LandingPage