import React,{ useState} from 'react'
import SignUp from './SignUp'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import '../css/LogIn.css'
import Brand from './Brand';


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
        // if response is ok, set user to the user object, notify user that they are logged in, and redirect to home page
        .then( r => {
            if (r.ok) {
                r.json().then(user => {
                    setUser(user)
                    user.seller ? navigate('/dashboard') : navigate('/home')
                    setTimeout(() => {
                        notify()
                    }
                    , 1000)
                })
            } else {
                r.json().then(err => setErrors(err.errors))
            }
        }
        )

    }

function notify(){
    toast.success("You have successfully logged in!",{
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored"
    })
}

  return (
    <>

    {
    showLogin ? (<div className="log-in container">
            <div className="row">
                <div className="col-md-6 mx-auto">
                    <div className="myform form ">
                        <div className="logo mb-3">
                            <div className="col-md-12 text-center">
                                < Brand />
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
                                    theme="colored"
                                 />
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
                            <div className="form-check">
                                <input
                                type="checkbox"
                                name="rememberMe"
                                id="rememberMe"
                                className="form-check-input"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(!rememberMe)}
                                />
                                <label htmlFor="rememberMe" className="form-check-label">Remember Me</label>
                            </div>
                            <div className="col-md-12 text-center ">
                                <button type="submit" className="log-in btn btn-block mybtn btn-primary tx-tfm">Login</button>
                            </div>
                            <div className="sign-up-here form-group">
                                <p className="text-center">Don't have account? &nbsp;
                                <button className="btn btn-block mybtn btn-primary tx-tfm"  onClick={() => setShowLogin(false)}>Sign up here</button></p>
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