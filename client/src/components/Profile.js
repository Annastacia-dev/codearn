import React,{ useState, useEffect } from 'react'
import Brand from './Brand';
import Backbutton from './Backbutton';
import '../css/Profile.css'
import Popup from 'reactjs-popup'
import { ToastContainer, toast } from 'react-toastify';
import 'reactjs-popup/dist/index.css'
import 'react-toastify/dist/ReactToastify.css'
import { useNavigate } from 'react-router-dom'



const Profile = () => {

const navigate = useNavigate()

const [currentUser, setCurrentUser] = useState({})
// get current user asychronously

async function getCurrentUser() {
    const response = await fetch("/profile");
    const data = await response.json();
    setCurrentUser(data);
}
useEffect(() => {
    getCurrentUser();
    }, []);


// delay before setting form values to current user
useEffect(() => {
    setTimeout(() => {
        setUsername(currentUser.username)
        setEmail(currentUser.email)
        setFirstName(currentUser.first_name)
        setLastName(currentUser.last_name)
        setProfilePicture(currentUser.profile_picture? currentUser.profile_picture : "https://png.pngitem.com/pimgs/s/146-1468281_profile-icon-png-transparent-profile-picture-icon-png.png")
        setPassword(currentUser.password_digest)
        setConfirmPassword(currentUser.password_digest)
    }, 2000)
}, [currentUser])

const [username, setUsername] = useState()
const [email, setEmail] = useState('')
const [firstName, setFirstName] = useState('')
const [lastName, setLastName] = useState('')
const [profilePicture, setProfilePicture] = useState('')
const [password, setPassword] = useState('')
const [confirmPassword, setConfirmPassword] = useState('')
const [errors, setErrors] = useState(null)

const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch('/profile', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username,
            email,
            first_name: firstName,
            last_name: lastName,
            profile_picture: profilePicture,
            password: password,
            password_confirmation: confirmPassword
        })
    })
    const data = await response.json()
    if (data.errors) {
        setErrors(data.errors)
        toast.error('Profile update failed')
    } else {
        toast.success('Profile updated successfully')
        window.location.reload()
    }
}

const handleDelete = async (e) => {
    e.preventDefault()
    const response = await fetch('/profile', {
        method: 'DELETE',
    })
    const data = await response.json()
    if (data.errors) {
        setErrors(data.errors)
        toast.error('Account delete failed')
    } else {
        toast.success('Account deleted successfully')
        navigate('/')
    }
}




  return (
    <>

    <div className="profile container">
        {/* Card with profile picture in the middle */}
        <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
                <div style={{marginTop: "50px"}} className="row">
                    <div className="col">
                    < Backbutton />
                    </div>
                    <div className="col">
                    <Brand />
                    </div>
                </div>
                
                
                <div className="card">
                    <div className="img">
                    <img 
                    className="card-img-top img-fluid  rounded-circle "
                    src={
                        currentUser.profile_picture ? currentUser.profile_picture : "https://png.pngitem.com/pimgs/s/146-1468281_profile-icon-png-transparent-profile-picture-icon-png.png"
                    } alt="" />
                    </div>
                   
                    <div className="card-body">
                        <h4 className="card-title">@{currentUser.username}</h4>
                        <p className="card-text">{currentUser.email}</p>
                    </div>
                </div>
                {/* Edit Profile */}
                <>
                <Popup trigger={<button className="btn btn-primary">Edit Profile</button>}
    modal
    nested
    closeOnDocumentClick
    {...{ position: "right center"}}
    >
          <div className="header">
            <h2>Edit Profile </h2> 
             </div>
          < ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme='colored'
           />
                <div className="content">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input
                            type="text"
                            className="form-control"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                            type="email"
                            className="form-control"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="first_name">First Name</label>
                            <input
                            type="text"
                            className="form-control"
                            id="first_name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="last_name">Last Name</label>
                            <input
                            type="text"
                            className="form-control"
                            id="last_name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="profile_picture">Profile Picture</label>
                            <input
                            type="text"
                            className="form-control"
                            id="profile_picture"
                            value={profilePicture}
                            onChange={(e) => setProfilePicture(e.target.value)}
                            />
                        </div>
                        {
                            errors ? errors.map((error) => {
                                return (
                                    <div className="alert alert-danger" role="alert">
                                        {error}
                                    </div>
                                )
                            }
                            ) : null
                        }
                        <div className="col">
                        <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="actions">
                    <div className="col">
                    <button className="btn btn-danger" onClick={() => {window.location.reload()}}>Close</button>
                    </div>
                </div>
                </Popup>
                </>
                {/* Delete account */}
                <>
                <button onClick={handleDelete} className="btn btn-danger">Delete Account</button>
                </>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
                <div className="row">
                    <div className="notif col">
                        <h5>Notifications</h5>
                        <div className="card">
                            <div className="card-body">
                                <h6 className="card-title">Email</h6>
                                <p className="card-text">I wish to receive newsletters, promotions and news from Freepik Company</p>
                            </div>
                            <div className="card-footer">
                                <div className="custom-control custom-switch">
                                    <input type="checkbox" className="custom-control-input" id="customSwitch1" />
                                    <label className="custom-control-label" htmlFor="customSwitch1">On</label>
                                </div>
                            </div>
                        </div>
                        {
                            currentUser.seller ? (
                                <div style={{marginTop: "20px"}} className="card">
                                <div className="card-body">
                                    <h6 className="card-title">Email</h6>
                                    <p className="card-text">
                                        Notify me when someone downloads my work!
                                    </p>
                                </div>
                                <div className="card-footer">
                                    <div className="custom-control custom-switch">
                                        <input type="checkbox" className="custom-control-input" id="customSwitch1" />
                                        <label className="custom-control-label" htmlFor="customSwitch1">On</label>
                                    </div>
                                </div>
                            </div>
                            )
                            : (
                                <div style={{marginTop: "20px"}} className="card">
                                <div className="card-body">
                                    <h6 className="card-title">Templates</h6>
                                    <p className="card-text">Notify me when new templates are uploaded</p>
                                </div>
                                <div className="card-footer">
                                    <div className="custom-control custom-switch">
                                        <input type="checkbox" className="custom-control-input" id="customSwitch1" />
                                        <label className="custom-control-label" htmlFor="customSwitch1">On</label>
                                    </div>
                                </div>
                            </div>
                            )
                        }
                    </div>
                </div>
            </div>
            <div style={{marginTop: "100px"}}   className="col">
                <div className="row">
                    <div  className="col">
                        <h5>Account</h5>
                        <div className="card">
                            <div className="card-body">
                                <h6 className="card-title">Change Password</h6>
                                <p className="card-text">Change your password</p>
                                </div>
                                <div className="card-footer">
                                   <Popup
                                   trigger={ <button className="btn btn-primary">Change Password</button>}
                                      modal
                                     nested
                                   >
                                    <div className="form">
                                        <div className="form-group">
                                            <label htmlFor="password">Password</label>
                                            <input
                                            type="password"
                                            className="form-control"
                                            id="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <form onSubmit={handleSubmit}>
                                            <label htmlFor="confirm_password">Confirm Password</label>
                                            <input
                                            type="password"
                                            className="form-control"
                                            id="confirm_password"
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                            />
                                             <div className="col">
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                        </div>
                                        <div className="col">
                                        <button className="btn btn-danger" onClick={() => {window.location.reload()}}>Close</button>
                                        </div>
                                        </form>
                                        </div>
                                        {
                                            errors ? errors.map((error) => {
                                                return (
                                                    <div className="alert alert-danger" role="alert">
                                                        {error}
                                                    </div>
                                                )
                                            }
                                            ) : null
                                        }
                                       
                                    </div>
                                    

                                   </Popup>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
    
    
    </>
  )
}

export default Profile

