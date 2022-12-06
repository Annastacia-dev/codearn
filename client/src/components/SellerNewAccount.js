import React,{ useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import SellerExistingAccount from './SellerExistingAccount'

const SellerNewAccount = () => {

    const navigate = useNavigate()

    const [errors, setErrors] = useState([])
   


    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        username: '',
        email: '',
        password: '',
        password_confirmation: '',
        seller: true
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(r => {
            if (r.ok) {
                r.json().then(user => {
                    console.log("user",user)
                    navigate('/dashboard')
                })
            } else {
                r.json().then(err => {
                    setErrors(err.errors)
                })
            }
        })
    }


  return (
    <>
     <div style={{marginTop: '20px'}} className="container">
        <div className="row">
            <div className="col-md-6 mx-auto">
                <div id="first">
                    <div className="myform form ">
                        <div className="logo mb-3">
                            <div className="col-md-12 text-center">
                                <h4>Become A Contributor</h4>
                            </div>
                        </div>
                        <form style={{ border: '1px solid #ccc', padding:"30px"}} onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="firstName">First Name</label>
                                <input
                                type="text"
                                name="first_name"
                                className="form-control"
                                id="firstName"
                                aria-describedby="emailHelp"
                                placeholder="Enter First Name"
                                autoComplete='first-name'
                                value={formData.first_name}
                                onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Last Name</label>
                                <input
                                type="text"
                                name="last_name"
                                className="form-control"
                                id="lastName"
                                aria-describedby="emailHelp"
                                placeholder="Enter Last Name"
                                autoComplete='last-name'
                                value={formData.last_name}
                                onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input
                                type="text"
                                name="username"
                                className="form-control"
                                id="username"
                                aria-describedby="emailHelp"
                                placeholder="Enter Username"
                                autoComplete='username'
                                value={formData.username}
                                onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input
                                type="email"
                                name="email"
                                className="form-control"
                                id="email"
                                aria-describedby="emailHelp"
                                placeholder="Enter email"
                                autoComplete='email'
                                value={formData.email}
                                onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input
                                type="password"
                                name="password"
                                id="password"
                                className="form-control"
                                aria-describedby="emailHelp"
                                placeholder="Enter Password"
                                autoComplete='new-password'
                                value={formData.password}
                                onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="passwordConfirmation">Password Confirmation</label>
                                <input
                                type="password"
                                name="password_confirmation"
                                id="passwordConfirmation"
                                className="form-control"
                                aria-describedby="emailHelp"
                                placeholder="Enter Password Confirmation"
                                autoComplete='new-password'
                                value={formData.password_confirmation}
                                onChange={handleChange}
                                />
                            </div>
                            <div className="col-md-12 text-center ">
                                <button type="submit" className="log-in btn btn-block mybtn btn-primary tx-tfm">Sign Up</button>
                            </div>
                                {
                                    errors ? (
                                        errors.map( error => error ?
                                                    <div key={error} className="alert alert-danger" role="alert">
                                                    <p>{error}</p>
                                                    </div>
                                                    :
                                                    null
                                                )
                                            
                                    ) : null
                                    
                                }

                            <div  div className="log-in-sign-up col-md-12 text-center ">
                                Already have an account ? &nbsp;
                                <Popup
                                trigger={<button type="submit" className=" btn btn-block mybtn btn-primary tx-tfm">Sign In</button>}
                                modal
                                nested
                                >
                                <SellerExistingAccount />
                                </Popup>
                            </div>


                            <div className="col-md-12 ">
                                <div className="login-or">
                                    <hr className="hr-or"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <p className="text-center">By signing up you accept our <a href="/" id="terms">Terms Of Use</a></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div> 
    </>
  )
}

export default SellerNewAccount