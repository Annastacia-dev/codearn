import React from 'react'
import '../css/Footer.css'

const Footer = () => {
  return (
    <>
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 footer-contact">
                        <p>
                            65 WoodAvenue <br />
                            Nairobi<br />
                            Kenya <br /><br />
                            <strong>Phone:</strong> +254 768 372 439<br />
                            <strong>Email:</strong> info@codearn.io <br />
                        </p>
                    </div>
                    <div className="col-lg-2 col-md-6 footer-links">
                        <h4>Useful Links</h4>
                        <ul>
                            <li><i className="bx bx-chevron-right"></i> <a href="/">Terms of service</a></li>
                            <li><i className="bx bx-chevron-right"></i> <a href="/">Privacy policy</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 footer-links">
                        <h4>Our Services</h4>
                        <ul>
                            <li><i className="bx bx-chevron-right"></i> <a href="/">Web Design</a></li>
                            <li><i className="bx bx-chevron-right"></i> <a href="/">Web Development</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 footer-links">
                        <h4>Socials</h4>
                        <div className="social-links mt-3">
                            <a href="/" className="twitter"><i class="fa-brands fa-twitter"></i></a>
                            <a href="/" className="facebook"><i class="fa-brands fa-facebook-f"></i></a>
                            <a href="/" className="instagram"><i class="fa-brands fa-instagram"></i></a>
                            <a href="/" className="linkedin"><i class="fa-brands fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
                {/* Copyright */}
                <div className="row">
                    <div className="col-md-12 text-center">
                        <p className="footer-text">© {new Date().getFullYear()} Codearn. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
            
        </footer>

    </>
  )
}

export default Footer