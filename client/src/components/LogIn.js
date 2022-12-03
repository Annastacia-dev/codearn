import React,{ useState} from 'react'
import SignUp from './SignUp'
import { useNavigate } from 'react-router-dom'


const LogIn = ({ setUser }) => {

    const navigate = useNavigate()

    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [errors, setErrors] = React.useState('')
    const [rememberMe, setRememberMe] = useState(true)

    const [showLogin, setShowLogin] = useState(true)


    // LogIn
    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password,
                remember_me: rememberMe
        })
        })
        .then(r => {
            if (r.ok) {
                r.json().then(user => {
                    setUser(user)
                   user ? user.seller ? navigate('/dashboard') : navigate('/home') : navigate('/')
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
    <>

    {
    showLogin ? (<div className="container">
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
                            <div className="form-check">
                                <input
                                type="checkbox"
                                name="rememberMe"
                                id="rememberMe"
                                className="form-check-input"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                                />
                            </div>
                            <div className="col-md-12 text-center ">
                                <button type="submit" className=" btn btn-block mybtn btn-primary tx-tfm">Login</button>
                            </div>
                            <div className="form-group">
                                <p className="text-center">Don't have account? &nbsp;
                                <button className=" btn btn-block mybtn btn-primary tx-tfm"  onClick={() => setShowLogin(false)}>Sign up here</button></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        ) : <SignUp setUser={setUser} setShowLogIn={setShowLogin} />
        }
        
    </>
  )
}

export default LogIn