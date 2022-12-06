import React,{ useState, useEffect } from 'react'
import Brand from './Brand';
import Backbutton from './Backbutton';



const Profile = () => {

const [currentUser, setCurrentUser] = useState([])

// get current user asychronously

async function getCurrentUser() {
    const response = await fetch("/profile");
    const data = await response.json();
    setCurrentUser(data);
}
useEffect(() => {
    getCurrentUser();
    }, []);

console.log(currentUser)

  return (
    <>
    <div className="container">

        <div className="row">
            <div className="col-12">
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-4">
                                < Brand />
                                <Backbutton/>
                                <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="user" className="rounded-circle" width={150} />
                                
                                </div>
                                <div className="col-md-6">
                                    <div className="profile-head">
                                        <h5>
                                            {currentUser.first_name + ' ' + currentUser.last_name}
                                        </h5>
                                        <h6>
                                            Web Developer and Designer
                                        </h6>
                                        <p className="profile-rating">RANKINGS : <span>8/10</span></p>
                                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                                            <li className="nav-item">
                                                <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                            </li>
                                        </ul>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <input type="submit" className="profile-edit-btn" name="btnAddMore" defaultValue="Edit Profile" />
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

