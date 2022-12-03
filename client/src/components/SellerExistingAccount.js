import React from 'react'
import { useNavigate } from 'react-router-dom'

const SellerExistingAccount = ({ user, setUser }) => {

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
                        setUser(user)
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

        const handleSignUpAsSeller = () => {
            navigate('/seller_new_account')
        }


  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-md-6 mx-auto">
                    <div className="myform form ">
                        <div className="logo mb-3">
                            <div className="col-md-12 text-center">
                                <h1>Login</h1>
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
                                <button type="submit" className=" btn btn-block mybtn btn-primary tx-tfm">Log In</button>
                            </div>
                            <div className="form-group">
                                <p className="text-center">Don't have account? &nbsp;
                                <button className=" btn btn-block mybtn btn-primary tx-tfm"  onClick={handleSignUpAsSeller}>Sign up here</button></p>
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