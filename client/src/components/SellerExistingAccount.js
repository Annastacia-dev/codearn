import React from 'react'
import { useNavigate } from 'react-router-dom'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import SellerNewAccount from './SellerNewAccount'

const SellerExistingAccount = () => {

    const navigate = useNavigate()

    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [errors, setErrors] = React.useState('')

        // LogIn
        const handleSubmit = (e) => {
            e.preventDefault()
            fetch(`/profile`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password,
                    seller: true
            })
            })
            .then(r => {
                if (r.ok) {
                    r.json().then(user => {
                        console.log("user",user)
                        navigate('/dashboard')
                        window.location.reload()
    
                    })
                } else {
                    r.json().then(err => {
                        setErrors(err.errors)
                    })
                }
            })
        }
  return (
    <div>
        <div className="log-in container">
            <div className="row">
                <div className="col-md-6 mx-auto">
                    <div className="myform form ">
                        <div className="logo mb-3">
                            <div className="col-md-12 text-center">
                                <h2>Login</h2>
                            </div>
                        </div>
                        <form 
                        action="" 
                        method="post" 
                        name="login"
                        onSubmit={handleSubmit}
                        >
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
                                value={email}
                                required
                                onChange={(e) => setEmail(e.target.value)}
                                 />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Password</label>
                                <input 
                                type="password" 
                                name="password" 
                                id="password"  
                                className="form-control" 
                                aria-describedby="emailHelp" 
                                placeholder="Enter Password"
                                autoComplete='current-password'
                                value={password}
                                required
                                onChange={(e) => setPassword(e.target.value)}
                                 />
                            </div>
                            <div className="col-md-12 text-center">
                                {
                                    errors ? (
                                        <div className="alert alert-danger" role="alert">
                                            {
                                                errors.map(error => <p key={error}>{error}</p>)
                                            }
                                        </div>
                                    ) : null
                                    
                                }

                            </div>
                            <div className="col-md-12 text-center ">
                                <button type="submit" className="log-in btn btn-block mybtn btn-primary tx-tfm">Log In</button>
                            </div>
                            <div className="sign-up-here form-group">
                                <p className="text-center">Don't have account? &nbsp;
                                <Popup
                                trigger={<button className="btn btn-block mybtn btn-primary tx-tfm">Sign up here</button>}
                                modal
                                nested
                                >
                                 < SellerNewAccount />   
                                </Popup>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SellerExistingAccount